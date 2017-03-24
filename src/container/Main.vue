<template>
	<div class="container">
		<img :src="img" />
		<ul class="side">
			<li v-for='( item , index ) in nav' >
				<v-link :href="index">{{ item }}</v-link>
			</li>
		</ul>
		<slot></slot>
	</div>
</template>

<script>
	import VLink from '../components/VLink.vue'
	import VForm from "../components/VForm.vue"
	import img from "../assets/img/logo.png"
	
	export default {
		data(){
			let pages = this.$store.state.nav
			return {nav:pages,img:img}
		},
		components: {VLink,VForm}
		
	}
</script>

<style lang = "sass">
	$border:1px;
	
	.container {
		max-width: 600px;
		margin: 0 auto;
		padding: 15px 30px;
		background:url(../assets/img/girl2.jpg);
		border:$border solid #ccc;
	}
</style>