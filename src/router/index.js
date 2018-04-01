import Vue from 'vue'
import Router from 'vue-router'
import store from './../store'

Vue.use(Router)

import Home from '../components/HomePage'
import Geo from '../components/Geo'
const router = new Router({
    routes: [
        {
            path: '*',
            component: Home,
            name: "Home"
        },
        {
            path: 'geolocalisation',
            component: Geo,
            name: "Geolocalisation"
        }
    ]
})



export default router;