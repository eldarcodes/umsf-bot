import React from "react";
import { Layout, Menu } from "@bot/ui";
import Logo from "../../Logo";
import { useRouter } from "next/router";
import routes from "../../../lib/routes";
import { useTypeSafeTranslation } from "../../../hooks/useTypeSafeTranslation";

const { Sider } = Layout;

interface ISidebar {
  collapsed: boolean;
}

const Sidebar: React.FC<ISidebar> = ({ collapsed }) => {
  const router = useRouter();
  const { t } = useTypeSafeTranslation();

  return (
    <Sider collapsible collapsed={collapsed} trigger={null}>
      <Logo onClick={() => router.push("/")} />
      <Menu theme="dark" mode="inline" selectedKeys={[router.pathname]}>
        {routes.map(({ href, icon, label }) => {
          return (
            <Menu.Item icon={icon} key={href} onClick={() => router.push(href)}>
              {t(label)}
            </Menu.Item>
          );
        })}
      </Menu>
    </Sider>
  );
};

export default Sidebar;
