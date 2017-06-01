//路由 设置
//内容容器
import Main from "./pages/main.vue"
//登录页
import Login from "./pages/login.vue"
//404
import FalsePage from "./pages/404.vue"

//页面模版
import Pages from "./view/pages.vue"
//表单
import Form from "./view/form.vue"
//表格
import Table from "./view/table.vue"
//swiper
import Swiper from "./view/swiper.vue"
//图表
import Chart from "./view/chart.vue"
//富文本
import Editor2 from "./view/editor2.vue"
//地图
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