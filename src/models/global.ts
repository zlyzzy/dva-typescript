import { Model } from "dva";
import { department } from "SERVICES/department";
import { isEmptyObject, setStorage } from "UTILS/utils";

export default {
  namespace: "global",
  state: {
    collapsed: false, //全局折叠
    defaultList: [
      {
        name: "首页",
        path: "/base/index",
        code: "0",
        icon: "home",
        _id: "0"
      }
    ],
    departmentList: [], //勾选的部门菜单
    currentDepartmentCode: "", //当前点击的部门  用于JumpLink组件获取数据
    currentDepartmentName: "", //当前点击部门的name 用于显示
    departmentMap: {}, //勾选的部门菜单map
    allDepartmentList: [] //所有的部门菜单
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
    //获取所有的部门菜单
    *getAllDepartmentList({}, { call, put }) {
      const { result, success } = yield call(department);
      if (success) {
        yield put({
          type: "saveAllDepartmentList",
          payload: [
            {
              name: "内部系统",
              path: "/base/company/innerSystem",
              code: "00",
              icon: "project",
              _id: "00"
            },
            ...result
          ]
        });
      } else {
        alert({ type: "error", content: "获取部门列表失败" });
      }
      return success;
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
          currentDepartmentCode: state.departmentMap[payload].code,
          currentDepartmentName: state.departmentMap[payload].name
        };
      } else {
        return {
          ...state
        };
      }
    },
    //保存所有部门菜单
    saveAllDepartmentList(state, { payload }) {
      return {
        ...state,
        allDepartmentList: payload
      };
    },
    //保存勾选的部门菜单
    saveDepartmentList(state, { payload }) {
      setStorage({ name: "departmentList", value: JSON.stringify(payload) });
      return {
        ...state,
        departmentList: payload
      };
    },
    //构建勾选部门菜单，默认菜单map
    saveDepartmentMap(state) {
      let departmentMap = {};
      let list = [...state.defaultList, ...state.departmentList];
      list.forEach(item => {
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
