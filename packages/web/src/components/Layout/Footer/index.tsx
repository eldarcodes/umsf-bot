import React from "react";
import { BotFooter } from "@bot/ui/styles";
import { useTypeSafeTranslation } from "../../../hooks/useTypeSafeTranslation";

const Footer = () => {
  const { t } = useTypeSafeTranslation();
  const year = new Date().getFullYear();

  return (
    <BotFooter>
      {t("project_title")} © {year}
    </BotFooter>
  );
};

export default Footer;
