/*
 * @Date: 2020-06-20 17:03:03
 * @LastEditTime: 2020-07-28 16:00:10
 */
import React from "react";
import { routerRedux, Route, Redirect, Switch } from "dva/router";
import _ from "lodash";
import zhCN from "antd/es/locale/zh_CN";

import { flatTree } from "@/utils";
const { ConnectedRouter } = routerRedux;

import { asyncRoutes } from "./config";

import AuthRoute from "./AuthRoute";

import SignIn from "@/pages/account/signIn";
import SignUp from "@/pages/account/SignUp";
import ResetPassword from "@/pages/account/resetPassword";

import Layout from "@/layout";
import Page404 from "@/pages/page404";

// layout下的子模块
import Dashboard from "@/pages/dashboard";
import ShopHome from "@/pages/shop/home";
import FundHome from "@/pages/fund/home";
import OperationsHome from "@/pages/operations/transaction/Order";
import { ConfigProvider } from "antd";

export default ({ history }) => {
  return (
    <ConfigProvider locale={zhCN}>
      <ConnectedRouter history={history}>
        <Switch>
          <AuthRoute exact path="/signIn" authTo="/" Component={SignIn} />
          <AuthRoute
            exact
            path="/resetPassword"
            authTo="/"
            Component={ResetPassword}
          />
          <AuthRoute exact path="/signUp" authTo="/" Component={SignUp} />
          <AuthRoute path="/admin" authTo="/signIn" Component={Layout} />
          <Redirect from="/" to="/admin" />
          <Route component={Page404} />
        </Switch>
      </ConnectedRouter>
    </ConfigProvider>
  );
};

export const RouteList = React.memo(
  () => {
    return (
      <Switch>
        {_.map(asyncRoutes, (item, index) => (
          <Route
            path={`${item.path}`}
            key={index}
            component={(p) => {
              const menu = _.find(asyncRoutes, (r) => r.id === item.id);
              return <item.component {...p} menu={menu} />;
            }}
          />
        ))}
        <Route component={Dashboard} />
      </Switch>
    );
  },
  (p, c) => p.path === c.path
);

export const ChildRouteList = React.memo(() => {
  return (
    <Switch>
      {flatTree(asyncRoutes)
        .filter((item) => item.component && item.isLeaf)
        .map((item, index) => {
          return (
            <Route
              path={`${item.path}`}
              key={index}
              component={item.component}
            />
          );
        })}
      <Route path="/admin/shop" component={ShopHome} />
      <Route path="/admin/fund" component={FundHome} />
      <Route path="/admin/operations" component={OperationsHome} />
    </Switch>
  );
});
