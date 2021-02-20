// Import the vue components

/**
 * Authentication´s Routes
 */

let login = require("./auth/login.vue").default;
let register = require("./auth/register.vue").default;

export const routes = [
    { path: "/", component: login, name: "/" },
    { path: "/register", component: register, name: "register" }
];
