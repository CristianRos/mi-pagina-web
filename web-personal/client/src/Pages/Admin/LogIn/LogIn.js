import React from "react";
import "./LogIn.scss";

import { Layout, Tabs } from "antd";
import { Redirect } from "react-router-dom";
import Logo from "../../../assets/img/png/logo-white.png";

export default function LogIn() {
  const { Content } = Layout;
  const { TabPane } = Tabs;
  return (
    <Layout className="log-in">
      <Content className="log-in__content">
        <h1 className="log-in__content-logo">
          <img src={Logo} alt="Cristian Ros Arnao" />
        </h1>

        <div className="log-in__content-tabs">
          <Tabs type="card">
            <TabPane tab={<span>Entrar</span>} key="1">
              Log in Form.
            </TabPane>
            <TabPane tab={<span>Nuevo Usuario</span>} key="2">
              Log on Form.
            </TabPane>
          </Tabs>
        </div>
      </Content>
    </Layout>
  );
}
