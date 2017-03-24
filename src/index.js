//lib
import Vue from 'vue'
import Axios from 'axios'
import router from './routes'
import ElementUi from 'element-ui'
import store from "./vuex"

//插件
Vue.use(ElementUi)

const app = new Vue({
		el: "#app",
		store,
		router,
		computed: {
			//计算
			ViewComponent() {
				console.log(this.$route.matched)
				
				return matchingView ?
					require('./pages/' + matchingView + '.vue') :
					require('./pages/404.vue')
			}
		},
		render(h) {
			return h(this.ViewComponent)
		}
	})
	//简单路由
window.addEventListener('popstate', () => {
	app.$store.commit("setCurrentRoute", window.location.pathname);
})