import { Model } from "dva";
import { department } from "SERVICES/user";

export default {
  namespace: "global",
  state: {
    collapsed: false, //全局折叠
    departmentList: [] //菜单存储
  },
  effects: {
    *getDepartmentList({}, { call, put }) {
      const { result, success } = yield call(department);
      if (success) {
        yield put({
          type: "saveDepartmentList",
          payload: result
        });
      }
    }
  },
  reducers: {
    saveDepartmentList(state, { payload }) {
      return {
        ...state,
        departmentList: [
          {
            name: "首页",
            path: "/base/index",
            code: "0",
            icon: "home"
          },
          ...payload
        ]
      };
    },
    changeLayoutCollapsed(state, { payload }) {
      return {
        ...state,
        collapsed: payload
      };
    }
  }
} as Model;
