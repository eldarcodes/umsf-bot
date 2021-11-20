import React from "react";
import type { ButtonProps } from "@bot/ui";
import StyledButton from "./Button.style";

export interface BotButtonProps extends ButtonProps {
  label?: string;
}

export const BotButton = ({
  children,
  label,
  ...restProps
}: BotButtonProps) => {
  return <StyledButton {...restProps}>{label || children}</StyledButton>;
};
