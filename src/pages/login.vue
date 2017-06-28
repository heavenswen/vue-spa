<template>
  <section class="page">
    <div class="login-box">
      <h1 class="text-center form-item login-title">{{ title }}</h1>
      <el-form class="login-form"
               :model="loginForm"
               :rules="rules"
               ref="loginForm">
  
        <el-form-item class="form-item"
                      prop="user">
          <el-input type="text"
                    placeholder="请输入用户名"
                    v-model="loginForm.user" />
        </el-form-item>
        <el-form-item class="form-item"
                      prop="pw">
          <el-input type="text"
                    placeholder="请输入用户名"
                    v-model="loginForm.pw" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary"
                     class="btn-lg"
                     v-keyupEnter
                     @click="submitForm('loginForm')">提交</el-button>
        </el-form-item>
        <el-form-item>
          <el-button class="btn-lg"
                     @click="resetForm('loginForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </section>
</template>
<script>
//验证
var rules = {
  user: [
    //为空提示
    { required: true, message: '请输入用户名', trigger: 'blur' },
  ],
  pw: [
    { required: true, message: '密码不能为空', trigger: ' blur' },
    { min: 6, message: '密码最小6位数', trigger: 'blur ' }
  ]
}
export default {
  data() {
    //get user title
    let title = this.$store.state.title || null
    title = title + '登录'
    //set window's title
    document.title = title
    return {
      title,
      loginForm: {
        user: '',
        pw: ''
      },
      rules

    }
  },
  directives: {
    //自定义指令
    keyupEnter: {
      inserted: (el, binding, vnode) => {
        // 回车触发按钮
        document.addEventListener("keyup", (e) => {
          if (e.keyCode == 13) {
            el.click();

          }
        }, false)

      }
    }
  },

  methods: {
    resetForm(formName) {
      //验证  this.$refs[formName] 子组件实例
      this.$refs[formName].resetFields();
    },
    submitForm(formName) {
      let that = this
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //匹配成功
          //请求
          let method = "get"
          let datas = that.loginForm
          let user = datas.user
          let pw = datas.pw
          //数据
          let data = { user, pw }
          //链接
          let url = "https://api.imjad.cn/cloudmusic/?type=search&s=%E5%91%A8%E6%9D%B0%E4%BC%A6"
          //成功
          function success(json) {
             that.$parent.$refs['mark'].tip({
               title:"登录成功!",
               icon:"el-icon-circle-check",
               success(){
                 //跳转
                  that.$router.push("/main");
               }
             })
          }
          //失败
          function error(e) {
            console.error(`error${e}`)
          }
          //执行获取数据
          that.$parent.$refs['mark'].ajax({ method, url, data, success, error });

        } else {
          //验证失败
          return false;
        }
      });
    }
  }
}
</script>

<style lang="sass">
@import "~../assets/css/_common.scss"; 

.login-box{
  width: 100%;
  border-radius: 5px;
  box-shadow:0px 1px 5px 3px rgba(0,0,0,0.1);
  border:1px solid $bcolor;
 .login-title {
    padding: 20px 0;
    background: $nbg;
    color: $nc;
  }
}
.login-form {
  width: 100%;
  padding: 15px;
  padding-bottom: 20px;
  background:$cbg;
  .form-item {
    margin-top: 15px;
  }
}
@include min-media($sm+px) {
  .login-box{
    width:350px;
      left: 0;
  right:0;
  @include position-mid();
  
    }
}
</style>