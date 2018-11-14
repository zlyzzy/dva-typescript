import "@babel/polyfill";
import dva from "dva";
import createLoading from "dva-loading";
import "ASSETS/style/index.less";
import models from "./models";
import routerFn from "./router";


import dynamic from 'dva/dynamic';


// 1. Initialize
const app = dva();

// 2. Plugins
app.use(createLoading());

// 3. Model
// models.forEach(m => {
//   app.model(m.default); // ts 导出格式包含default
// });

// const Users = dynamic({
//   app,
//   models: () => [
//     import('./models/users'),
//   ],
//   component: () => import('./routes/Users'),
// });

// const BasicLayout = dynamic({
//   app,
//   component: () => import('LAYOUTS/BasicLayout/BasicLayout')
// } as any)


// 4. Router
app.router(routerFn(app));

// 5. Start
app.start("#root");
