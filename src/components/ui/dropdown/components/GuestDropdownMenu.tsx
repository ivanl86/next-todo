"use client";

import { DropdownItem, DropdownMenu } from "@nextui-org/dropdown";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";

interface GuestDropdownMenuProps {}

const GuestDropdownMenu = ({}: GuestDropdownMenuProps) => {
  return (
    <DropdownMenu>
      <DropdownItem
        color="primary"
        className="text-primary transition-transform"
      >
        <LoginLink>Login</LoginLink>
      </DropdownItem>

      <DropdownItem
        color="secondary"
        className="text-secondary transition-transform"
      >
        <RegisterLink>Sign up</RegisterLink>
      </DropdownItem>
    </DropdownMenu>
  );
};

export default GuestDropdownMenu;
