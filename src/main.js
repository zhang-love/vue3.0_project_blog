import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import './assets/css/common.less'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueParticles from 'vue-particles';
import echarts from 'echarts'

Vue.prototype.echarts = echarts;
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueParticles)
new Vue({
    render: h => h(App),
    router
}).$mount('#app')
