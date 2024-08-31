"use client";

import { NextUIProvider } from "@nextui-org/react";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  className?: string;
}

const Providers = ({ children, className }: Props) => {
  return <NextUIProvider className={className}>{children}</NextUIProvider>;
};

export { Providers };
