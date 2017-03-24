<!--链接跳转-->
<template>
  <a
    v-bind:href="href"
    v-bind:class="{ active: isActive }"
    v-on:click="go"
  >
    <slot></slot>
  </a>
</template>

<script>
  export default {
    props: {
      href: String,
      required: true
    },
    computed: {
      isActive () {
        return this.href === this.$store.state.currentRoute
      }
    },
    methods: {
      go (event) {
        event.preventDefault()
        //设置当前地址
        this.$store.commit("setCurrentRoute",this.href)
        window.history.pushState(
          null,
          this.$store.state.nav[this.href],
          this.href
        )
      }
    }
  }
</script>

<style scoped>
  .active {
    color: red;
  }
</style>
