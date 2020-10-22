import React from "react";

import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";

import { HomeOutlined, MenuOutlined, RedditOutlined } from "@ant-design/icons";

import "./AdminSideMenu.scss";

export default function AdminSideMenu(props) {
  const { menuCollapsed } = props;
  const { Sider } = Layout;

  return (
    <Sider className="admin-menu" collapsed={menuCollapsed}>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <Link to={"/admin"}>
            <HomeOutlined />
            <span className="nav-text">Home</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/admin/web-menu">
            <MenuOutlined />
            <span className="nav-text">Menu</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/admin/reddit">
            <RedditOutlined />
            <span className="nav-text">Reddit</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}
