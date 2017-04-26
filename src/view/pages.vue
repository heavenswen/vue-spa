<template>
  <div class='demo'>
    <h3 class="text-center">vue dom 操作</h3>
    <p>default:{{num}}}</p>
    <input type="text"
           v-model="num">
  </div>
</template>
<script>

export default {
  watch: {
    num(v) {
      console.log(v)
    }
  },
  created() {
    console.log("created")

    //钩子 dom init end
    this.$nextTick(() => {
      document.querySelector(".demo p").innerHTML = 'created';
    })
  },
  mounted() {
    console.log("mounted")
    this.$nextTick(() => {
      document.querySelector(".demo p").innerHTML = 'mounted';
    })
  },
  data() {
    return { num: 111 }
  }
}
</script>