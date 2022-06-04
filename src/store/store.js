// Create a new store instance.
import { createStore } from "vuex";
import _ from "lodash";

const initialState = {
  sidebarStatus: false,
  isMobileSidebar: window.innerWidth < 600,
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
    toggleSidebar(state, status) {
      console.log(status);
      if (status == undefined) {
        state.sidebarStatus = !state.sidebarStatus;
      } else {
        state.sidebarStatus = status;
      }
    },
  },
  getters: {
    getCount(state) {
      return state.count;
    },
    isMobileSidebar(state) {
      return state.isMobileSidebar;
    },
    sidebarStatus(state) {
      return state.sidebarStatus;
    },
  },
});

export default store;