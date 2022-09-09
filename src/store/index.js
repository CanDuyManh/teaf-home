import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({

    state: {
        token: sessionStorage.getItem('token') || "",
        rvc: sessionStorage.getItem('rvc') || "",
        api: "http://localhost:3000/api/v1/",
        routerload: false,
        Snack: { show: false, msg: "", color: "" },
        Data: sessionStorage.getItem('data') || "",
        router: [],
        responsive: false,
        total_cart: 0,
        nav: 
        [{
            title: 'Trang chủ',
            link: "/home",
            icon: 'mdi-home',
            list: [],
            onClick: 
                [
                    {
                      text: 'Trang chủ',
                      disabled: false,
                      href: '/home',
                    }
                ],
        },
        {
            title: 'Giới thiệu',
            link: "/about",
            icon: 'mdi-home',
            list: [],
            onClick: 
                [
                    {
                      text: 'Giới thiệu',
                      disabled: false,
                      href: '/about',
                    }
                ],
        },
        {
            title: 'Thực đơn',
            link: "/menu",
            icon: 'mdi-home',
            list: [],
            onClick: 
                [
                    {
                      text: 'Thực đơn',
                      disabled: false,
                      href: '/menu',
                    }
                ],
        },
        {
            title: 'Cửa hàng',
            link: "/address",
            icon: 'mdi-home',
            list: [],
            onClick: 
                [
                    {
                      text: 'Cửa hàng',
                      disabled: false,
                      href: '/address',
                    }
                ],
        },
        {
            title: 'Tin tức & Ưu đãi',
            link: "/event",
            icon: 'mdi-home',
            list: [],
            onClick: 
                [
                    {
                      text: 'Tin tức & Ưu đãi',
                      disabled: false,
                      href: '/event',
                    }
                ],
        },
        {
            title: 'Liên hệ',
            link: "/contact",
            icon: 'mdi-home',
            list: [],
            onClick: 
                [
                    {
                      text: 'Liên hệ',
                      disabled: false,
                      href: '/contact',
                    }
                ],
        },
        
    ],
    },
    getters: {
        isLoggedIn: state => !!state.token,
        routerload: state => state.routerload,
        Snack: state => state.Snack,
        Data: state => state.Data,
    },
    mutations: {},
    actions: {},
    modules: {},
    
});