import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline";
import { Dropdown, DropdownTrigger } from "@nextui-org/dropdown";
import { ReactElement } from "react";

interface NavDropdownTriggerProps {
  isAuthenticated: boolean;
  dropdownMenu: ReactElement;
}

const NavDropdownTrigger = ({
  isAuthenticated,
  dropdownMenu,
}: NavDropdownTriggerProps) => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Bars3BottomLeftIcon className="w-8 cursor-pointer text-gray-600 hover:w-9 hover:opacity-85" />
      </DropdownTrigger>
      {isAuthenticated && dropdownMenu}
    </Dropdown>
  );
};

export default NavDropdownTrigger;
