import { Model } from "dva";
import { getDepartmentCode, alert } from "UTILS/utils";
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
        //页面切换的时候 获取部门对应的列表
        if (pathname.indexOf("/base/application/") > -1) {
          dispatch({
            type: "getDepartmentContent",
            payload: getDepartmentCode(pathname)
          });
          //这是因为页面切换的时候，上个页面的state 并没有被我清除，在此处做清除
          dispatch({
            type: "saveContentObj",
            payload: {
              _id: "",
              name: "",
              path: "",
              guidePath: "",
              describtion: "",
              department: []
            }
          });
        }
      });
    }
  },
  effects: {
    *getDepartmentContent({ payload }, { call, put, select }) {
      let currentDepartmentCode = yield select(
        state => state.global.currentDepartmentCode
      );
      if (!currentDepartmentCode) {
        currentDepartmentCode = payload;
      }
      const { result, success } = yield call(getDepartmentContent, {
        _id: currentDepartmentCode
      });
      if (success) {
        yield put({
          type: "saveDepartmentContent",
          payload: result
        });
      } else {
        alert({ type: "error", content: "请求列表失败" });
      }
    },
    *addContent({ payload }, { call, put, select }) {
      delete payload._id;
      const { success } = yield call(addDepartmentContent, payload);
      if (success) {
        //添加成功之后 重新请求
        alert({ type: "success", content: "添加成功" });
        yield put({
          type: "getDepartmentContent",
          payload: {}
        });
      } else {
        alert({ type: "error", content: "添加失败" });
      }
      return success;
    },
    *updateContent({ payload }, { call, put }) {
      const { success } = yield call(updateContent, payload);
      if (success) {
        //添加成功之后 重新请求
        alert({ type: "success", content: "操作成功" });
        yield put({
          type: "getDepartmentContent",
          payload: {}
        });
      } else {
        alert({ type: "error", content: "操作失败" });
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
