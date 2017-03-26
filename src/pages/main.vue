<template>
  <main-layout>
  	<transition name="slide">
			<router-view></router-view>
		</transition>
  </main-layout>
</template>

<script>
	import MainSide from '../container/side.vue'
	import MainNav from '../container/nav.vue'
  import MainLayout from '../container/Main.vue'

  export default {
    components: {
      MainLayout
    }
  }
</script>
