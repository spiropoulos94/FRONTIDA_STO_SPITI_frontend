import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router/index.js";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPhone,
  faBars,
  faFolder,
  faHome,
  faUserPlus,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import store from "@/store/store.js";

// Import your directive, in order to register it.
import clickOutside from "@/utils/click-outside.js";

library.add(faPhone, faBars, faFolder, faHome, faUserPlus, faCog);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(clickOutside)
  .use(store)
  .use(router)
  .mount("#app");
