import React from "react";
import TodoSkeleton from "./TodoSkeleton";

interface TodoListSkeletonProps {
  count: number;
}

const TodoListSkeleton = ({ count }: TodoListSkeletonProps) => {
  return (
    <div>
      {[...Array(count)].map((_, idx) => (
        <TodoSkeleton key={idx} />
      ))}
    </div>
  );
};

export default TodoListSkeleton;
