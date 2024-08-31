import { PencilIcon } from "@heroicons/react/24/outline";
import { cn } from "@nextui-org/react";
import { Tooltip } from "@nextui-org/tooltip";

interface EditButtonProps {
  hidden?: boolean;
  onOpen: () => void;
}

const EditButton = ({ hidden, onOpen }: EditButtonProps) => {
  return (
    <Tooltip showArrow content="Edit" color="primary">
      <PencilIcon
        className={cn("w-4 cursor-pointer text-primary", hidden && "hidden")}
        onClick={onOpen}
      />
    </Tooltip>
  );
};

export default EditButton;
