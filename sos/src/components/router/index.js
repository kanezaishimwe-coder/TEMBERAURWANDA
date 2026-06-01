import {createRouter,createWebHistory} from "vue-router"
import Home from "../home.vue"
import about from "../views/about.vue"
import contacts from "../views/contacts.vue"
import services from "../views/services.vue"
import gallery from "../views/gallery.vue"

import destinationKigali from "../views/destination-kigali.vue"
import destinationNorthern from "../views/destination-northern.vue"
import destinationSouthern from "../views/destination-southern.vue"
import destinationWestern from "../views/destination-western.vue"
import destinationEastern from "../views/destination-eastern.vue"

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
    },
    {
        path:"/destinations/kigali",
        name:"destination-kigali",
        component: destinationKigali
    },
    {
        path:"/destinations/northern",
        name:"destination-northern",
        component: destinationNorthern
    },
    {
        path:"/destinations/southern",
        name:"destination-southern",
        component: destinationSouthern
    },
    {
        path:"/destinations/western",
        name:"destination-western",
        component: destinationWestern
    },
    {
        path:"/destinations/eastern",
        name:"destination-eastern",
        component: destinationEastern
    }
]

const router=createRouter(
    {
        history:createWebHistory(),
        routes,
    }
);

export default router