import React from "react";
import type { SpinProps } from "@bot/ui";
import StyledLoader from "./Loader.style";

interface LoaderProps {
  height: string;
}

export const Loader: React.FC<LoaderProps & SpinProps> = props => {
  return <StyledLoader {...props} />;
};
