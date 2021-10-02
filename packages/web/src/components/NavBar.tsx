import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Menu, Layout } from "@bot/ui";
import { useTypeSafeTranslation } from "../hooks/useTypeSafeTranslation";
import { Logo } from "@bot/ui";
import { LanguageSelector } from "./LanguageSelector";

const { Header } = Layout;

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  const { t } = useTypeSafeTranslation();
  const router = useRouter();

  return (
    <Header>
      <div onClick={() => router.push("/")}>
        <Logo />
      </div>

      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[router.route]}>
        <Menu.Item key="/dashboard">
          <Link href="/dashboard">{t("dashboard")}</Link>
        </Menu.Item>

        <LanguageSelector />
      </Menu>
    </Header>
  );
};
