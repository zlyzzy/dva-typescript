import { Route, routerRedux, Switch } from "dva/router";
import React from "react";
import BasicLayout from "LAYOUTS/BasicLayout/BasicLayout";
import UserLayout from "LAYOUTS/UserLayout/UserLayout";

const { ConnectedRouter } = routerRedux;

export default function({ history }) {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/user" component={UserLayout} />
        <Route path="/" component={BasicLayout} />
      </Switch>
    </ConnectedRouter>
  );
}
