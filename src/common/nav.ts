import BasicLayout from "LAYOUTS/BasicLayout/BasicLayout";
import UserLayout from "LAYOUTS/UserLayout/UserLayout";
import IndexPage from "ROUTES/IndexPage/IndexPage";
import TableList from "ROUTES/List/TableList";
import Login from "ROUTES/Login/Login";
//动态创建路由
const data = [
  {
    component: BasicLayout,
    layout: "BasicLayout",
    name: "首页",
    path: "",
    children: [
      {
        name: "首页",
        icon: "dashboard",
        path: "index",
        component: IndexPage
      },
      {
        name: "列表页",
        path: "list",
        icon: "table",
        children: [
          {
            name: "查询表格",
            path: "table-list",
            component: TableList
          }
        ]
      }
    ]
  },
  {
    component: UserLayout,
    layout: "UserLayout",
    children: [
      {
        name: "帐户",
        icon: "user",
        path: "user",
        children: [
          {
            name: "登录",
            path: "login",
            component: Login
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
