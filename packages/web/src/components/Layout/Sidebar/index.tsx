import React from "react";
import { Layout, Menu } from "@bot/ui";
import { HomeOutlined, DashboardOutlined } from "@bot/ui/icons";
import Logo from "../../Logo";
import { useRouter } from "next/router";

const { Sider } = Layout;

interface ISidebar {
  collapsed: boolean;
}

const Sidebar: React.FC<ISidebar> = ({ collapsed }) => {
  const router = useRouter();

  const routes = [
    {
      href: "/",
      label: "Home",
      icon: <HomeOutlined />,
    },
    {
      href: "/dashboard",
      label: "Dashboard",
      icon: <DashboardOutlined />,
    },
  ];

  return (
    <Sider collapsible collapsed={collapsed} trigger={null}>
      <Logo onClick={() => router.push("/")} />
      <Menu theme="dark" mode="inline" selectedKeys={[router.pathname]}>
        {routes.map(({ href, icon, label }) => (
          <Menu.Item key={href} icon={icon} onClick={() => router.push(href)}>
            {label}
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
};

export default Sidebar;
