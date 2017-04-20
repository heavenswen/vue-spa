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
                      prop="pw">
            <el-input type="password"
                      v-model="formData.pw"
                      :maxlength="16"
                      auto-complete="off"
                      placeholder="密码至少为6位"></el-input>
        </el-form-item>
        <el-form-item label="确认密码"
                      prop="checkPass">
            <el-input type="password"
                      v-model="formData.checkPass"
                      auto-complete="on"
                      placeholder="请再次输入密码"></el-input>
        </el-form-item>
        <el-form-item label='电子邮箱'
                      prop='mail'>
            <el-input type="text"
                      v-model="formData.mail"
                      auto-complete="on"
                      placeholder="请输入邮箱地址" />
        </el-form-item>
        <el-form-item label='生日'
                      prop='day'>
            <m-input style='width:100%'
                     type='date'
                     v-model="formData.day"
                     :native='mobile'
                     placeholder="生日" />
        </el-form-item>
        <el-form-item label="兴趣爱好"
                      prop='checkbox'>
            <el-checkbox-group v-model='formData.checkbox'>
                <el-checkbox v-for='item of checkboxs'
                             :key="item.id"
                             :label="item.value"
                             name="type"
                             :disabled="item.disabled"></el-checkbox>
            </el-checkbox-group>
        </el-form-item>
        <el-form-item label='性别'>
            <el-radio-group v-model='formData.sex'>
                <el-radio v-for="item of ['男','女','保密']"
                          :key="item.id"
                          :label="item"
                          name="sex"
                          :disabled="item.disabled" />
            </el-radio-group>
        </el-form-item>
        <el-form-item label='下拉选框'>
            <m-select style='width:100%'
                      :native='mobile'
                      :options="[{value:'选项'},{value:'长选项1234567891011121314151617181920'},{value:'选项3'},{value:'选项4'},{value:'选项5'}]"></m-select>
        </el-form-item>
        <el-form-item v-for="(item, index) of formData.describe"
                      :label="'描述'+(index?index:'')">
            <el-input type='textarea'
                      v-model="item.value"
                      placeholder="请输入" />
            <div v-if="index>=1">
    
                <el-button type='warning'
                           size='mini'
                           @click='inputDelete(item)'>删除</el-button>
            </div>
        </el-form-item>
        <el-form-item>
            <el-button @click="addDom">新增描述</el-button>
        </el-form-item>
        <div class="text-center">
            <el-button type="primary"
                       @click="submitForm('formData')">提 交</el-button>
            <el-button @click="resetForm('formData')">重置</el-button>
        </div>
    </el-form>
</template>
<script>
import MSelect from "../components/MSelect.vue"
import MInput from "../components/MInput.vue"
export default {
    data() {
        //自定义验证规则
        let validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                if (this.formData.checkPass !== '') {
                    //对比再次输入
                    //触发单项验证
                    this.$refs.formData.validateField('checkPass');
                }
                callback();
            }
        };

        let validatePass2 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== this.formData.pw) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };
        //最多两项
        let checkboxMax = (rule, value, callback) => {
            let objstring = rule.field//对象
            let objs = this.checkboxs//checkbox data 
            let checkeds = this.formData[objstring]//checkeds
            let max = 2 //checked max 
            if (value.length >= max) {
                objs.map(val => {
                    for (let item of checkeds) {
                        if (val.value == item) {
                            val.disabled = false
                            break
                        } else {
                            val.disabled = true
                        }
                    }

                })
                callback();
            } else {
                //back init
                objs.map(val => {
                    val.disabled = false
                })
                callback();
            }

        }


        //data
        var formData = {
            user: '',
            pw: '',
            checkPass: '',
            mail: '',
            day: '',
            checkbox: [],
            sex: '保密',
            select: '',
            describe: [{value:""}]
        };
        //规则
        var rules = {
            //trigger 触发规则 默认 输入 
            user: [
                { required: true, message: '请输入用户名' },
                { min: 4, max: 10, message: '长度在 3 到 5 个字符' }
            ],
            pw: [
                { required: true, message: '请输入密码' },
                { min: 6, message: '长度最少6个字符' },
                { validator: validatePass }//验证再次输入
            ],
            checkPass: [
                //再次输入
                { validator: validatePass2 }
            ],
            mail: [
                //邮箱
                { required: true, message: '请输入邮箱地址' },
                { type: 'email', message: '邮箱地址错误' },//类型验证
            ],
            checkbox: [
                //多选
                { validator: checkboxMax, }
            ]

        }
        /*
        type:
        string: Must be of type string. This is the default type.
        number: Must be of type number.
        boolean: Must be of type boolean.
        method: Must be of type function.
        regexp: 正则.
        integer:整数.
        float: Must be of type number and a floating point number.
        array: Must be an array as determined by Array.isArray.
        object: Must be of type object and not Array.isArray.
        enum:  价值必须存在于枚举.
        date: Value must be valid as determined by Date
        url: Must be of type url.
        hex: 十六进制.
        email: Must be of type email.
        
        */

        return {
            mobile: this.$store.state.mobile,
            formData,
            rules,
            //多项选择
            checkboxs: [{ value: "户外体育", disabled: false }, { value: "室内健身", disabled: false }, { value: "户外活动", disabled: false }, { value: "饮食观光", disabled: false }, { value: "电脑游戏", disabled: false }, { value: "电脑游戏1", disabled: false }, { value: "电脑游戏2", disabled: false }]
        };
    },
    methods: {
        addDom() {
            //添加描述demo
            let data = this.formData.describe.push({value:'',id:new Date()})
        },
        inputDelete(item) {
            let o = this.formData.describe
            let index = o.indexOf(item)
            if (index !== -1) {
                o.splice(index, 1)
            }
        },
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
            //重置表单
            this.$refs[formName].resetFields();
        }
    },
    components: { MSelect, MInput }
}

</script>
<style lang='sass'>
.el-form-item .el-checkbox+.el-checkbox{
    margin-left:0 ;
    margin-right:15px;
}
.el-form-item .el-checkbox{
    margin-right:15px;
}
</style>