<template lang="html">
    <section>
        <div id="toolbar">
  <button class="ql-bold">Bold</button>
  <button class="ql-italic">Italic</button>
  <button class="ql-image">Image</button>
</div>
        <div id="editor">
        <p>{{content}}</p>
        </div>
        <p>
        show:
        {{content}}
        </p>
    </section>

</template>

<script>
import Quill from 'quill';
import "quill/dist/quill.snow.css"
export default {
    data() {
        return {
            content: "hello quill",
            value: ''
        }
    },
    mounted() {
        //直接初始化dom 原生调用
        this.$nextTick(() => {
            let that = this
            this.quill = new Quill('#editor', {
                modules: { toolbar: '#toolbar' },
                placeholder: 'Compose an epic...',
                theme: 'snow'
            });
            //quilll api
            this.quill.on('text-change', function (delta, oldDelta, source) {

                //dom content
                let val = document.querySelector("#editor .ql-editor").innerHTML
                that.content = val

                if (source == 'api') {
                    //api
                    console.log(delta);
                } else if (source == 'user') {
                    //用户输入
                    let val = that.quill.getContents();//json delta数据
                    that.value = val
                }

            });
        })


    },
    methods: {
        log() {
            console.log(this.quill)
        }
    }
};
</script>
<style lang='sass'>
#editor{
    height:300px;
}
</style>
