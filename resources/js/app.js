require("./bootstrap");

// Import the vue components

import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// Router imported
import { routes } from "./routes";
window.Vue = require("vue");

// Import the User Class
import User from "./Helpers/User";
window.User = User;

// Sweet alert start
import Swal from "sweetalert2";
window.Swal = Swal;

const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: toast => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
    }
});

window.Toast = Toast;

// Sweet alert end

// Export the routes
const router = new VueRouter({
    routes,
    mode: "history"
});

const app = new Vue({
    router
}).$mount("#app");
