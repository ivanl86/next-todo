import { getLastEditedTime } from "@/utils/time";
import { Tooltip } from "@nextui-org/tooltip";
import React from "react";

interface TimeStampProps {
  createdAt: Date;
  editedAt: Date;
}

const TimeStamp = ({ createdAt, editedAt }: TimeStampProps) => {
  return (
    <Tooltip
      showArrow={true}
      color="success"
      content={`Created at ${createdAt.toLocaleString()}`}
    >
      <p className="w-full max-w-fit text-xs text-gray-600 truncate">{`Last edited at ${getLastEditedTime(
        editedAt
      )} ago`}</p>
    </Tooltip>
  );
};

export default TimeStamp;
