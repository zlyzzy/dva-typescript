import fetch from "UTILS/request";
export const login = param => fetch({ url: "login", params: param });
