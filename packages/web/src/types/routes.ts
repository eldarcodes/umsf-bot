import * as Icons from "@bot/ui/icons";
import type { TranslationKeys } from "../hooks/useTypeSafeTranslation";

export interface IRoute {
  href: `/${string}`;
  label: TranslationKeys;
  icon: keyof typeof Icons;
}
