import {createRouter, createWebHistory} from "vue-router";
import dashboard from "../templates/master/dashboard.vue"
import home from "../templates/home.vue"
import profile from "../templates/profile.vue"

const routes = [
    {
        name: "Dashboard",
        path: '/',
        component: dashboard,
        children: [
            {
                name: "Home",
                path: '/home',
                component: home
            },
            {
                name: "Profile",
                path: '/profile',
                component: profile
            },
        ]
    },
]
const router = Router();
export default router;
function Router()   {
    return new createRouter({
        history: createWebHistory(),
        routes
    });
}