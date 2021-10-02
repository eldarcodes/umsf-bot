import React from "react";
import { useTranslation } from "react-i18next";
import { Select, LanguageSelectorWrapper } from "@bot/ui";
import { useTypeSafeTranslation } from "../hooks/useTypeSafeTranslation";

interface LanguageSelectorProps {}

export const LanguageSelector: React.FC<LanguageSelectorProps> = () => {
  const { i18n } = useTranslation();
  const { t } = useTypeSafeTranslation();

  return (
    <LanguageSelectorWrapper>
      <Select
        defaultValue="ru"
        style={{ width: 200 }}
        onChange={value => i18n.changeLanguage(value)}
      >
        <Select.Option value="ru">🇷🇺 {t("locales.ru")}</Select.Option>
        <Select.Option value="uk">🇺🇦 {t("locales.uk")}</Select.Option>
      </Select>
    </LanguageSelectorWrapper>
  );
};
