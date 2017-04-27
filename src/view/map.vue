<template >
    <el-amap vid="amapDemo"
             :zoom="15">
        <el-amap vid="amapDemo">
        </el-amap>
    </el-amap>
</template>

<script>
import Vue from "vue"
import AMap from 'vue-amap'
Vue.use(AMap);

// 初始化vue-amap
AMap.initAMapApiLoader({
    // 高德的key
    key: 'YOUR_KEY',
    // 插件集合
    plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
});

export default {
    data() {
        return {}
    },
    mounted() {

    },
};
</script>

<style lang="css">
#amap-cointainer {
    height: 400px;
}
</style>
