import "@babel/polyfill";
import dva from "dva";
import createLoading from "dva-loading";
import "ASSETS/style/index.less";
import routerFn from "./router";

// 1. Initialize
const app = dva();

// 2. Plugins
app.use(createLoading());

// 4. Router
app.router(routerFn(app));

// 5. Start
app.start("#root");
