// Dependencies
import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Layout } from "antd";

// Components
import TopMenu from "../components/admin/TopMenu";
import SideMenu from "../components/admin/AdminSideMenu";
import AdminLogin from "../Pages/Admin/LogIn";

// Others
import "./AdminLayout.scss";

export default function AdminLayout({ routes }) {
  const [menuCollapsed, setMenuCollapsed] = useState(true);

  const { Header, Content, Footer } = Layout;

  const user = null;

  if (!user) {
    return (
      <>
        <Route path="/admin/login" component={AdminLogin} />
        <Redirect to="/admin/login" />
      </>
    );
  }

  return (
    <Layout>
      <SideMenu menuCollapsed={menuCollapsed} />
      <Layout
        className="admin-layout"
        style={{ marginLeft: menuCollapsed ? "80px" : "200px" }}
      >
        <Header className="admin-layout__header">
          <TopMenu
            menuCollapsed={menuCollapsed}
            setMenuCollapsed={setMenuCollapsed}
          />
        </Header>
        <Content className="admin-layout__content">
          <LoadRoutes routes={routes} />
        </Content>
        <Footer className="admin-layout__footer">Cristian Ros Arnao</Footer>
      </Layout>
    </Layout>
  );
}

function LoadRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  );
}
