// Dependencies
import React from "react";
import { Route, Switch } from "react-router-dom";
import { Layout } from "antd";

// Others
import "./BasicLayout.scss";

export default function BasicLayout({ routes }) {
  const { Footer, Content } = Layout;

  return (
    <Layout>
      <Layout>
        <h2>Menu</h2>
        <Content>
          <LoadRoutes routes={routes} />
        </Content>
        <Footer>Footer</Footer>
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
