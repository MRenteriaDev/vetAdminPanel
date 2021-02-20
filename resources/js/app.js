require("./bootstrap");

// Import the vue components

import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// Router imported
import { routes } from "./routes";

window.Vue = require("vue");

// Export the routes
const router = new VueRouter({
    routes,
    mode: "history"
});

const app = new Vue({
    router
}).$mount("#app");
