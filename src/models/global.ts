import { Model } from "dva";

export default {
  namespace: "global",
  state: {
    collapsed: false, //全局折叠
    navList: [] //菜单存储
  },
  effects: {},
  reducers: {
    saveNavList(state, { payload }) {
      return {
        ...state,
        navList: payload
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
