import { Dropdown, DropdownTrigger } from "@nextui-org/dropdown";
import { ReactElement } from "react";

interface ProfileDropdownTriggerProps {
  trigger: ReactElement;
  dropdownMenu: ReactElement;
}

const ProfileDropdownTrigger = async ({
  trigger,
  dropdownMenu,
}: ProfileDropdownTriggerProps) => {
  return (
    <Dropdown>
      <DropdownTrigger>{trigger}</DropdownTrigger>
      {dropdownMenu}
    </Dropdown>
  );
};

export default ProfileDropdownTrigger;
