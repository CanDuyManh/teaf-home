import Vue from "vue";
import VueRouter from "vue-router";
import store from '../store/index.js'


Vue.use(VueRouter);

const routes = [
    {
        path: "/cart",
        component: () =>
            import ('../components/Cart.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/home",
        component: () =>
            import ('../components/Home.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/menu",
        component: () =>
            import ('../components/Menu.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/login",
        component: () =>
            import ('../components/Login.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/about",
        component: () =>
            import ('../components/About.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/address",
        component: () =>
            import ('../components/Address.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/event",
        component: () =>
            import ('../components/Event.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/setting",
        component: () =>
            import ('../components/Setting.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/profile",
        component: () =>
            import ('../components/settingPages/Profile.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/payment",
        component: () =>
            import ('../components/Payment.vue'),
        meta: {
            requiresAuth: true
        }
    },

]
const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
    linkActiveClass: "active",
    linkExactActiveClass: "exact-active",

});
// router.beforeEach((to, from, next) => {
//     store.state.routerload = true;
//     if (to.matched.some(record => record.meta.requiresAuth)) {
//         if (store.getters.isLoggedIn) {
//             next()
//             return
//         }
//         next('')
//     } else {
//         next()
//     }
//     if (to.matched.some(record => record.meta.Auth)) {
//         if (!store.getters.isLoggedIn) {
//             next()
//             return
//         }
//         next('/home')
//     } else {
//         next()
//     }
// })
router.afterEach(() => {
    setTimeout(function() {
        store.state.routerload = false;
    }, 500);
})
export default router;