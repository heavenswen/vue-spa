import Vue from 'vue' //vue
import Vuex from 'vuex'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
	strict: debug,
	state: {
		//data 不允许直接修改
		mobile:(document.hasOwnProperty("ontouchstart")),//判断
		//用户名
		user:"dc-qiu",
		//
		userPic:"/src/assets/img/group.png",
		navs:[
		{
			title:"侧边导航",
			icon:"el-icon-document",
			childs:[
			{
				title:"导航1",
				icon:"el-icon-document",
				href:'/login'
			}
			]
		},{
			title:"选项卡",
			href:'/login'
		}
		]
	},
	getters: {
		//计算属性

	},
	mutations: {
		//事件 function(state,data) 调用 store.commit([name],data)
		setCurrentRoute(state, value) {
			return state.currentRoute = value
		}

	},
	actions: {
		//异步 提交 mutations 例function(content){context.commit('function')} 触发store.dispatch('function')
	}

})