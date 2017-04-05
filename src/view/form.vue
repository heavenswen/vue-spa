<!-- 
el-form
model:设置对应formData
rules:设置规则组对应formData formName
ref：用于调用$refs其子集方法
-->
<template>
    <el-form :model="ruleForm"
             :rules="rules"
             ref="ruleForm"
             class="demo-ruleForm"
             label-width="100px">
        <el-form-item label="下拉选择框">
            <m-select :options="[{value:'date'},{value:'datetime'},{value:'month'},{value:'week'},{value:'time'},{value:'datetime-local'}]"
                      v-model="ruleForm.select"
                      :native="mobile" />
        </el-form-item>
        <el-form-item> {{ ruleForm.select }}</el-form-item>
        <el-form-item label="日期选择器">
            <m-input :type="ruleForm.select"
                     :native="mobile"
                     v-model="ruleForm.date"></m-input>
        </el-form-item>
        <el-form-item> {{ ruleForm.date }}</el-form-item>
        <el-form-item label="日期选择器">
            <m-input :type="ruleForm.select"
                     :native="!mobile"
                     v-model="ruleForm.date"></m-input>
        </el-form-item>
    </el-form>
</template>
<script>
import MSelect from "../components/MSelect.vue"
import MInput from "../components/MInput.vue"

var ruleForm = {
    select: '',
    date: "2016-01-02"

}
//规则
var rules = {
    select: [
        { required: true, message: '请输入活动名称', trigger: 'blur' },
        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
    ],
}
export default {
    data() {
        return {
            mobile: this.$store.state.mobile,
            ruleForm,
            rules,
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
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