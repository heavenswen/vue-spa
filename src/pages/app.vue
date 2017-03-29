<template>
	<div id="app">
		<transition name="load" mode="out-in" appear>
			<router-view></router-view>
		</transition>
	</div>
</template>

<style lang="sass">
	.load-enter-active,
	.load-leave-active {
		transition: all .3;
	}
	
	.load-enter {
		position: absolute;
		opacity: 0;
		background: #000;
	}
	
	.load-enter-to {
		opacity: 1;
		background-color: #f2f2f2;
	}
</style>

<script>
	export default {
	}
</script>