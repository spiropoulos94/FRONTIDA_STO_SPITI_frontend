import { createWebHistory, createRouter } from "vue-router";
import Home from "@/pages/Home.vue";
import Reports from "@/pages/Reports.vue";
import Account from "@/pages/Account.vue";
import CreateUser from "@/pages/CreateUser.vue";
import Login from "@/pages/Login.vue";
import store from "../store/store";
import NotFound from "@/components/NotFound.vue";
import CompleteSignUp from "@/pages/CompleteSignUp.vue";

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
    beforeEnter(to, from, next) {
      if (store.state.user_data !== null) {
        next("/");
      } else {
        next();
      }
    },
  },

  {
    path: "/reports",
    name: "Reports",
    component: Reports,
  },
  {
    path: "/account",
    name: "Account",
    component: Account,
  },
  {
    path: "/create-user",
    name: "Create User",
    component: CreateUser,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
    beforeEnter(to, from, next) {
      if (store.getters.isAuthenticated) {
        next();
      } else {
        next("login");
      }
    },
  },
  // {
  //   path: "*",
  //   component: NotFound,
  //   beforeEnter(to, from, next) {
  //     if (store.state.isAuthenticated) {
  //       next();
  //     } else {
  //       next("/");
  //     }
  //   },
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name !== "login" && !store.getters.isAuthenticated) {
    next({
      path: "login",
      replace: true,
    });
  } else {
    next();
  }
});

export default router;
