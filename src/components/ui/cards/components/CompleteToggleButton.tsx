import { DocumentCheckIcon as SolidDocCheckIcon } from "@heroicons/react/16/solid";
import { DocumentCheckIcon as OutlineDocCheckIcon } from "@heroicons/react/24/outline";
import { cn } from "@nextui-org/react";
import { Tooltip } from "@nextui-org/tooltip";

interface CompleteToggleButtonProps {
  isCompleted: boolean;
  hidden?: boolean;
  onCompleteToggle: () => Promise<void>;
}

const CompleteToggleButton = ({
  isCompleted,
  hidden,
  onCompleteToggle,
}: CompleteToggleButtonProps) => {
  return (
    <Tooltip
      showArrow
      content={isCompleted ? "Unmark completed" : "Mark completed"}
      color={isCompleted ? "success" : "warning"}
    >
      {isCompleted ? (
        <SolidDocCheckIcon
          className={cn(`w-4 cursor-pointer text-success`, hidden && "hidden")}
          onClick={onCompleteToggle}
        />
      ) : (
        <OutlineDocCheckIcon
          className={cn(`w-4 cursor-pointer text-warning`, hidden && "hidden")}
          onClick={onCompleteToggle}
        />
      )}
    </Tooltip>
  );
};

export default CompleteToggleButton;
