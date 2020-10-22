import React from "react";

import { Link } from "react-router-dom";

import { Button } from "antd";
import {
  DoubleLeftOutlined,
  DoubleRightOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";

import "./TopMenu.scss";

import MenuLogo from "../../../assets/img/png/logo-white.png";

export default function TopMenu(props) {
  const { menuCollapsed, setMenuCollapsed } = props;

  return (
    <div className="top-menu">
      <div className="top-menu__left">
        <Link to="/admin">
          <img
            className="top-menu__left-logo"
            src={MenuLogo}
            alt="Cristian Ros Arnao"
          />
        </Link>
        <Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
          {menuCollapsed ? <DoubleRightOutlined /> : <DoubleLeftOutlined />}
        </Button>
      </div>
      <div className="top-menu__right">
        <Button type="link" onClick={() => console.log("Log off")}>
          <PoweroffOutlined />
        </Button>
      </div>
    </div>
  );
}
