<template>
	<section>
		<transition name="slide" mode="out-in">
			<router-view class="container"></router-view>
		</transition>
		<slot></slot>
	</section>
</template>

<script>
	export default {

	}
</script>

<style lang="sass">

</style>