<template>
	<div class="page">
		<!--头部-->
		<main-nav class="nav-top"
		          :user="user"
		          :pic="pic"
				  :display="display"
				  ></main-nav>
		<!--菜单-->
		<main-side :display="display"
		           class="side-left"
		           :navs="navs"
		           ref='side'></main-side>
		<!--内容块-->
		<main-layout :class="display?'main-right':'main-right active' "></main-layout>
	</div>
</template>

<script>
import MainLayout from '../container/Main.vue'
import MainNav from '../container/Nav.vue'
import MainSide from '../container/side.vue'

export default {
	data() {
		//侧边栏菜单
		let navs = this.$store.state.navs;
		//if it is mobile , it does not show
		let display = (!this.$store.state.mobile)

		return {
			user: this.$store.state.user,
			pic: this.$store.state.userPic,
			navs: navs,
			//get window‘s url path
			path: this.$store.state.nowPath,
			display
		}
	},
	methods: {
		sideToggle() {
			//side show or hide
			let display = this.display 
			this.display = !display;
		}
	},
	components: {
		MainLayout,
		MainNav,
		MainSide
	}
}
</script>