<template>
    <div>
        <h3 class="text-center">基于 quill 富文本</h3>
        <vue-editor id="editor1"
                    v-model="content">
        </vue-editor>
        {{content}}
    </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'

export default {
    components: {
        VueEditor
    },

    data() {
        return {
            content: '<h1>Editor 1 Starting Content</h1>',
        }
    }
}
</script>
