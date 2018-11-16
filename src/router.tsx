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

  const Register = dynamic({
    app,
    component: () => import("VIEW/Register/Register"),
    models: () => [import("MODELS/user")]
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

  return function({ history }) {
    return (
      <Router history={history}>
        <Switch>
          <BasicLayout path="/base">
            <Route path="/base/index" exact={true} component={IndexPage} />
            <Route
              path="/base/company/introduce"
              exact={true}
              component={Introduce}
            />
          </BasicLayout>
          <UserLayout path="/user">
            <Route path="/user/register" exact={true} component={Register} />
            <Route path="/user/login" exact={true} component={Login} />
          </UserLayout>

          <Redirect path="/" exact={true} to={{ pathname: "/user/login" }} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    );
  };
}
