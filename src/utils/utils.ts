import { message } from "antd";
import { func } from "prop-types";
import { duration } from "moment";
export function setStorage(obj) {
  window.localStorage.setItem(obj.name, obj.value);
}

export function getStorage(key) {
  return localStorage.getItem(key);
}

export function deleteStorage(key) {
  window.localStorage.removeItem(key);
}

/*清除所有本地信息*/
export function storageClear() {
  window.localStorage.clear();
}

/*
 * 判断object是否为空
 * @param a
 * @returns {boolean} true为非空，false为空
 */
export function isEmptyObject(obj): boolean {
  let j = false;
  obj = typeof obj == "object" ? obj : JSON.parse(obj);
  for (let item in obj) {
    return !j;
  }
  return j;
}

export function validateLink(path: string): boolean {
  return /^https?:\/\//.test(path);
}

/**
 *
 * @param pathname
 * 获取部门code
 */
export function getDepartmentCode(pathname: string): string {
  let _arry = pathname.split("/");
  return _arry[_arry.length - 1];
}

export enum AlertType {
  success,
  error,
  info,
  warning,
  warn,
  loading
}
/**
 *
 * @param options
 * 提示 type: success/error/info/warning/warn/loading
 */
export function alert(options: {
  content: string;
  duration?: 2000;
  type: AlertType;
}) {
  message[options.type](options.content, duration);
}
