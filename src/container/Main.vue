<template>
	<div class="container">
		<transition name="slide">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
	export default {

		
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