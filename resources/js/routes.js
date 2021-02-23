// Import the vue components

/**
 * Authentication´s Components
 */

let login = require("./auth/login.vue").default;
let register = require("./auth/register.vue").default;
let forget = require("./auth/forget.vue").default;
let logout = require("./auth/logout.vue").default;

/**
 * Home Components
 */
let home = require("./pages/Home.vue").default;

/**
 * Employee Components
 */
let storeemployee = require("./components/employee/create.vue").default;
let indexemployee = require("./components/employee/index.vue").default;

export const routes = [
    // Auth Routes
    { path: "/", component: login, name: "/" },
    { path: "/register", component: register, name: "register" },
    { path: "/forget", component: forget, name: "forget" },
    { path: "/logout", component: logout, name: "logout" },
    { path: "/home", component: home, name: "home" },
    // Employe Routes
    {
        path: "/store-employee",
        component: storeemployee,
        name: "store-employee"
    },
    {
        path: "/index-employee",
        component: indexemployee,
        name: "index-employee"
    }
];
