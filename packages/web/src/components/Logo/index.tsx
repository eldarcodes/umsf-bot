import React from "react";
import { BotLogo } from "@bot/ui/styles";

interface ILogo {
  onClick?: () => {};
}

const Logo: React.FC<ILogo> = props => {
  return <BotLogo {...props} />;
};

export default Logo;
