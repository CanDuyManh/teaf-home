import Vue from "vue";
import VueRouter from "vue-router";
import store from '../store/index.js'


Vue.use(VueRouter);

const routes = [
   
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