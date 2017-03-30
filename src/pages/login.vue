<template>
  <section class="page">
    <el-form class="login-box"
             :model="loginForm"
             :rules="rules"
             ref="loginForm">
      <h1 class="text-center form-item login-title">{{ title }}</h1>
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
                   @click="submitForm('loginForm')">提交</el-button>
      </el-form-item>
      <el-form-item>
        <el-button class="btn-lg"
                   @click="resetForm('loginForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </section>
</template>
<script>
var rules = {
  user: [
    //为空提示
    { required: true, message: '请输入活动名称', trigger: 'blur' },
    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
  ],
  pw: [
    { required: true, message: '密码不能为空', trigger: ' blur' },
    { min: 6, message: '密码最小6位数', trigger: 'blur ' }
  ]
}
export default {
  data() {
    //获得标题
    let title = this.$store.state.title || null
    title = title + '登录'
    //设置标题
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
  methods: {
    resetForm(formName) {

      //验证
      this.$refs[formName].resetFields();
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  }
}
</script>

<style lang="sass">
@import "~./assets/css/_common.scss"; 
.login-box {
  width: 310px;
  .form-item {
    margin-top: 15px;
  }
  left: 0;
  right:0;
  @include pos-mid();
  border:1px solid #ccc;
  padding: 15px;
  padding-bottom: 20px;
  border-radius: $ibr;
  .login-title {
    padding: 15px 0;
    background: $nbg;
    color: $nc;
  }
}
</style>