import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Skeleton } from "@nextui-org/skeleton";
import React from "react";

interface TodoSkeletonProps {}

const TodoSkeleton = ({}: TodoSkeletonProps) => {
  return (
    <Card shadow="sm" isHoverable className="flex col-span-1 h-full">
      <Skeleton className="rounded-lg">
        <CardHeader className="text-lg">Header</CardHeader>
      </Skeleton>
      <Skeleton>
        <CardBody className="text-sm">Body</CardBody>
      </Skeleton>
      <Skeleton>
        <CardFooter className="text-sm">Footer</CardFooter>
      </Skeleton>
    </Card>
  );
};

export default TodoSkeleton;
