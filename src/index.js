'use strict'
//lib
import Vue from 'vue'
import Axios from 'axios'
import VueRouter from 'vue-router'
import routes from './routes'
import ElementUi from 'element-ui'
import store from "./vuex"
import "element-ui/lib/theme-default/index.css"
import './assets/css/style.scss'
import App from "./pages/app.vue"

//全局插件
Vue.use(ElementUi)
Vue.use(VueRouter)


var router = new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
        // return { x: 0, y: 0 }期望滚动到哪个的位置
        //仅当 popstate 导航 可用
        //滚动锚点
        if (to.hash) {
            return {
                selector: to.hash
            }
        }
    },

    //mode: 'history',
});

// router.beforeEach((to, from, next) => {

// })

//路由时执行
router.afterEach((to, from) => {
    //获得当前地址to
    let nowPath = to.fullPath
    //前往的地址
    let data = router.app.$store
    //触发路由时改变 显示当前路径用 side 导航
    data.commit("setNowPath", nowPath)
    
})
const app = new Vue({
    router,
    store,
    watch: {
        $route(to, from) {
            //路由变换时执行

        }
    },
    render: h => h(App)
}).$mount('#app')