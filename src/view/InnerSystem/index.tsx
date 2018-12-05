import { connect } from "dva";
import { Button } from "antd";
import React, { Component } from "react";
import styles from "./Index.less";
import { routerRedux } from "dva/router";
import { Card } from "antd";
import { string } from "prop-types";

interface IProps {
  dispatch?: any;
}

interface listItem {
  title: string;
  environmentList: Array<{
    title: string;
    info: Array<{
      name: string;
      url: string;
      backName: string;
      backUrl: string;
    }>;
  }>;
}

class InnerSystem extends Component<IProps, { list: Array<listItem> }> {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          title: "小飞侠（feixia-vue）",
          environmentList: [
            {
              title: "测试环境",
              info: [
                {
                  name: "前端",
                  url: "https://fxtest.wxb.com.cn/v4/#/index",
                  backName: "后端",
                  backUrl: "https://fxtest.wxb.com.cn"
                }
              ]
            },
            {
              title: "回归环境",
              info: [
                {
                  name: "前端",
                  url: "https://fxregress.wxb.com.cn/v4/#/index",
                  backName: "后端",
                  backUrl: "https://fxregress.wxb.com.cn"
                }
              ]
            },
            {
              title: "qa环境",
              info: [
                {
                  name: "前端-v1",
                  url: "http://qa.wxb.com.cn/v1/feixia/#/index",
                  backName: "后端-v1",
                  backUrl: "http://192.168.1.192:8006/"
                },
                {
                  name: "前端-v2",
                  url: "http://qa.wxb.com.cn/v2/feixia/#/index",
                  backName: "后端-v2",
                  backUrl: "http://192.168.1.189:8006/"
                },
                {
                  name: "前端-v3",
                  url: "http://qa.wxb.com.cn/v3/feixia/#/index",
                  backName: "后端-v3",
                  backUrl: "http://192.168.1.186:8006/"
                },
                {
                  name: "前端-v5",
                  url: "http://qa.wxb.com.cn/v5/feixia/#/index",
                  backName: "后端-v5",
                  backUrl: "http://192.168.1.187:8006/"
                },
                {
                  name: "前端-v6",
                  url: "http://qa.wxb.com.cn/v6/feixia/#/index",
                  backName: "后端-v6",
                  backUrl: "http://192.168.1.190:8006/"
                },
                {
                  name: "前端-v7",
                  url: "http://qa.wxb.com.cn/v7/feixia/#/index",
                  backName: "后端-v7",
                  backUrl: "http://192.168.1.191:8006/"
                },
                {
                  name: "前端-v8",
                  url: "http://qa.wxb.com.cn/v8/feixia/#/index",
                  backName: "后端-v8",
                  backUrl: "http://192.168.1.194:8006/"
                }
              ]
            }
          ]
        },
        {
          title: "运营管理系统（platform）",
          environmentList: [
            {
              title: "测试环境",
              info: [
                {
                  name: "前端",
                  url: "https://f7test.wxb.com.cn/platform/#/login",
                  backName: "后端",
                  backUrl: "https://bp-backend-test.wxb.com.cn"
                }
              ]
            },
            {
              title: "回归环境",
              info: [
                {
                  name: "前端",
                  url: "http://f7regress.wxb.com.cn/platform/#/login",
                  backName: "后端",
                  backUrl: "http://121.41.32.216:7005"
                }
              ]
            },
            {
              title: "qa环境",
              info: [
                {
                  name: "前端-v1",
                  url: "http://qa.wxb.com.cn/v1/platform/#/index",
                  backName: "后端-v1",
                  backUrl: "http://192.168.1.192:8016/"
                },
                {
                  name: "前端-v2",
                  url: "http://qa.wxb.com.cn/v2/platform/#/index",
                  backName: "后端-v2",
                  backUrl: "http://192.168.1.189:8016/"
                },
                {
                  name: "前端-v3",
                  url: "http://qa.wxb.com.cn/v3/platform/#/index",
                  backName: "后端-v3",
                  backUrl: "http://192.168.1.186:8016/"
                },
                {
                  name: "前端-v5",
                  url: "http://qa.wxb.com.cn/v5/platform/#/index",
                  backName: "后端-v5",
                  backUrl: "http://192.168.1.187:8016/"
                },
                {
                  name: "前端-v6",
                  url: "http://qa.wxb.com.cn/v6/platform/#/index",
                  backName: "后端-v6",
                  backUrl: "http://192.168.1.190:8016/"
                },
                {
                  name: "前端-v7",
                  url: "http://qa.wxb.com.cn/v7/platform/#/index",
                  backName: "后端-v7",
                  backUrl: "http://192.168.1.191:8016/"
                },
                {
                  name: "前端-v8",
                  url: "http://qa.wxb.com.cn/v8/platform/#/index",
                  backName: "后端-v8",
                  backUrl: "http://192.168.1.194:8016/"
                }
              ]
            }
          ]
        }
      ]
    };
  }

  render() {
    const { list } = this.state;
    console.log(list);
    return (
      <div className={styles.innerSystem}>
        {list.map((item, item_index) => {
          return (
            <Card title={item.title} key={item_index} className="mb10">
              {item.environmentList.map((environment, environment_index) => {
                return (
                  <div key={environment_index} className="mb20">
                    <div className="mb10 fs18 bold">{environment.title}: </div>
                    {environment.info.map((info, info_index) => {
                      return (
                        <div className="ml15 mb5" key={info_index}>
                          <span className="mr20">
                            {info.name}：
                            <a
                              title={info.name}
                              href={info.url}
                              target="_blank"
                            >
                              {info.url}
                            </a>
                          </span>
                          <span>
                            {info.backName}：
                            <a
                              title={info.backName}
                              href={info.backUrl}
                              target="_blank"
                            >
                              {info.backUrl}
                            </a>
                          </span>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </Card>
          );
        })}
      </div>
    );
  }
}
export default connect()(InnerSystem);
