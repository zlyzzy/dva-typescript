import { routerRedux } from "dva/router";
import { Model } from "dva";
import { login } from "SERVICES/user";
import { message } from "antd";

export default {
  namespace: "user",
  state: {
    loginData: {
      username: "",
      password: ""
    }
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
    *login({ payload }, { call, put }) {
      const { success } = yield call(login, payload);
      if (success) {
        yield put({
          type: "save",
          payload: payload
        });
        yield put(routerRedux.push("/base/index"));
      }
    }
  },
  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        loginData: {
          ...state.loginData,
          ...payload
        }
      };
    }
  }
} as Model;
