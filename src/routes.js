
import Main from "./pages/main.vue"
import Login from "./pages/login.vue"
import FalsePage from "./pages/404.vue"

export default [
	{
		path: "/",
		name: "main",
		component: Main

	},{
		path:"/logn",
		component:Login
	},{
		path:"/404",
		component:FalsePage
	}
]