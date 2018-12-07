####安装
```
npm install 
```

####指令

```
dev: 启动

build: 打包

tslint:fix 可以自动修复一部分代码

styleint 可以检测过不合格的style

prettier 可以格化式代码

```
####项目依赖文件介绍

```
 "dependencies": {
    "@babel/polyfill": "^7.0.0",
    "antd": "^3.10.4", //ui库 
    "axios": "^0.18.0", 
    "classnames": "^2.2.6", // 辅助React 添加多个class  
    "dva": "^2.4.1",
    "dva-loading": "^2.0.6",
    "lodash": "^4.17.11",
    "query-string": "^6.2.0",
    "react": "^16.6.0",
    "react-container-query": "^0.11.0",
    "react-dom": "^16.6.0"
  },
```
1. [antd,ui库](https://ant.design/docs/react/introduce-cn)
2. [辅助React 添加多个class](https://www.npmjs.com/package/classnames)
3. [dva = React-Router + Redux + Redux-saga](https://dvajs.com)
   由于 dva 将 react-router-dom 和 react-router-redux 都封装到了 dva/router 中，
   在使用 react-router@4.0 和 redux 里面的东西时只需引入 dva/router 这个包即可。

   在dva中使用router4.0: 

  ```
  import React from 'react';
  import { routerRedux, Route } from 'dva/router';
  import Example from 'routes/Example';

  const { ConnectedRouter } = routerRedux;

  function RouterConfig({ history, app }) {

      return (
          <ConnectedRouter history={history}>
            <Route path="/" component={Example} />
            <Route path="/Search/:category/:keyword?" component={...}/>
          </ConnectedRouter>
      );

  }

  export default RouterConfig;
  ```
  说明：
  + Route 为 react-router-dom 内的标签
  + ConnectedRouter 为 react-router-redux 内的对象 routerRedux 的标签，作用相当于 react-router-dom 中的 BrowserRouter 标签，作用为连接 redux 使用。



4. [lodash-一些常用处理数据的库](https://www.lodashjs.com/docs/4.17.5.html)
5. query-string
再也无法从 React Router v4 中获取 URL 的查询字符串了，所以我们使用的是 query-string来处理。
6. [classnames](https://www.npmjs.com/package/classnames)

