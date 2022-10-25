import Vue from "vue";
import Vuex from "vuex";
const cookies = require('vue-cookies');
Vue.use(Vuex);

export default new Vuex.Store({

    state: {
        dialog_alter_body: '',
        dialog_alter: false,
        token: cookies.get('token') || "",
        rvc: sessionStorage.getItem('rvc') || "",
        api: "http://192.168.1.59:3000/api/v1/",
        routerload: false,
        Snack: { show: false, msg: "", color: "" },
        Data: sessionStorage.getItem('data') || "",
        router: [],
        responsive: false,
        total_cart: 0,
        user: cookies.get('user') || {
            id: '',
            name: '',
        },
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
        
        ],
    },
    getters: {
        isLoggedIn: state => !!state.token,
        routerload: state => state.routerload,
        Snack: state => state.Snack,
        Data: state => state.Data,
        defauConfig: state => {return {headers: {Authorization: "Bearer " + state.token}}}
    },
    mutations: {},
    actions: {},
    modules: {},
    
});