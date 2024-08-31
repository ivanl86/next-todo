import React from "react";

interface EmptyListProps {
  prompt?: string;
}

const EmptyList = ({ prompt }: EmptyListProps) => {
  return (
    <p className="text-4xl text-gray-600">
      {prompt ? prompt : "No todos found"}
    </p>
  );
};

export default EmptyList;
