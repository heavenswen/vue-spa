
import Main from "./pages/main.vue"
import Login from "./pages/login.vue"
import FalsePage from "./pages/404.vue"

export default [
	{
		path: "/main",
		name: "main",
		component: Main,
		children:[
			{
				path:"child",
				component:Login
			}
		]

	},{
		path:"/login",
		component:Login
	},{
		//404
		path:"*",
		component:FalsePage
	}
]