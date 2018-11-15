import { Model } from "dva";

export default {
  namespace: "global",
  state: {
    collapsed: false //全局折叠
  },
  effects: {},
  reducers: {
    changeLayoutCollapsed(state, { payload }) {
      return {
        ...state,
        collapsed: payload
      };
    }
  }
} as Model;
