<template>
	<div class="nav">
		<h1>234</h1>
		<slot></slot>
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
		background: #f9f7f5;
		border:$border solid #ccc;
	}
</style>