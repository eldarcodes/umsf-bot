import React from "react";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { BotHeader, theme } from "@bot/ui/styles";
import LanguageSelector from "../../LanguageSelector";

interface IHeader {
  collapsed: boolean;
  onClick: React.MouseEventHandler<HTMLSpanElement>;
}

const Header: React.FC<IHeader> = ({ collapsed, onClick }) => {
  return (
    <BotHeader theme={theme}>
      {collapsed ? (
        <MenuUnfoldOutlined className="header-fold-icon" onClick={onClick} />
      ) : (
        <MenuFoldOutlined className="header-fold-icon" onClick={onClick} />
      )}
      <LanguageSelector />
    </BotHeader>
  );
};

export default Header;
