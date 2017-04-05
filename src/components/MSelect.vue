<!-- native:调用原生-->
<template>
    <select v-if="native"
            :placeholder="placeholder"
            :value="val"
            @change="handleInput">
        <option v-for="item of options"
                :key='item.id'
                :value="item.value">{{item.label?item.label:item.value}}</option>
    </select>
    <!--兼容-->
    <el-date-picker v-else
                    v-model="val"
                    :placeholder="placeholder">
    </el-date-picker>
</template>
<script>
export default {
    props: {
        //是否使用原生
        native: Boolean,
        //获得值v-model
        value: String,
        options: Array,
        //站位
        placeholder: {
            default: "请选择"
        },

    },
    data() {
        let that = this;
        return {
            val: this.value
        }
    },
    methods: {
        handleInput(event) {
            var value = event.target.value;
            console.log(value)
            this.$emit('select', value);
        }

    }
}
</script>