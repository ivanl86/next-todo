"use client";

import { DropdownItem, DropdownMenu } from "@nextui-org/dropdown";
import Link from "next/link";

interface NavDropdownMenuProps {}

const NavDropdownMenu = ({}: NavDropdownMenuProps) => {
  return (
    <DropdownMenu className="text-gray-600">
      <DropdownItem color="primary">
        <Link href={"/"}>Home</Link>
      </DropdownItem>
      <DropdownItem color="primary">
        <Link href={"/archived"}>Archived</Link>
      </DropdownItem>
    </DropdownMenu>
  );
};

export default NavDropdownMenu;
