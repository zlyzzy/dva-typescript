

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