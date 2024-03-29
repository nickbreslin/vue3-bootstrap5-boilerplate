import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";
import router from "./router";
import store from "./store";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootswatch/dist/cyborg/bootstrap.min.css"; // lumen, or cyborg

import "@/css/style.css";

const app = createApp(App).use(store).use(router);

app.config.globalProperties.axios = axios;

//store.subscribe((mutation, state) => {
// Store the state object as a JSON string
//  localStorage.setItem(
//    process.env.VUE_APP_LOCALSTORAGE_KEY,
//    JSON.stringify(state)
//  );
//});

app.mount("#app");
