export interface IListItem {
  title: string; //系统名称
  gitUrl: string;
  gitName: string;
  environmentList: Array<{
    title: string; //环境名称
    info: Array<{
      name: string; //前端
      url: string; //前端地址
      backName: string; //后端
      backUrl: string; //后端地址
    }>;
  }>;
}
//飞侠
const feixia_vue: IListItem = {
  title: "小飞侠",
  gitUrl: "http://192.168.1.7/amazing-f2e/feixia-vue",
  gitName: "git仓库:feixia-vue",
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
    },
    {
      title: "正式环境",
      info: [
        {
          name: "前端",
          url: "https://f7xfx.wxb.com.cn/v4/#/index",
          backName: "后端",
          backUrl: "https://f7xfx.wxb.com.cn/f7api/"
        }
      ]
    }
  ]
};

//运营
const platform: IListItem = {
  title: "运营管理系统",
  gitUrl: "http://192.168.1.7/amazing-f2e/platform",
  gitName: "git仓库:platform",
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
    },
    {
      title: "正式环境",
      info: [
        {
          name: "前端",
          url: "http://bp.wxb.com.cn/#/login",
          backName: "后端",
          backUrl: "https://bp-backend.wxb.com.cn/"
        }
      ]
    }
  ]
};

//闪付
const finance: IListItem = {
  title: "闪付系统",
  gitUrl: "http://192.168.1.7/amazing-f2e/finance",
  gitName: "git仓库:finance",
  environmentList: [
    {
      title: "测试环境",
      info: [
        {
          name: "前端",
          url: "https://f7test.wxb.com.cn/finance/#/login",
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
          url: "http://f7regress.wxb.com.cn/finance/#/login",
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
          url: "http://qa.wxb.com.cn/v1/finance/#/index",
          backName: "后端-v1",
          backUrl: "http://192.168.1.192:8016/"
        },
        {
          name: "前端-v2",
          url: "http://qa.wxb.com.cn/v2/finance/#/index",
          backName: "后端-v2",
          backUrl: "http://192.168.1.189:8016/"
        },
        {
          name: "前端-v3",
          url: "http://qa.wxb.com.cn/v3/finance/#/index",
          backName: "后端-v3",
          backUrl: "http://192.168.1.186:8016/"
        },
        {
          name: "前端-v5",
          url: "http://qa.wxb.com.cn/v5/finance/#/index",
          backName: "后端-v5",
          backUrl: "http://192.168.1.187:8016/"
        },
        {
          name: "前端-v6",
          url: "http://qa.wxb.com.cn/v6/finance/#/index",
          backName: "后端-v6",
          backUrl: "http://192.168.1.190:8016/"
        },
        {
          name: "前端-v7",
          url: "http://qa.wxb.com.cn/v7/finance/#/index",
          backName: "后端-v7",
          backUrl: "http://192.168.1.191:8016/"
        },
        {
          name: "前端-v8",
          url: "http://qa.wxb.com.cn/v8/finance/#/index",
          backName: "后端-v8",
          backUrl: "http://192.168.1.194:8016/"
        }
      ]
    },
    {
      title: "正式环境",
      info: [
        {
          name: "前端",
          url: "http://finance.wxb.com.cn/#/login",
          backName: "后端",
          backUrl: "https://bp-backend.wxb.com.cn/"
        }
      ]
    }
  ]
};
//喂小保
const wxb_manager: IListItem = {
  title: "喂小保管理系统",
  gitUrl: "http://192.168.1.7/amazing-f2e/wxb-manager",
  gitName: "git仓库:wxb-manager",
  environmentList: [
    {
      title: "测试环境",
      info: [
        {
          name: "前端",
          url: "https://wxb-manager-test.wxb.com.cn/",
          backName: "后端",
          backUrl: "https://bp-backend-test.wxb.com.cn"
        }
      ]
    },
    {
      title: "qa环境",
      info: [
        {
          name: "前端-v1",
          url: "http://qa.wxb.com.cn/v1/wxbManager/#/index",
          backName: "后端-v1",
          backUrl: "http://192.168.1.192:8016/"
        },
        {
          name: "前端-v2",
          url: "http://qa.wxb.com.cn/v2/wxbManager/#/index",
          backName: "后端-v2",
          backUrl: "http://192.168.1.189:8016/"
        },
        {
          name: "前端-v3",
          url: "http://qa.wxb.com.cn/v3/wxbManager/#/index",
          backName: "后端-v3",
          backUrl: "http://192.168.1.186:8016/"
        },
        {
          name: "前端-v5",
          url: "http://qa.wxb.com.cn/v5/wxbManager/#/index",
          backName: "后端-v5",
          backUrl: "http://192.168.1.187:8016/"
        },
        {
          name: "前端-v6",
          url: "http://qa.wxb.com.cn/v6/wxbManager/#/index",
          backName: "后端-v6",
          backUrl: "http://192.168.1.190:8016/"
        },
        {
          name: "前端-v7",
          url: "http://qa.wxb.com.cn/v7/wxbManager/#/index",
          backName: "后端-v7",
          backUrl: "http://192.168.1.191:8016/"
        },
        {
          name: "前端-v8",
          url: "http://qa.wxb.com.cn/v8/wxbManager/#/index",
          backName: "后端-v8",
          backUrl: "http://192.168.1.194:8016/"
        }
      ]
    },
    {
      title: "正式环境",
      info: [
        {
          name: "前端",
          url: "https://wxb-manager.wxb.com.cn",
          backName: "后端",
          backUrl: "https://bp-backend.wxb.com.cn/"
        }
      ]
    }
  ]
};

export default [feixia_vue, platform, finance, wxb_manager];
