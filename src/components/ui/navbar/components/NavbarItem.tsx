import { cn } from "@nextui-org/react";
import { PropsWithChildren } from "react";

interface NavbarItemProps extends PropsWithChildren {
  className?: string;
}

const NavbarItem = ({ children, className }: NavbarItemProps) => {
  return (
    <li
      className={cn(
        `h-auto max-sm:w-full w-auto justify-center list-none flex ${className}`
      )}
    >
      {children}
    </li>
  );
};

export default NavbarItem;
