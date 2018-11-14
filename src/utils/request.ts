import { message } from "antd";
import axios, { AxiosRequestConfig } from 'axios';
import qs from 'qs'; //处理post请求传参数问题 序列化参数
import baseURL from './url'; //url地址
import * as utils from './utils';

let xhr = ({ url,body,method,contentType }) => {
  let requestConfig: AxiosRequestConfig = {
    withCredentials: true,
    url: url,
    method: method,
    baseURL: baseURL,
    headers: {
      'Token': utils.getStorage("bpToken")
    }
  }
  if (contentType) {
    requestConfig.headers['Content-Type'] = 'application/json;charset=UTF-8';
  }

  if (method == 'get') { //axios method不同传入参数的方式也不一样
    requestConfig.params = body;
  } else {
    requestConfig.data = contentType ? body : qs.stringify(body);
  }
  return new Promise((resolve, reject) => {
    axios(requestConfig)
      .then((res) => {
        //code = 10000 表示成功
        //code = 60001 没有访问权限
        //code = 50003 密码错误
        //code = 50002 登录名错误
        //code = 50001 用户未登录
        if (res.data.code && res.data.code == 50001) {
          utils.storageClear();
          window.location.href = window.location.origin + window.location.pathname + "#/user/login";
          return false;
        }
        if (res.data.code && res.data.code != 10000) {
          message.error(res.statusText);
          return resolve({success: false, ...res})
        }
        return resolve({
          ...res,
          success: true
        });
      })
      .catch((e) => {
        message.error('服务器请求失败');
        return resolve({
          data: null,
          success: false
        });
      })

  });
}


export default function fetch({ url = '', params = {}, method = 'get', contentType = 'form' }) {
  let obj = {
    url: url,
    method: method.toLowerCase(),
    body: params,
    contentType: contentType == 'json' ? true : false
  }
  return xhr(obj);
}
