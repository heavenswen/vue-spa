<template>
	<div id="app">
		<transition name="load"
		            mode="out-in"
		            appear>
			<router-view></router-view>
		</transition>
		<v-mark ref="mark" />
	</div>
</template>
<script>
//tip+axios
import VMark from "../components/VMark.vue"
export default {
	components: { VMark }
}
</script>
