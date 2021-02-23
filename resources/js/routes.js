// Import the vue components

/**
 * Authentication´s Routes
 */

let login = require("./auth/login.vue").default;
let register = require("./auth/register.vue").default;
let forget = require("./auth/forget.vue").default;
let logout = require("./auth/logout.vue").default;

/**
 * Components Routes
 */
let home = require("./pages/Home.vue").default;

export const routes = [
    { path: "/", component: login, name: "/" },
    { path: "/register", component: register, name: "register" },
    { path: "/forget", component: forget, name: "forget" },
    { path: "/logout", component: logout, name: "logout" },
    { path: "/home", component: home, name: "home" }
];
