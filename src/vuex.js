import Vue from 'vue' //vue
import Vuex from 'vuex'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
	strict: debug,
	state: {
		//data 不允许直接修改
		mobile:(document.hasOwnProperty("ontouchstart")),//判断
		logo:"/src/assets/img/logo.png",//set logo
		title:"DC",
		user:"dc-qiu",
		userPic:"/src/assets/img/group.png"
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