
const data = [
  {
    layout: "BasicLayout",
    children: [
      {
        name: "首页",
        icon: "dashboard",
        path: "index"
      },
      {
        name: "列表页",
        path: "base",
        icon: "table",
        children: [
          {
            name: "mock列表",
            path: "list",
          }
        ]
      }
    ]
  },
  {
    layout: "UserLayout",
    children: [
      {
        name: "帐户",
        icon: "user",
        path: "user",
        children: [
          {
            name: "登录",
            path: "login"
          },
          {
            name: "注册",
            path: "register"
          }
        ]
      }
    ]
  }
];

export function getNavData() {
  return data;
}

export default data;
