import fetch from "UTILS/request";
export const register = param =>
  fetch({ url: "register", params: param, method: "post" });
export const login = param => fetch({ url: "login", params: param });
export const department = () => fetch({ url: "department/list" });
