import React from "react";
import type { SpinProps } from "@bot/ui";
import StyledLoader from "./Loader.style";

export interface LoaderProps {
  height: number;
}

export const Loader: React.FC<LoaderProps & SpinProps> = props => {
  return <StyledLoader {...props} />;
};
