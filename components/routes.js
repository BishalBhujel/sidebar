import styles from '../styles/Colors.module.css';
import Index from "../pages/index.js";
import Profile from "../pages/profile.js";
import Maps from "../pages/maps.js";
import register from "../pages/user/register.js";
import Login from "../pages/user/login.js";
import Tables from "../pages/tables";
import Icons from "../pages/icons.js";

var routes = [
    {
        path: "/",
        name: "Dashboard",
        icon: "ni ni-tv-2 text-primary",
        component: Index,
        layout: "admin",
    },
    {
        path: "/icons",
        name: "Icons",
        icon: "ni ni-planet text-secondary",
        component: Icons,
        layout: "admin",
    },
    {
        path: "/maps",
        name: "Maps",
        icon: "ni ni-pin-3 text-info",
        component: Maps,
        layout: "admin",
    },
    {
        path: "/profile",
        name: "User Profile",
        icon: "ni ni-single-02 ",
        component: Profile,
        layout: "admin",
    },
    {
        path: "/tables",
        name: "Tables",
        icon: "ni ni-bullet-list-67 text-primary",
        component: Tables,
        layout: "/admin",
    },
    {
        path: "/user/login",
        name: "Login",
        icon: "ni ni-key-25 text-info",
        component: Login,
        layout: "auth",
    },
    {
        path: "/user/register",
        name: "Register",
        icon: "ni ni-circle-08",
        component: register,
        layout: "auth",
    },
];
export default routes;
