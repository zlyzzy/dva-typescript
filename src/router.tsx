import { Route, Switch, Router, Redirect } from "dva/router";
import React from "react";
import dynamic from "dva/dynamic";

export default function(app) {
  const BasicLayout = dynamic({
    app,
    component: () => import("LAYOUTS/BasicLayout/BasicLayout"),
    models: () => [import("MODELS/global")]
  } as any) as any;

  const UserLayout = dynamic({
    app,
    models: () => [import("MODELS/global")],
    component: () => import("LAYOUTS/UserLayout/UserLayout")
  } as any) as any;

  const Login = dynamic({
    app,
    component: () => import("VIEW/Login/Login"),
    models: () => [import("MODELS/user")]
  } as any) as any;

  const IndexPage = dynamic({
    app,
    component: () => import("VIEW/IndexPage/IndexPage")
  } as any) as any;

  const Introduce = dynamic({
    app,
    component: () => import("VIEW/Introduce/Index")
  } as any) as any;

  const NoMatch = dynamic({
    app,
    component: () => import("VIEW/NotFound/Index")
  } as any) as any;

  const Front = dynamic({
    app,
    models: () => [import("MODELS/content")],
    component: () => import("VIEW/FrontDepartment/Index")
  } as any) as any;

  const Test = dynamic({
    app,
    models: () => [import("MODELS/content")],
    component: () => import("VIEW/TestDepartment/Index")
  } as any) as any;

  return function({ history }) {
    return (
      <Router history={history}>
        <Switch>
          <BasicLayout path="/base">
            <Switch>
              <Route path="/base/index" exact={true} component={IndexPage} />
              <Route path="/base/1" exact={true} component={Front} />
              <Route path="/base/2" exact={true} component={Test} />
              <Route
                path="/base/company/introduce"
                exact={true}
                component={Introduce}
              />
              <Route component={NoMatch} />
            </Switch>
          </BasicLayout>
          <UserLayout path="/user">
            <Route path="/user/login" exact={true} component={Login} />
          </UserLayout>

          <Redirect path="/" exact={true} to={{ pathname: "/base/index" }} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    );
  };
}
