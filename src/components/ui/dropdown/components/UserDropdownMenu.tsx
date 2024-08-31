"use client";

import { DropdownItem, DropdownMenu } from "@nextui-org/dropdown";
import { User as DBUser } from "@prisma/client";
import Link from "next/link";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";

interface UserDropdownMenuProps {
  user: DBUser;
}

const UserDropdownMenu = ({}: UserDropdownMenuProps) => {
  return (
    <DropdownMenu>
      <DropdownItem
        key="profile"
        color="primary"
        className="text-primary transition-transform"
      >
        <Link href={"/user/profile"}>Profile</Link>
      </DropdownItem>

      <DropdownItem
        key="signout"
        color="danger"
        className="text-danger transition-transform"
      >
        <LogoutLink>Logout</LogoutLink>
      </DropdownItem>
    </DropdownMenu>
  );
};

export default UserDropdownMenu;
