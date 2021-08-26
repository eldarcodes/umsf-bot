import React from "react";
import { LayoutProps } from "antd";
import MyContent from "./ContentWrapper.style";

export const ContentWrapper: React.FC<LayoutProps> = ({
  children,
  ...restProps
}) => {
  return (
    <MyContent {...restProps}>
      <div className="site-layout-content">{children}</div>
    </MyContent>
  );
};
