import { TrashIcon } from "@heroicons/react/24/outline";
import { Tooltip } from "@nextui-org/tooltip";

interface DeleteButtonProps {
  onDelete: () => Promise<void>;
}

const DeleteButton = ({ onDelete }: DeleteButtonProps) => {
  return (
    <Tooltip showArrow content="Delete" color="danger">
      <TrashIcon
        className="w-4 cursor-pointer text-danger"
        onClick={onDelete}
      />
    </Tooltip>
  );
};

export default DeleteButton;
