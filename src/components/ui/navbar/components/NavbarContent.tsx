import { cn } from "@nextui-org/react";
import { PropsWithChildren } from "react";

interface NavbarContentProps extends PropsWithChildren {
  justify?: "start" | "center" | "end";
}

const NavbarContent = ({
  children,
  justify = "center",
}: NavbarContentProps) => {
  const pos = `justify-${justify}`;
  return (
    <ul className={cn("h-auto w-full flex max-sm:justify-center py-2", pos)}>
      {children}
    </ul>
  );
};

export default NavbarContent;
