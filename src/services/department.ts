import fetch from "UTILS/request";
//获取部门列表
export const department = () => fetch({ url: "department/list" });

//根据部门id获取内容
export const getDepartmentContent = param =>
  fetch({ url: "department/content", params: param });

//新增部门内容
export const addDepartmentContent = param =>
  fetch({
    url: "department/addContent",
    params: param,
    method: "post",
    contentType: "json"
  });

//修改内容
export const updateContent = param =>
  fetch({
    url: "department/updateContent",
    params: param,
    method: "post",
    contentType: "json"
  });
