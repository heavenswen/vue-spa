<template>
    <div class="echarts"
         :style="'min-width:'+minW+'px'">
        <IEcharts :option="bar"
                  :loading="loading"
                  @ready="onReady"
                  @click="onClick"></IEcharts>
        <!--<button @click="doRandom">Random</button>-->
    </div>
</template>

<script type="text/babel">  
//import IEcharts from 'vue-echarts-v3';
//手动引入 减小体积
import IEcharts from 'vue-echarts-v3/src/lite.vue';
//chart view
import 'echarts/lib/chart/bar';
//title view
import 'echarts/lib/component/title';

const windowW = window.innerWidth
export default {
    name: 'view',
    components: {
        IEcharts
    },
    props: {
    },
    data: () => ({
        loading: true,
        minW: windowW,
        bar: {
            title: {
                text: 'ECharts Hello World'
            },
            tooltip: {},
            xAxis: {
                data: ['Shirt', 'Sweater', 'Chiffon Shirt', 'Pants', 'High Heels', 'Socks']
            },
            yAxis: {},
            series: [{
                name: 'Sales',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        }
    }),
    methods: {
        doRandom() {
            const that = this;
            let data = [];
            for (let i = 0, min = 5, max = 99; i < 6; i++) {
                data.push(Math.floor(Math.random() * (max + 1 - min) + min));
            }
            that.loading = !that.loading;
            that.bar.series[0].data = data;
        },
        onReady(instance) {
            var that = this;
            console.log(instance);
            setTimeout(that.doRandom, 1500)
        },
        onClick(event, instance, echarts) {
            console.log(arguments);
        }
    }
};
</script>

<style  lang='sass' >
.echarts {
    height: 100%;

}
</style>