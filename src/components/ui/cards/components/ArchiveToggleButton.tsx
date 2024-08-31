import {
  ArchiveBoxXMarkIcon,
  ArchiveBoxArrowDownIcon,
} from "@heroicons/react/24/outline";
import { Tooltip } from "@nextui-org/tooltip";
import React from "react";

interface ArchiveToggleButtonProps {
  isArchived: boolean;
  onArchiveToggle: () => Promise<void>;
}

const ArchiveToggleButton = ({
  isArchived,
  onArchiveToggle,
}: ArchiveToggleButtonProps) => {
  return (
    <Tooltip
      showArrow
      content={isArchived ? "Unarchive" : "Archive"}
      color="secondary"
    >
      {isArchived ? (
        <ArchiveBoxXMarkIcon
          className="w-4 cursor-pointer text-secondary"
          onClick={onArchiveToggle}
        />
      ) : (
        <ArchiveBoxArrowDownIcon
          className="w-4 cursor-pointer text-secondary"
          onClick={onArchiveToggle}
        />
      )}
    </Tooltip>
  );
};

export default ArchiveToggleButton;
