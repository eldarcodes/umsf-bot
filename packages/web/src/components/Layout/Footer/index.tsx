import React from "react";
import { BotFooter } from "@bot/ui/styles";

const Footer = () => {
  const year = new Date().getFullYear();

  return <BotFooter>UMSF Bot © {year}</BotFooter>;
};

export default Footer;
