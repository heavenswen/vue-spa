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
  data() {
    //数据
    return { num: 111 }
  },
  watch: {
    //监测
    num(v) {
      console.log(v)
    }
  },
  created() {
    //实例已经创建完成之后被调用
    console.log("created")

    //钩子 dom init end
    this.$nextTick(() => {
      document.querySelector(".demo p").innerHTML = 'created';
    })
  },
  mounted() {
    //el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子
    console.log("mounted")
    this.$nextTick(() => {
      document.querySelector(".demo p").innerHTML = 'mounted';
    })
  },
  
}
</script>