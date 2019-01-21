import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../components/login/Login'
import book from '../components/book/Book'
export default new VueRouter({
    routes:[
        {
            path: '/',
            component: login,
        },
        {
            path: '/book',
            component: book,
        }
    ]
})
Vue.use(VueRouter)