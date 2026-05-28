import {createRouter,createWebHistory} from "vue-router"
import Home from "../home.vue"
import about from "../views/about.vue"
import contacts from "../views/contacts.vue"
import services from "../views/services.vue"
import gallery from "../views/gallery.vue"

const routes = [
    {
        path:"/",
        name: "Home",
        component: Home
    },
    {
        path:"/about",
        name:"about",
        component: about
    },
    {
        path:"/services",
        name:"services",
        component: services
    },
    {
        path:"/contacts",
        name:"contacts",
        component: contacts
    },
    {
        path:"/gallery",
        name:"gallery",
        component: gallery
    }
]

const router=createRouter(
    {
        history:createWebHistory(),
        routes,
    }
);

export default router