// 0. 如果使用模块化机制编程，導入Vue和VueRouter，要调用 Vue.use(VueRouter)
import Vue from "vue"
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 1. 定义（路由）组件。
// 可以从其他文件 import 进来
import Main from "./pages/main.vue"
import Login from "./pages/login.vue"
import FalsePage from "./pages/404.vue"

//$route.params 外，$route 对象还提供了其它有用的信息，例如，$route.query（如果 URL 中有查询参数）、$route.hash 等等。你可以查看 API 文档 的详细说明。{template: "<div>传参$route{{ $route.params }}</div>"}
//路由嵌套{template: '<div>路由嵌套：<transition name="fade"><router-view></<router-view></transition></div>'}

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。

const routes = [{
	//主页
	//显示路径 string
	path: '/',
	//模版 object
	component: Main,

}];

// 3. 创建 router 实例，然后传 `routes` 配置
//*一个页面只会有一个路由
var router = new VueRouter({
	routes, // 配置,
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