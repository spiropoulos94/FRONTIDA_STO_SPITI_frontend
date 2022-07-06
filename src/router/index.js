import { createWebHistory, createRouter } from "vue-router";
import Home from "@/pages/Home.vue";
import Reports from "@/pages/Reports.vue";
import Account from "@/pages/Account.vue";
import Users from "@/pages/Users.vue";
import UserCreate from "@/components/user/UserCreate.vue";
import UserList from "@/components/user/UserList.vue";
import UserProfile from "@/components/user/UserProfile.vue";
import Patients from "@/pages/Patients.vue";
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
    path: "/signup/:hash",
    name: "signup",
    component: CompleteSignUp,
    beforeEnter(to, from, next) {
      if (store.state.user_data && store.state.user_data !== null) {
        alert(
          "you need to sign out in order for the new user to complete sign up"
        );
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
    path: "/users",
    name: "Users",
    component: Users,
    children: [
      {
        path: "",
        components: {
          default: Users,
          users: UserList,
        },
      },
      {
        path: ":id",
        components: {
          // default: Users,
          users: UserProfile,
        },
      },
      {
        path: "create",
        alias: "create/:id",
        components: {
          // default: Users,
          users: UserCreate,
        },
      },
    ],
  },
  {
    path: "/patients",
    name: "Patients",
    component: Patients,
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

const checkAuthStatus = (to) => {
  console.log("checkAuthStatus");
  if (
    to.name === "signup" &&
    to.params.hash.length &&
    !store.getters.isAuthenticated
  ) {
    return true;
  }
  if (to.name !== "login" && !store.getters.isAuthenticated) {
    return false;
  } else {
    return true;
  }
};

router.beforeEach((to, from, next) => {
  if (checkAuthStatus(to)) {
    next();
  } else {
    next({
      path: "login",
      replace: true,
    });
  }
});

export default router;
