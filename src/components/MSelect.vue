<!--兼容手机pc select 单选-->
<template>
    <select v-if="native"
            :placeholder="placeholder"
            :value="value"
            @change="handleInput">
        <option value="">
            {{placeholder}}
        </option>
        <option v-for="item of options"
                :key='item.id'
                :value="item.value">{{item.label?item.label:item.value}}</option>
    </select>
    <!--兼容-->
    <el-select v-else
               :value="value"
               :placeholder="placeholder"
               @input="handleSelect">
        <el-option v-for="item in options"
                   :key="item.id"
                   :label="item.label?item.label:item.value"
                   :value="item.value">
        </el-option>
    </el-select>
</template>
<script>
export default {
    props: {
        //是否使用原生
        native: Boolean,
        //获得值v-model
        value: {
            default: ""
        },
        options: {
            required: true,
            type: Array,
            validator: function (value) {
                return typeof value == 'object'
            }
        },
        //站位
        placeholder: {
            default: "请选择"
        },
        name: String,
        disabled: {
            default: !!0
        }

    },
    methods: {
        handleInput(e) {
            var value = e.target.value;
            //调用 
            this.$emit('input', value);
        },
        handleSelect(v) {

            this.$emit('input', v);
        }
    }
}
</script>