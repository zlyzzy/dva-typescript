import { cloneDeep } from "lodash";
import navData from "COMMON/nav";

function getPlainNode(nodeList, parentPath = "") {
  const arr = [];
  nodeList.forEach(node => {
    const item = node;
    item.path = `${parentPath}/${item.path || ""}`.replace(/\/+/g, "/");
    item.exact = true;
    if (item.children && !item.component) {
      arr.push(...getPlainNode(item.children, item.path));
    } else {
      if (item.children && item.component) {
        item.exact = false;
      }
      arr.push(item);
    }
  });
  return arr;
}

export function getRouteData(path) {
  if (
    !navData.some(item => item.layout === path) ||
    !navData.filter(item => item.layout === path)[0].children
  ) {
    return null;
  }
  const dataList = cloneDeep(navData.filter(item => item.layout === path)[0]);
  const nodeList = getPlainNode(dataList.children);
  return nodeList;
}

export function setStorage(obj) {
  window.localStorage.setItem(obj.name, obj.value)
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