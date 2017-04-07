<!--兼容手机日期选择-->
<template>
    <input :type="type"
           v-if="native&&nativeType[type]"
           :placeholder="placeholder"
           :value="value"
           :disabled="disabled"
           :name="name"
           @input="handleInput"
           @change="handleInput" />
    <!--兼容-->
    <el-date-picker v-else
                    :value="value"
                    :type="type"
                    :placeholder="placeholder"
                    :disabled="disabled"
                    :name="name"
                    @input="handleSelect">
    </el-date-picker>
</template>
<script>
//对应的原生类
let nativeType = {
    date: "date",
    month: "month",
    week: "week",
    datetime: "datetime-local",
}
export default {
    props: {
        //类型
        type: {
            type: String,
            validator(val) {
                let t = nativeType[val]
                if (!t) {
                    let str = JSON.stringify(nativeType)
                    console.warn(`Optional  type has ${str}`)
                }
                return val
            }
        },
        //是否使用原生
        native: Boolean,
        //获得值v-model
        value: {
            default: ""
        },
        name: String,
        disabled: {
            default: !!0
        },
        //站位
        placeholder: {
            default: "请输入"
        },

    },
    data() {
        let that = this;
        return {
            nativeType,
        }
    },
    methods: {
        handleInput(event) {
            //调用父组件的input 事件
            let that = this
            let value = event.target.value;
            this.$emit('input', value);
        },
        handleSelect(v) {
            //调用父组件的input 事件
            let reg = /w/i
            let that = this
            //2017-04-06T11:12
            //el  to  h5 
            if (v && this.type.match(/week/i)) {
                v = v.replace(reg, '-W')
            } else if (v && this.type.match(/month/i)) {
                let y = v.getFullYear()
                let m = v.getMonth() + 1
                v = `${y}-${m < 10 ? ('0' + m) : m}`
            } else if (v && this.type.match(/year/i)) {
                let y = v.getFullYear()
                v = y
            }

            this.$emit('input', v);
        }

    }
}
</script>