
const data = [
  {
    layout: "BasicLayout",
    children: [
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
  }
];

export function getNavData() {
  return data;
}

export default data;
