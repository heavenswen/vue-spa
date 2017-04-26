<template>
    <div class="amap-page-container">
        <el-amap :vid="vid"
                 :zoom="zoom"
                 :center="center">
        </el-amap>
    </div>
</template>
<script>
import Vue from 'vue'
import AMap from 'vue-amap';
Vue.use(AMap);
AMap.initAMapApiLoader({
    // 高德的key
    key: 'YOUR_KEY',
    // 插件集合
    plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
});
export default {
    name: 'amap-page',
    data: function () {
        return {
            vid: 'amap-vue-1',
            zoom: 12,
            center: [121.59996, 31.197646],
            plugin: ['ToolBar', {
                pName: 'MapType',
                defaultType: 0,
                events: {
                    init(o) {
                        console.log(o);
                    }
                }
            }],
            markers: [
                [121.59996, 31.197646],
                [121.40018, 31.197622],
                [121.69991, 31.207649]]
        };
    },
};
</script>