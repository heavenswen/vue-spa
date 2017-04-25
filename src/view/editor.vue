<template>
    <vue-editor id="editor1"
                v-model="editor1Content">
    </vue-editor>
</template>

<script>
import { VueEditor } from 'vue2-editor'

export default {
    components: {
        VueEditor
    },

    data() {
        return {
            editor1Content: '<h1>Editor 1 Starting Content</h1>',
        }
    }
}
</script>
