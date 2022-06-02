import { createApp } from "vue";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone, faBars } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faPhone, faBars);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .component("font-awesome-icon", FontAwesomeIcon)

  .mount("#app");
