const data = [
  {
    name: "首页",
    icon: "home",
    path: "/base/index",
    id: 1
  },
  {
    name: "公司相关",
    icon: "message",
    path: "/base/company",
    id: 3,
    children: [
      {
        name: "公司介绍",
        icon: "smile",
        path: "/base/company/introduce",
        parentPath: "/base/company",
        id: 4
      }
    ]
  }
];
export default data;
