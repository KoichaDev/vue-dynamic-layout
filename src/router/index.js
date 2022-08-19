import Vue from 'vue';
import VueRouter from 'vue-router'

// View components
// import Home from '../views/Home.vue'
import LayoutExample from '../views/LayoutExample.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "LayoutExample",
        component: LayoutExample,
    }, {
        path: "/layout/standard",
        name: "LayoutStandard",
        component: LayoutExample,
        meta: {
            layout: "standard",
        },
    }, {
        path: "/layout/auth",
        name: "Home",
        component: LayoutExample,
        meta: {
            layout: "auth",
        },
    },
]

const router = new VueRouter({
    mode: 'history',
    routes,
})

export default router;
