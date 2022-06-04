import { createWebHistory, createRouter } from "vue-router";
import Home from "@/pages/Home.vue";
import Reports from "@/pages/Reports.vue";
import Account from "@/pages/Account.vue";
import CreateUser from "@/pages/CreateUser.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
