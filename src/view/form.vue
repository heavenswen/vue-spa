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
        <el-form-item label="下拉选择框">{{ ruleForm.select }}</el-form-item>
        <el-form-item label="下拉选择框">
            <m-select :options="options"
                      v-model="ruleForm.select"
                      :native="mobile" />
        </el-form-item>
        <el-form-item label="下拉选择框">
            <m-select :options="options"
                      v-model="ruleForm.select"
                      :native="!mobile" />
        </el-form-item>
    
        <el-form-item label="时间选择宽"> {{ ruleForm.date }}</el-form-item>
        <el-form-item label="日期选择器">
            <m-input :type="ruleForm.select"
                     :native="mobile"
                     v-model="ruleForm.date"></m-input>
        </el-form-item>
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
            options: [
                { value: 'text', label: "文本" },
                { value: 'date' },
                { value: 'datetime' },
                { value: 'month' },
                { value: 'week' },
                { value: "year" },
            ],
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