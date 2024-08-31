import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { Button } from "@nextui-org/button";
import { Tooltip } from "@nextui-org/tooltip";

interface ConfirmButtonProps {}

const ConfirmButton = ({}: ConfirmButtonProps) => {
  return (
    <Tooltip showArrow={true} content="Confirm" color="primary">
      <Button isIconOnly spinner size="sm" color="primary" type="submit">
        <CheckCircleIcon className="w-6" />
      </Button>
    </Tooltip>
  );
};

export default ConfirmButton;
