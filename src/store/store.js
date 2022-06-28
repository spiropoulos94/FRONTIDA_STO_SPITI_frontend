// Create a new store instance.
import { createLogger, createStore } from "vuex";
import _ from "lodash";
import router from "@/router";
import Persister from "./plugins/store-persist.js";
import { decrypt } from "./encryption.js";

let initialState = {
  user_data: null,
  isMobileSidebar: null,
  sidebarIconsOnly: null,
};

const store = createStore({
  state() {
    let sessionStorageState = decrypt(window.localStorage.getItem("state"));
    if (sessionStorageState && sessionStorageState.length) {
      return JSON.parse(decrypt(window.localStorage.getItem("state")));
    } else {
      return initialState;
    }
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
    },
    signOut(state) {
      state.user_data = null;
      // eraseState(state);
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
      return state.user_data && state.user_data !== null;
    },
    getRoles(state) {
      return state.user_data.Roles;
    },
    getHomepath(state) {
      return state.homepath;
    },
  },
  plugins: [Persister, createLogger()],
});

export default store;
