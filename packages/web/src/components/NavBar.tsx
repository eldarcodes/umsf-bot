import React from "react";
import Link from "next/link";
import { Menu, Layout } from "@bot/ui";
import { Select } from "@bot/ui";
import { useTranslation } from "react-i18next";
import { useTypeSafeTranslation } from "../hooks/useTypeSafeTranslation";
import { Logo } from "@bot/ui";

const { Header } = Layout;

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  const { i18n } = useTranslation();

  const { t } = useTypeSafeTranslation();

  return (
    <Header>
      <Logo />

      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="dashboard">
          <Link href="/dashboard">{t("dashboard")}</Link>
        </Menu.Item>
      </Menu>

      <Select
        defaultValue="ru"
        style={{ width: 200 }}
        onChange={value => i18n.changeLanguage(value)}
      >
        <Select.Option value="ru">🇷🇺 {t("locales.ru")}</Select.Option>
        <Select.Option value="uk">🇺🇦 {t("locales.uk")}</Select.Option>
      </Select>
    </Header>
  );
};
