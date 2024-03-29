import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // <-- This imports index.js from the /router directory
import store from "./store";

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
