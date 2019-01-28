import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../components/login/Login'
import hello from '../components/HelloWorld'

import index from '../components/index/Index'
import frontEnd from '../components/leftNav/FrontEnd'
import backEnd from '../components/leftNav/BackEnd'
import recommend from '../components/leftNav/Recommend'
import framework from '../components/leftNav/Framework'

import book from '../components/book/Book'
export default new VueRouter({
    routes:[
        {
            path: '/',
            component: login,
        },
        {
            path: '/hello',
            component: hello,
        },
        {
            path: '/book',
            component: book,
        },
        {
            path:'/index',
            component:index,
            children:[
                {
                    path:'/index/recommend',
                    component:recommend,
                    name:'推荐',

                },
                {
                    path:'/index/frontEnd',
                    component:frontEnd,
                    name:'前端'
                },
                {
                    path:'/index/backEnd',
                    component:backEnd,
                    name:'后端'
                },
                {
                    path:'/index/framework',
                    component:framework,
                    name:'框架'
                },
            ]
        }
    ]
})
Vue.use(VueRouter)