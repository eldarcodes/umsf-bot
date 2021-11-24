import { useTranslation } from "react-i18next";

import { Paths } from "../types/translations";
import translations from "../../public/locales/ru/translation.json";

export type TranslationKeys = Paths<typeof translations>;

interface DateTranslationType {
  time?: Date;
  date?: Date;
}

export const useTypeSafeTranslation = () => {
  const { t, i18n } = useTranslation();

  return {
    t: (s: TranslationKeys, f?: DateTranslationType) => t(s, f),
    i18n,
  };
};
