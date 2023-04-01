import { createApp } from "vue";
import "./styles/main.scss";
import "./style.css";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import { router } from "./router";

createApp(App).use(router).mount("#app");
