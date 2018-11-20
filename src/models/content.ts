import { routerRedux } from "dva/router";
import { Model } from "dva";
import { getDepartmentContent } from "SERVICES/user";
import { message } from "antd";

export default {
  namespace: "content",
  state: {
    departmentContentList: []
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === "/user/login") {
          // 做你想做的事情
        }
      });
    }
  },
  effects: {
    *getDepartmentContent({ payload }, { call, put }) {
      const { result, success } = yield call(getDepartmentContent, payload);
      if (success) {
        yield put({
          type: "saveDepartmentContent",
          payload: result
        });
      }
    }
  },
  reducers: {
    saveDepartmentContent(state, { payload }) {
      return {
        ...state,
        departmentContentList: payload
      };
    }
  }
} as Model;
