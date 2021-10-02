import React from "react";
import Link from "next/link";
import { Menu, Layout } from "@bot/ui";
import { useTypeSafeTranslation } from "../hooks/useTypeSafeTranslation";
import { Logo } from "@bot/ui";
import { LanguageSelector } from "./LanguageSelector";

const { Header } = Layout;

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  const { t } = useTypeSafeTranslation();

  return (
    <Header>
      <Logo />

      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="dashboard">
          <Link href="/dashboard">{t("dashboard")}</Link>
        </Menu.Item>

        <LanguageSelector />
      </Menu>
    </Header>
  );
};
