import { routerRedux } from "dva/router";
import { Model } from "dva";
import { register, login, department } from "SERVICES/user";
import { message } from "antd";
import navList from "COMMON/nav";
import * as utils from "UTILS/utils";

export default {
  namespace: "user",
  state: {
    loginData: {
      username: "",
      password: ""
    },
    departmentList: []
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === "/user/login") {
          // 做你想做的事情
        }
        if (pathname === "/user/register") {
          dispatch({
            type: "getDepartmentList"
          });
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
        utils.setStorage({
          name: "navList",
          value: JSON.stringify(navList)
        });
        yield put(routerRedux.push("/base/index"));
      }
    },
    *register({ playload }, { call, put }) {
      const { success } = yield call(register, playload);
      if (success) {
        message.success("注册成功");
      }
    },
    *getDepartmentList({}, { call, put }) {
      const { data, success } = yield call(department);
      if (success) {
        yield put({
          type: "saveDepartmentList",
          payload: data
        });
      }
    }
  },
  reducers: {
    saveDepartmentList(state, { payload }) {
      return {
        ...state,
        departmentList: payload
      };
    },
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
