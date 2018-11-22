//菜单部门
export interface Idepartment {
  path: string; //路由
  icon: string; //icon
  name: string; //名称
  _id: string; //唯一id
  code: string; //部门标识
}

//部门链接列表
export interface IdepartmentContent {
  _id: string; //唯一id
  name: string; //名称
  path: string; //地址
  guidePath?: string; //注册使用指导链接
  describtion?: string; //描述
  department: Array<string>;
}
