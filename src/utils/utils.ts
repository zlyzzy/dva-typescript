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
export function isEmptyObject(obj) {
  let j = false;
  obj = typeof obj == "object" ? obj : JSON.parse(obj);
  for (let item in obj) {
    return !j;
  }
  return j;
}

export function validateLink(path) {
  return /^https?:\/\//.test(path);
}

export function getDepartmentId(pathname) {
  let _arry = pathname.split("/");
  return _arry[_arry.length - 1];
}
