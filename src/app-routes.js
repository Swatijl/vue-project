
import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/home";
import Time from "./components/time";
import Data from "./components/data";
import Currency from "./components/currency";

const routes = [
    {
        path: "/home",
        component: Home
    },
    {
        path: "/time",
        component: Time
    },
    {
        path: "/data",
        component: Data
    },
    {
        path: "/currency",
        component: Currency
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  

export default router;