import { routerRedux } from "dva/router";
import { Model } from "dva";
import {
  getDepartmentContent,
  addDepartmentContent,
  updateContent
} from "SERVICES/department";
import { message } from "antd";

export default {
  namespace: "content",
  state: {
    departmentContentList: [],
    contentObj: {
      _id: "", //唯一id
      name: "", //名称
      path: "", //地址
      guidePath: "", //注册使用指导链接
      describtion: "", //描述
      department: []
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
    },
    *updateContent({ payload }, { call, put }) {
      const { success } = yield call(updateContent, payload);
      if (success) {
        //添加成功之后 重新请求
        message.success("修改成功");
        yield put({
          type: "getDepartmentContent",
          payload: {}
        });
      } else {
        message.success("修改失败");
      }
      return success;
    }
  },
  reducers: {
    saveContentObj(state, { payload }) {
      return {
        ...state,
        contentObj: {
          ...state.contentObj,
          ...payload
        }
      };
    },
    saveDepartmentContent(state, { payload }) {
      return {
        ...state,
        departmentContentList: payload
      };
    }
  }
} as Model;
