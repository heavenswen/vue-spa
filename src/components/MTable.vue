<template>
    <el-table :data="data"
              border
              style="width:"
              :default-sort="{prop: 'date', order: 'descending'}">
        <el-table-column  prop="date"
                         label="日期"
                         sortable
                         width="120">
        </el-table-column>
    </el-table>
</template>

<script>
export default {
    data() {
        const w = document.querySelector(".main-right").outerWidth();
        console.log(w)


    },
    props: {
        columns: {
            type: Array,
            required: true
        },
        data: {
            type: Array,
            required: true
        }

    },
    methods: {

    }
}
</script>