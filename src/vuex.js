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
					path: '/main/form'
				},
				{
					title: "表格类",
					path: "/main/table"
				}
				]
			}, {
				title: "选项卡",
				childs: [{
					title: "导航2",
					icon: "el-icon-document",
					path: '/main/pages'
				}]
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