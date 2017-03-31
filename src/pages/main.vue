<template>
	<div class="page">
		<!--头部-->
		<main-nav class="nav-top"
		          :user="user"
		          :pic="pic"></main-nav>
		<!--菜单-->
		<main-side class="side-left"
		           :navs="navs"
		           ref='side'></main-side>
		<!--内容块-->
		<main-layout class="main-right"></main-layout>
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
		return {
			user: this.$store.state.user,
			pic: this.$store.state.userPic,
			navs: navs,
			path: this.$store.state.nowPath//获得props path

		}

	},
	components: {
		MainLayout,
		MainNav,
		MainSide
	}
}
</script>