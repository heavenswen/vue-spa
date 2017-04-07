<!-- 
el-form
model:设置对应formData
rules:设置规则组对应formData formName
ref：用于调用$refs其子集方法
-->
<template>
    <el-form :model="formData"
             :rules="rules"
             ref="formData"
             label-width="100px">
        <el-form-item label="用户名"
                      prop='user'>
            <el-input v-model="formData.user"
                      placeholder="请输入用户名"
                      :minlength='6'
                      :maxlength='10' />
        </el-form-item>
        <el-form-item label="密码"
                      prop="pass">
            <el-input type="password"
                      v-model="formData.pw"
                      auto-complete="off"
                      placeholder="密码至少为6位"></el-input>
        </el-form-item>
        <el-form-item label="确认密码"
                      prop="checkPass">
            <el-input type="password"
                      v-model="formData.checkPass"
                      auto-complete="off"
                      placeholder="请再次输入密码"></el-input>
        </el-form-item>
        <!--<el-form-item label="电话号码">
                                                                                    <el-input v-model="formData.phone"
                                                                                              placeholder="请输入用户名" />
                                                                                </el-form-item>
                                                                                <el-form-item label="电子邮箱">
                                                                                    <el-input v-model="formData.mail"
                                                                                              placeholder="请输入用户名" />
                                                                                </el-form-item>
                                                                                <el-form-item label="性别">
                                                                                    <m-select v-model="formData.sex"
                                                                                              :native='mobile'
                                                                                              :options="[{value:'1',label:'男'},{value:'2',label:'女'},{value:'0',label:'保密'}]" />
                                                                                </el-form-item>
                                                                                <el-form-item label="生日">
                                                                                    <m-input :native='mobile'
                                                                                             v-model="formData.bday"
                                                                                             placeholder='请输入您的生日'></m-input>
                                                                                </el-form-item>
                                                                                <el-form-item label='兴趣爱好'>
                                                                                    <el-checkbox-group v-model="formData.Interest">
                                                                                        <el-checkbox label="美食/餐厅线上活动"
                                                                                                     name="type"></el-checkbox>
                                                                                        <el-checkbox label="地推活动"
                                                                                                     name="type"></el-checkbox>
                                                                                        <el-checkbox label="线下主题活动"
                                                                                                     name="type"></el-checkbox>
                                                                                        <el-checkbox label="单纯品牌曝光"
                                                                                                     name="type"></el-checkbox>
                                                                                    </el-checkbox-group>
                                                                                </el-form-item>
                                                                                <el-form-item label="特殊资源"
                                                                                              prop="work">
                                                                                    <el-radio-group v-model="formData.work">
                                                                                        <el-radio label="互联网类"></el-radio>
                                                                                        <el-radio label="金融行业"></el-radio>
                                                                                        <el-radio label="教育相关"></el-radio>
                                                                                        <el-radio label="运动体育"></el-radio>
                                                                                        
                                                                                    </el-radio-group>
                                                                                </el-form-item>-->
        <div class="text-center">
            <el-button type="primary"
                       @click="submitForm('formData')">提 交</el-button>
        </div>
    </el-form>
</template>
<script>
import MSelect from "../components/MSelect.vue"
import MInput from "../components/MInput.vue"
export default {
    data() {
        
        let validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                if (this.formData.checkPass !== '') {
                    //对比再次输入
                    this.$refs.formData.validateField('checkPass');
                }
                callback();
            }
        };
        let validatePass2 = (rule, value, callback) => {
            let that = this
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== this.formData.pw) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };

        //data
        var formData = {
            user: '',
            pw: '',
            checkPass: ''
        };

        //规则
        var rules = {
            user: [
                { required: true, message: '请输入用户名', trigger: 'blur' },
                { min: 4, max: 10, message: '长度在 3 到 5 个字符', trigger: 'blur' }
            ],
            pass: [
                { required: true, message: '请输入密码', trigger: 'blur' }, ,
                { validator: validatePass, trigger: 'blur' }
            ],
            checkPass: [
                { validator: validatePass2, trigger: 'blur' }
            ],
        }


        return {
            mobile: this.$store.state.mobile,
            formData,
            rules,
        };
    },
    methods: {
        //formname is ref
        submitForm(formName) {
            let that = this
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    //匹配成功
                    //请求
                    let method = "get"
                    //数据
                    let datas = that.formData
                    //链接
                    let url = "https://api.imjad.cn/cloudmusic/?type=search&s=%E5%91%A8%E6%9D%B0%E4%BC%A6"
                    //从根急检索 获得方法级
                    let tip = that.$root.$children[0].$refs['mark']
                    //成功
                    function success(json) {
                        //tip.tip({title:"提交成功",icon:"el-icon-check"})
                    }
                    //失败
                    function error(e) {
                        console.error(`error${e}`)
                    }
                    //执行获取数据
                    for (let i = 0; i < 50; i++) {
                        tip.ajax({
                            method, url, data: datas, success, error
                        });
                    }
                    // tip.ajax({
                    //     method, url, data: datas, success, error
                    // });


                } else {
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    },
    components: { MSelect, MInput }
}

</script>