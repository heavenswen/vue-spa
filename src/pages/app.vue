<template>
	<div id="app"
	     ref="all">
		<transition name="load"
		            mode="out-in"
		            appear>
			<router-view></router-view>
		</transition>
	</div>
</template>
<script>
export default {
	methods: {
		ajax() {
			console.log(ajax);
		}
	},
}
</script>