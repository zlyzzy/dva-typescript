import fetch from "UTILS/request";
export const login = param => fetch({ url: "login", params: param });
export const department = () => fetch({ url: "department/list" });
export const getDepartmentContent = param =>
  fetch({ url: "department/content", params: param });
