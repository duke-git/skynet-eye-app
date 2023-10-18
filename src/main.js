import { createApp } from "vue";
import App from "./App.vue";

import "@/styles/common.scss";
import "element-plus/dist/index.css";

import * as Icons from "@element-plus/icons-vue";

import router from "@/routers";

const app = createApp(App);

Object.keys(Icons).forEach(key => {
    app.component(key, Icons[key]);
});

app.use(router).mount("#app");
