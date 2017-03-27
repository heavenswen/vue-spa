
import Main from "./pages/main.vue"
import Login from "./pages/login.vue"
import FalsePage from "./pages/404.vue"

export default [
	{
		//地址名
		path: "/main",
		name: "main",
		//别名
		alias:"/",
		component: Main,
		children:[
			{
				path:"child",
				component:Login
			}
		]

	},{
		path:"/login",
		name:"login",
		component:Login
	},{
		//404
		path:"*",
		component:FalsePage
	}
]