//lib
import Vue from 'vue'
import Axios from 'axios'
import VueRouter from 'vue-router'
import routes from './routes'
import ElementUi from 'element-ui'
import store from "./vuex"


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
	}
});
//路由时连接判断
router.beforeEach((to, from, next) =>{
	if(to.matched.length){
		//存在匹配时
		next()
	}else{
		//不存在匹配时 go to 404
		router.push("/404");
	}
	
})
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
	computed: {
		//计算
		ViewComponent() {
			console.log(this.$route.matched)

			return matchingView ?
				require('./pages/' + matchingView + '.vue') :
				require('./pages/404.vue')
		}
	},
	render: h => h(App)
}).$mount('#app')
//	//简单路由
//window.addEventListener('popstate', () => {
//	app.$store.commit("setCurrentRoute", window.location.pathname);
//})