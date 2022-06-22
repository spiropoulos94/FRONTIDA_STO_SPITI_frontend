// Create a new store instance.
import { createLogger, createStore } from "vuex";
import _ from "lodash";
import router from "@/router";

const eraseState = (state) => {
  for (const property in state) {
    state[property] = null;
  }
};

const store = createStore({
  state() {
    return JSON.parse(window.sessionStorage.getItem("state"));
  },
  mutations: {
    login(state, payload) {
      console.log({ state, payload });
      state.user_data = {};
      state.user_data = payload.user;
      state.user_data.token = payload.token;
      state.user_data.Roles = payload.roles;
      router.push("/");
      state.sidebarStatus = window.innerWidth > 991;
      state.mobile = window.innerWidth > 991;
    },
    signOut(state) {
      state.user_data = null;
      eraseState(state);
      router.push("/login");
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
      return state.user_data;
    },
    getRoles(state) {
      return state.user_data.Roles;
    },
    getHomepath(state) {
      return state.homepath;
    },
  },
  // plugins: [createLogger()],
});

const unsubscribe = store.subscribe((mutation, state) => {
  // console.clear();
  console.log(mutation.type);
  console.log(mutation.payload);

  let stringifiedState = JSON.stringify(state);
  window.sessionStorage.setItem("state", stringifiedState);
});

// you may call unsubscribe to stop the subscription
// unsubscribe();

export default store;
