import { XCircleIcon } from "@heroicons/react/24/outline";
import { Button } from "@nextui-org/button";
import { Tooltip } from "@nextui-org/tooltip";

interface CancelButtonProps {
  onClose: () => void;
}

const CancelButton = ({ onClose }: CancelButtonProps) => {
  return (
    <Tooltip showArrow={true} content="Cancel" color="danger">
      <Button isIconOnly spinner size="sm" color="danger" onPress={onClose}>
        <XCircleIcon className="w-6" />
      </Button>
    </Tooltip>
  );
};

export default CancelButton;
