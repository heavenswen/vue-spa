import Vue from 'vue' //vue
import Vuex from 'vuex'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
	strict: debug,
	state: {
		//data 不允许直接修改
		mobile: (document.hasOwnProperty("ontouchstart")), //判断
		//用户名
		user: "dc-qiu",
		//
		userPic: "/src/assets/img/group.png",
		nowPath: null,
		navs: [
		{
			title: "侧边导航",
			icon: "el-icon-document",
			childs: [{
				title: "导航1",
				icon: "el-icon-document",
				path: '/main/child'
			}]
		}, {
			title: "选项卡",
			childs: [{
				title: "导航2",
				icon: "el-icon-document",
				path: '/main/pages'
			}]
		}
		]
	},
	getters: {
		//计算属性

	},
	mutations: {
		//事件 function(state,data) 调用 store.commit([name],data)
		setNowPath(state, value) {
			//当前路径
			return(state.nowPath = value)
		}

	},
	actions: {
		//异步 提交 mutations 例function(content){context.commit('function')} 触发store.dispatch('function')
	}

})