import { Model } from "dva";
import { department } from "SERVICES/department";
import { isEmptyObject } from "UTILS/utils";

export default {
  namespace: "global",
  state: {
    collapsed: false, //全局折叠
    departmentList: [], //菜单存储
    currentDepartmentId: "", //当前点击的部门  用于JumpLink组件获取数据
    currentDepartmentName: "", //当前点击部门的name 用于显示
    departmentMap: {}
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        //为了切换页面的时候页面名称切换
        dispatch({
          type: "saveCurrentDepartment",
          payload: pathname
        });
      });
    }
  },
  effects: {
    *getDepartmentList({}, { call, put }) {
      const { result, success } = yield call(department);
      if (success) {
        let info = [
          {
            name: "首页",
            path: "/base/index",
            code: "0",
            icon: "home",
            _id: "0"
          },
          ...result
        ];
        yield put({
          type: "saveDepartmentList",
          payload: info
        });
      }
    }
  },
  reducers: {
    saveCurrentDepartment(state, { payload }) {
      if (
        isEmptyObject(state.departmentMap) &&
        payload in state.departmentMap
      ) {
        document.title = state.departmentMap[payload].name;
        return {
          ...state,
          currentDepartmentId: state.departmentMap[payload]._id,
          currentDepartmentName: state.departmentMap[payload].name
        };
      } else {
        return {
          ...state
        };
      }
    },
    saveDepartmentList(state, { payload }) {
      return {
        ...state,
        departmentList: payload
      };
    },
    saveDepartmentMap(state, { payload }) {
      let departmentMap = {};
      payload.forEach(item => {
        departmentMap[item.path] = item;
      });
      return {
        ...state,
        departmentMap: departmentMap
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
