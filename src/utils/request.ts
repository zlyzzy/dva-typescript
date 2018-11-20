import { message } from "antd";
import axios, { AxiosRequestConfig } from "axios";
import qs from "qs"; //处理post请求传参数问题 序列化参数
import baseURL from "./url"; //url地址
import * as utils from "./utils";

let xhr = ({ url, body, method, contentType }) => {
  let requestConfig: AxiosRequestConfig = {
    withCredentials: true,
    url: url,
    method: method,
    baseURL: baseURL,
    headers: {
      Token: utils.getStorage("bpToken")
    }
  };
  if (contentType) {
    requestConfig.headers["Content-Type"] = "application/json;charset=UTF-8";
  }

  if (method == "get") {
    //axios method不同传入参数的方式也不一样
    requestConfig.params = body;
  } else {
    requestConfig.data = contentType ? body : qs.stringify(body);
  }
  return new Promise((resolve, reject) => {
    axios(requestConfig)
      .then(res => {
        return resolve({
          ...res.data
        });
      })
      .catch(e => {
        message.error("服务器请求失败");
        return resolve({
          result: null,
          success: false
        });
      });
  });
};

export default function fetch({
  url = "",
  params = {},
  method = "get",
  contentType = "form"
}) {
  let obj = {
    url: url,
    method: method.toLowerCase(),
    body: params,
    contentType: contentType == "json" ? true : false
  };
  return xhr(obj);
}
