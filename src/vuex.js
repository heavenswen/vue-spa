import Vue from 'vue' //vue
import Vuex from 'vuex'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
//移动端检测
var mobile = !!navigator.userAgent.match(/AppleWebKit.*Mobile.*/);
export default new Vuex.Store({
	strict: debug,
	state: {
		//data 不允许直接修改
		mobile, //判断
		//产品名称
		title: "DCUI",
		//用户名
		user: "dc-qiu",
		//
		userPic: "/src/assets/img/group.png",
		nowPath: null,
		navs: [
			{
				title: "数据类",
				icon: "el-icon-document",
				childs: [{
					title: "表单类",
					icon: 'el-icon-menu',
					path: '/main/form'
				},
				{
					title: "表格类",
					icon: 'el-icon-menu',
					path: "/main/table"
				}
				]
			}, {
				title: "外部插件",
				icon:"el-icon-upload",
				childs: [{
					title: "swiper",
					icon: "el-icon-star-off",
					path: '/main/swiper'
				},
				{
					title: "chart",
					icon: "el-icon-star-off",
					path: '/main/chart'
				},
				{
					title: "quill",
					icon: "el-icon-document",
					path: '/main/editor2'
				},
				{
					title: "amap",
					icon: "el-icon-star-off",
					path: '/main/map'
				}
				]
			}, {
				title: "dom操作",
				path: '/main/pages'
			}
		],
	},
	getters: {
		//计算属性

	},
	mutations: {
		//事件 function(state,data) 调用 store.commit([name],data)
		setNowPath(state, value) {
			//当前路径
			return (state.nowPath = value)
		},
		setMark(state, value) {
			//设置数据加载 视图
			return (state.mark = value)
		}
	},
	actions: {
		//异步 提交 mutations 例function(content){context.commit('function')} 触发store.dispatch('function')
	}

})
