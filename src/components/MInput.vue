<!-- native:调用原生-->
<template>
    <input :type="nativeType[type]?nativeType[type]:type"
           v-if="native"
           :placeholder="placeholder"
           :value="val"
           @input="handleInput"
           @change="handleInput" />
    <!--兼容-->
    <el-date-picker v-else
                    v-model="val"
                    :type="type"
                    :placeholder="placeholder">
    </el-date-picker>
</template>
<script>
//对应的原生类
let nativeType = {
    datetime: "datetime-local",
}
export default {
    props: {
        //类型
        type: String,
        //是否使用原生
        native: Boolean,
        //获得值v-model
        value: String,
        //站位
        placeholder: {
            default: "请输入"
        },

    },
    data() {
        let that = this;
        return {
            nativeType,
            val: this.value
        }
    },
    methods: {
        handleInput(event) {
            var value = event.target.value;
            this.$emit('input', value);
        }

    }
}
</script>