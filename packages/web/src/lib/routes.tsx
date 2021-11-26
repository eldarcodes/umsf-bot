import React from "react";
import { IRoute } from "../types/routes";
import { HomeOutlined, DashboardOutlined } from "@bot/ui/icons";

const routes: IRoute[] = [
  {
    href: "/",
    label: "pages.home",
    icon: <HomeOutlined />,
  },
  {
    href: "/dashboard",
    label: "pages.dashboard",
    icon: <DashboardOutlined />,
  },
];

export default routes;
