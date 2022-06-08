// Create a new store instance.
import { createStore } from "vuex";
import _ from "lodash";
import router from "@/router";

const initialState = {
  sidebarStatus: false,
  isMobileSidebar: window.innerWidth < 600,
  sidebarIconsOnly: false,
  count: 0,
  user_data: null,
};

const store = createStore({
  state() {
    return _.cloneDeep(initialState);
  },
  mutations: {
    login(state, payload) {
      console.log({ state, payload });
      state.user_data = {};
      state.user_data = payload.user;
      state.user_data.token = payload.token;
      router.push("/");
      state.sidebarStatus = window.innerWidth > 991;
    },
    increment(state) {
      state.count++;
    },
    setMobileSidebar(state, status) {
      state.isMobileSidebar = status;
    },
    toggleSidebar(state, status) {
      if (status == undefined) {
        state.sidebarStatus = !state.sidebarStatus;
      } else {
        state.sidebarStatus = status;
      }
    },
    toggleIconsOnly(state, status) {
      if (status == undefined) {
        state.sidebarIconsOnly = !state.sidebarIconsOnly;
      } else {
        state.sidebarIconsOnly = status;
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
    iconsOnly(state) {
      return state.sidebarIconsOnly;
    },
    isAuthenticated(state) {
      return state.user_data !== null;
    },
  },
});

export default store;
