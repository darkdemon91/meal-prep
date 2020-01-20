import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About';
import Menu from '../views/Menu';
import SignIn from '../views/SignIn';
import Join from '../views/Join';
import store from '../store/index';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: About,
        meta: {
            authRequired: true
        }
    },
    {
        path: '/menu',
        name: 'menu',
        component: Menu
    },
    {
        path: '/sign-in',
        name: 'signin',
        component: SignIn
    },
    {
        path: '/join',
        name: 'join',
        component: Join
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.authRequired)) {
        if (!store.state.isAuthenticated) {
            next({
                path: '/sign-in'
            });
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;
