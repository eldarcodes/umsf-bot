import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Select, LanguageSelectorWrapper } from "@bot/ui";
import { useTypeSafeTranslation } from "../hooks/useTypeSafeTranslation";

interface LanguageSelectorProps {}

export const LanguageSelector: React.FC<LanguageSelectorProps> = () => {
  const { i18n } = useTranslation();
  const { t } = useTypeSafeTranslation();

  const [language, setLanguage] = useState(i18n.language);

  useEffect(() => {
    setLanguage(i18n.language);
  }, [i18n.language]);

  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
    setLanguage(language);
  };

  return (
    <LanguageSelectorWrapper>
      <Select value={language} style={{ width: 200 }} onChange={handleChange}>
        <Select.Option value="ru">🇷🇺 {t("locales.ru")}</Select.Option>
        <Select.Option value="uk">🇺🇦 {t("locales.uk")}</Select.Option>
      </Select>
    </LanguageSelectorWrapper>
  );
};
