//路由 设置
import Main from "./pages/main.vue"
import Login from "./pages/login.vue"
import FalsePage from "./pages/404.vue"

import Pages from "./view/pages.vue"
import Form from "./view/form.vue"
import Table from "./view/table.vue"
import Swiper from "./view/swiper.vue"
import Chart from "./view/chart.vue"
import Editor from "./view/editor.vue"
import Editor2 from "./view/editor2.vue"
import Amap from "./view/map.vue"
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
				path:"form",
				component:Form
			},{
				path:"table",
				component:Table
			},{
				path:"swiper",
				component:Swiper
			},
			{
				path:"pages",
				component:Pages
			},
			{
				path:"chart",
				component:Chart
			},
			{
				path:"editor",
				component:Editor
			},
			{
				path:"editor2",
				component:Editor2
			},
			{
				path:"map",
				component:Amap
			},
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