
<template>
    <transition name="show"
                mode="out-in">
        <div v-if="display"
             class="mark"
             @click="hide">
            <div class="block">
                <i :class="icon"></i> {{content}}
            </div>
        </div>
    </transition>
</template>
<script>
import Axios from "axios"
//var icon_default = "el-icon-loading"
var tipTime;//时间er
export default {
    props: {
        title: {
            type: String,
            default: "加载中...",
        },
        iconClass: {
            type: String,
            default: "el-icon-loading",
        }
    },
    data() {
        let display = 0
        let content = this.title
        let icon = this.iconClass
        return { display, content, icon }

    },
    methods: {
        show(title = this.title, icon = this.iconClass) {
            //显示提示
            this.display = 1
            //设置标题
            this.content = title
            //设置iconClass
            this.icon = icon
        },
        hide() {
            //隐藏提示
            this.display = 0
        },
        ajax({ method = 'get', url, data = {}, success, error }) {
            //网络请求
            let that = this;
            that.show();//显示加载状态
            //get数据
            if (method != 'post') data = { params: data };

            Axios[method](url, data).then(function (response) {
                //成功回调
                that.hide();//隐藏层

                if (success) success(response)//执行回调

            }).catch(function (response) {
                that.hide();//隐藏层

                if (error) error(response);//执行错误
            })

        },
        tip({ title = this.title, icon = iconClass, time = 1000, success  }) {
            //执行一个提示效果 
            let that = this;
            if (tipTime) clearTimeout(tipTime)
            that.show(title, icon);
            tipTime = setTimeout(() => {
                that.hide();
                if(success)success()
            }, time)
        }
    }
}
</script>
<style lang='sass'>
@import "~../assets/css/_common.scss";   

.mark{
    position:fixed;
    left:0;
    top:0;
    width:100%;
    height:100%;
    z-index:9;
    >.block{
        width:100px;
        height:100px;
        background-color:rgba(255,255,255,0.3);
        border:1px solid #ccc;
        border-radius:5px;
        @include pos-auto();
        padding:10px;
        text-align:center;
        i{
            font-size:20px;
            margin:10px auto ;
            display:block;
        }
    }
}
</style>