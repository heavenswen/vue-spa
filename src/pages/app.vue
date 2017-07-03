// 底层
<template>
	<div id="app">
		<!--内容过渡层-->
		<transition name="load"
		            mode="out-in"
		            appear>
			<router-view ref="con"></router-view>
		</transition>
		<!--加载提示层-->
		<v-mark ref="mark" ></v-mark>
	</div>
</template>
<script>

//tip+axios

import Axios from "axios"
import VMark from "../components/VMark.vue"
export default {
	created(){
		console.log(this)


	},
	methods(){
		//底层方法

	},
	components: { VMark }
}
</script>
