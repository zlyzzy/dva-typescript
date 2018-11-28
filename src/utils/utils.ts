import { message } from "antd";
import { func } from "prop-types";
import { duration } from "moment";
export function setStorage(obj): void {
  window.localStorage.setItem(obj.name, obj.value);
}

export function getStorage(key): string {
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

/**
 * 提示
 * @param content  提示内容
 * @param duration 显示时间，单位s
 * @param type     提示类型 type: success/error/info/warning/warn/loading
 */
export function alert({
  content = "操作成功",
  duration = 1,
  type = "success"
}) {
  message[type](content, duration);
}
/**
 *
 * @param obj 对象
 */
export function deepCopy(obj: object) {
  if (!obj) {
    return obj;
  }
  return JSON.parse(JSON.stringify(obj));
}
