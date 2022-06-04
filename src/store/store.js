// Create a new store instance.
import { createStore } from "vuex";
import _ from "lodash";

const initialState = {
  sidebarStatus: false,
  isMobileSidebar: false,
  count: 0,
};

const store = createStore({
  state() {
    return _.cloneDeep(initialState);
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    setMobileSidebar(state, status) {
      state.isMobileSidebar = status;
    },
  },
  getters: {
    getCount(state) {
      return state.count;
    },
    isMobileSidebar(state) {
      return state.isMobileSidebar;
    },
  },
});

export default store;
