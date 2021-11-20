import { theme } from "@bot/ui/styles";

type ThemeInterface = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeInterface {}
}
