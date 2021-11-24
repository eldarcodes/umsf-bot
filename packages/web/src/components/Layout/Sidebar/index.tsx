import React from "react";
import { Layout, Menu } from "@bot/ui";
import * as Icons from "@bot/ui/icons";
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
          const Icon: any = Icons[icon];
          return (
            <Menu.Item
              key={href}
              icon={<Icon />}
              onClick={() => router.push(href)}
            >
              {t(label)}
            </Menu.Item>
          );
        })}
      </Menu>
    </Sider>
  );
};

export default Sidebar;
