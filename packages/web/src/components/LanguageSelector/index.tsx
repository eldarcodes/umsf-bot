import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Select } from "@bot/ui";
import { BotLanguageSelector } from "@bot/ui/styles";

interface LanguageSelectorProps {}

const LanguageSelector: React.FC<LanguageSelectorProps> = () => {
  const { i18n } = useTranslation();

  const [language, setLanguage] = useState(i18n.language);

  useEffect(() => {
    setLanguage(i18n.language);
  }, [i18n.language]);

  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
    setLanguage(language);
  };

  const languages = [
    { value: "en", flag: "🇬🇧", label: "English" }, // English

    /* Languages that are in ISO 639-1, sorted by language code (A-Z) */
    { value: "ru", flag: "🇷🇺", label: "Русский" }, // Russian
    { value: "uk", flag: "🇺🇦", label: "Українська" }, // Ukrainian
  ].sort((a, b) => a.label.localeCompare(b.label));

  return (
    <BotLanguageSelector>
      <Select value={language} style={{ width: 200 }} onChange={handleChange}>
        {languages.map(({ flag, label, value }) => (
          <Select.Option key={value} value={value}>
            {flag} {label}
          </Select.Option>
        ))}
      </Select>
    </BotLanguageSelector>
  );
};

export default LanguageSelector;
