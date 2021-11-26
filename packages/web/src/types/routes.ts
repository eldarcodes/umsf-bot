import { ReactNode } from "react";
import type { TranslationKeys } from "../hooks/useTypeSafeTranslation";

export interface IRoute {
  href: `/${string}`;
  label: TranslationKeys;
  icon: ReactNode;
}
