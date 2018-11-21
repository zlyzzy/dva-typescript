import { routerRedux } from "dva/router";
import { Model } from "dva";
import {
  getDepartmentContent,
  addDepartmentContent
} from "SERVICES/department";
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
    *getDepartmentContent({ payload }, { call, put, select }) {
      let currentDepartmentId = yield select(
        state => state.global.currentDepartmentId
      );
      const { result, success } = yield call(getDepartmentContent, {
        _id: currentDepartmentId
      });
      if (success) {
        yield put({
          type: "saveDepartmentContent",
          payload: result
        });
      }
    },
    *addContent({ payload }, { call, put, select }) {
      const { success } = yield call(addDepartmentContent, payload);
      if (success) {
        //添加成功之后 重新请求
        message.success("添加成功");
        yield put({
          type: "getDepartmentContent",
          payload: {}
        });
      } else {
        message.success("添加失败");
      }
      return success;
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
