import { createApp } from "vue";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone, faBars, faFolder } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import store from "@/store/store.js";

library.add(faPhone, faBars, faFolder);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(store)
  .mount("#app");
