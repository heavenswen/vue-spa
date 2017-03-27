<template>
	<div class="page">
		<!--头部-->
		<main-nav></main-nav>
		<!--菜单-->
		<main-side></main-side>
		<!--内容块-->
		<main-layout></main-layout>
	</div>
</template>

<script>
	import MainLayout from '../container/Main.vue'
	import MainNav from '../container/Nav.vue'
	import MainSide from '../container/side.vue'

	export default {
		components: { MainLayout, MainNav,MainSide }
	}
</script>