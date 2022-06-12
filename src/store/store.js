// Create a new store instance.
import { createStore } from "vuex";
import _ from "lodash";
import router from "@/router";

const isDev = import.meta.env.VITE_ENV === "dfaxev";

const initialState = {
  sidebarStatus: false,
  isMobileSidebar: window.innerWidth < 991,
  sidebarIconsOnly: false,
  user_data: isDev
    ? {
        User_id: 21,
        Name: "AdminDev",
        Surname: "AdminDev",
        AFM: 0,
        AMKA: 0,
        Email: "dev@dev.gr",
        Profession: { Role_id: 1, Title: "Admin" },
        Roles: [
          {
            Role_id: 1,
            Title: "Admin",
          },
          {
            Role_id: 2,
            Title: "Doctor",
          },
          {
            Role_id: 4,
            Title: "Family Helper",
          },
          {
            Role_id: 3,
            Title: "Nurse",
          },
          {
            Role_id: 7,
            Title: "Patient",
          },
          {
            Role_id: 6,
            Title: "Physiotherapist",
          },
          {
            Role_id: 5,
            Title: "Social Worker/ Psychologist",
          },
        ],
        Services: [
          { Service_id: 1, Title: "Measurement of vital points", Role_id: 3 },
          { Service_id: 2, Title: "Body wash", Role_id: 3 },
          { Service_id: 3, Title: "Local ministration", Role_id: 3 },
          { Service_id: 4, Title: "Intramuscular injections", Role_id: 3 },
          { Service_id: 5, Title: "Sores - Injury treatment", Role_id: 3 },
          { Service_id: 6, Title: "Catheter placement", Role_id: 3 },
          { Service_id: 7, Title: "Enema", Role_id: 3 },
          { Service_id: 8, Title: "Alimentation with Levin", Role_id: 3 },
          { Service_id: 9, Title: "Prescription", Role_id: 3 },
          { Service_id: 10, Title: "Medicine purchase", Role_id: 3 },
          { Service_id: 11, Title: "Medical appointment", Role_id: 3 },
          {
            Service_id: 12,
            Title: "Psychological, Social Support",
            Role_id: 5,
          },
          {
            Service_id: 13,
            Title: "Orientation to elders for their rights",
            Role_id: 5,
          },
          {
            Service_id: 14,
            Title: "Support contacting the appropriate agency",
            Role_id: 5,
          },
          {
            Service_id: 15,
            Title: "EFKA medical documentation submission",
            Role_id: 5,
          },
          { Service_id: 16, Title: "Yard Cleaning", Role_id: 4 },
          { Service_id: 17, Title: "Sweeping/Mopping", Role_id: 4 },
          { Service_id: 18, Title: "Meal preparation", Role_id: 4 },
          { Service_id: 19, Title: "Food Supply", Role_id: 4 },
          { Service_id: 20, Title: "Other", Role_id: 4 },
          { Service_id: 21, Title: "Physiotherapy", Role_id: 6 },
          { Service_id: 22, Title: "Kinesiotherapy", Role_id: 6 },
          { Service_id: 23, Title: "Prescription", Role_id: 2 },
          { Service_id: 24, Title: "Clinical Examination", Role_id: 2 },
          { Service_id: 25, Title: "Catheteriza", Role_id: 2 },
        ],
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyX2lkIjoyMSwiTmFtZSI6IkFkbWluRGV2IiwiU3VybmFtZSI6IkFkbWluRGV2IiwiQUZNIjowLCJBTUtBIjowLCJQcm9mZXNzaW9uIjp7IlJvbGVfaWQiOjEsIlRpdGxlIjoiQWRtaW4ifSwiRW1haWwiOiJkZXZAZGV2LmdyIiwiUGFzc3dvcmQiOiIiLCJleHAiOjE2NTUzODQ3OTh9.z375I03KIwiBDl15HfpkIJcB57aKXQTs7T9fliyuh64",
      }
    : null,
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
    signOut(state) {
      state.user_data = null;
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
      return state.user_data !== null;
    },
  },
});

export default store;
