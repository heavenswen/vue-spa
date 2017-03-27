//lib
import Vue from 'vue'
import Axios from 'axios'
import VueRouter from 'vue-router'
import routes from './routes'
import ElementUi from 'element-ui'
import store from "./vuex"
import 'element-ui/lib/theme-default/index.css'
import './assets/css/style.scss'

import App from "./pages/app.vue"

//插件
Vue.use(ElementUi)
Vue.use(VueRouter)

var router = new VueRouter({
	routes,
	scrollBehavior(to, from, savedPosition) {
		// return { x: 0, y: 0 }期望滚动到哪个的位置
		//仅当 popstate 导航 可用
		//滚动锚点
		if(to.hash) {
			return {
				selector: to.hash
			}
		}
	},
	//mode: 'history',
});
//路由时
//router.beforeEach((to, from, next) =>{
//	
//})
const app = new Vue({
	router,
	store,
	watch: {
		"$route": function(to, from) {
			//路由变换时执行
			//console.log(["$route", to, from])
			//console.log(this.$route.matched)
		}
	},
	render: h => h(App)
}).$mount('#app')
