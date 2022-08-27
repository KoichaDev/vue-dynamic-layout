import Vue from 'vue';
import VueRouter from 'vue-router';

// View components
import ViewAuth from '../views/auths/ViewAuth.vue';
// import Layout from '../layouts/Layout.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'ViewAuth',
        component: ViewAuth,

    },
    // {
    // 	path: '/layout/standard',
    // 	name: 'LayoutStandard',
    // 	component: LayoutExample,
    // 	meta: {
    // 		layout: 'standard',
    // 	},
    // },
    // {
    // 	path: '/layout/auth',
    // 	name: 'Home',
    // 	component: LayoutExample,
    // 	meta: {
    // 		layout: 'auth',
    // 	},
    // },
];

const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;
