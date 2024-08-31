import { BackspaceIcon } from "@heroicons/react/24/outline";
import { Button } from "@nextui-org/button";
import { Tooltip } from "@nextui-org/tooltip";

interface ClearButtonProps {
  onClear: () => void;
}

const ClearButton = ({ onClear }: ClearButtonProps) => {
  return (
    <Tooltip showArrow={true} content="Clear" color="warning">
      <Button isIconOnly spinner size="sm" color="warning" onPress={onClear}>
        <BackspaceIcon className="w-6 text-gray-100" />
      </Button>
    </Tooltip>
  );
};

export default ClearButton;
