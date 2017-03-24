<template>
	<div class="container">
		<v-form>aaaa</v-form>
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
	export default {
		data(){
			let pages = this.$store.state.nav
			return {nav:pages}
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
		background: #f9f7f5;
		border:$border solid #ccc;
	}
</style>