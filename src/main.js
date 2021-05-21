import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { VueReCaptcha } from "vue-recaptcha-v3";

import "./assets/scss/app.scss";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faCalendarAlt, faGithub, faLinkedinIn);

createApp(App).use(store).use(router).use(VueReCaptcha, { siteKey: "6LetNsAaAAAAAJyNITv17967SdFEgc2LG2PkMHT2" }).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
