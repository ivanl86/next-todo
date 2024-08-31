import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/providers/Providers";
import ProfileDropdownTrigger from "@/components/ui/dropdown/ProfileDropdownTrigger";
import SearchInputBox from "@/components/ui/inputs/SearchInputBox";
import NavDropdownTrigger from "@/components/ui/dropdown/NavDropdownTrigger";
import NavDropdownMenu from "@/components/ui/dropdown/components/NavDropdownMenu";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import db from "@/db/prisma";
import UserDropdownMenu from "@/components/ui/dropdown/components/UserDropdownMenu";
import { Button } from "@nextui-org/button";
import GuestDropdownMenu from "@/components/ui/dropdown/components/GuestDropdownMenu";
import UserProfile from "@/components/ui/dropdown/components/UserProfile";
import Footer from "@/components/ui/Footer";
import { TodosProvider } from "@/providers/TodosProvider";
import { findAllTodos } from "@/actions/todos";
import Navbar from "@/components/ui/navbar/Navbar";
import NavbarContent from "@/components/ui/navbar/components/NavbarContent";
import NavbarItem from "@/components/ui/navbar/components/NavbarItem";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Todo",
  description: "Powered by Next.js and Prisma",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isAuthenticated, getUser } = getKindeServerSession();

  const user = await getUser();

  const dbUser = await db.user.findUnique({
    where: {
      id: user?.id ?? "",
    },
  });

  const isAuth = await isAuthenticated();

  const res = await findAllTodos(user?.id!);

  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers className="flex flex-col max-w-full w-screen min-h-screen antialiased">
          <Navbar>
            <NavbarContent justify="start">
              <NavbarItem>
                <NavDropdownTrigger
                  isAuthenticated={isAuth}
                  dropdownMenu={<NavDropdownMenu />}
                />
              </NavbarItem>
            </NavbarContent>

            <NavbarContent>
              <NavbarItem className="relative">
                <SearchInputBox />
              </NavbarItem>
            </NavbarContent>

            <NavbarContent justify="end">
              <NavbarItem>
                <ProfileDropdownTrigger
                  trigger={
                    isAuth ? (
                      <UserProfile user={dbUser!} />
                    ) : (
                      <Button>Hello, guest</Button>
                    )
                  }
                  dropdownMenu={
                    isAuth ? (
                      <UserDropdownMenu user={dbUser!} />
                    ) : (
                      <GuestDropdownMenu />
                    )
                  }
                />
              </NavbarItem>
            </NavbarContent>
          </Navbar>

          <TodosProvider fetchedTodos={res.status === "ok" ? res.todos : []}>
            {children}
          </TodosProvider>

          <Footer />
        </Providers>
      </body>
    </html>
  );
}
