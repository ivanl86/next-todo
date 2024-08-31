import { cn } from "@nextui-org/react";
import { PropsWithChildren } from "react";

interface NavbarProps extends PropsWithChildren {}

const Navbar = ({ children }: NavbarProps) => {

  return (
    <nav className="flex w-full h-full sm:max-h-16 justify-center items-center px-4 sticky">
      <header
        className={cn(
          `flex max-sm:flex-col justify-between items-center w-full h-full md:px-6`
        )}
      >
        {children}
      </header>
    </nav>
  );
};

export default Navbar;
