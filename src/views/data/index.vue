<template>
    <div>
        <div class="content-container">
            <span class="content-title">行业热词</span>
            <el-button type="primary" style="float: right;display: inline-block;" @click="goHomePage()">
                返回首页<el-icon class="el-icon--right">
                    <HomeFilled />
                </el-icon>
            </el-button>
            <el-row :gutter="10">
                <el-col :span="24">
                    <div class="search-content">
                        <span class="search-item">
                            <label>热词: </label>
                            <el-select v-model="searchObj.hotword" style="width: 140px;">
                                <el-option label="云计算" value="1" />
                                <el-option label="云存储" value="2" />
                            </el-select>
                        </span>
                    </div>
                </el-col>
            </el-row>
            <el-row :gutter="8">
                <el-col :span="24">
                    <el-card :body-style="{ padding: '14px' }">
                        <span style="font-size: 18px;">关联词云</span>
                        <div id="ciyun-chart"></div>
                    </el-card>
                </el-col>
            </el-row>
            <el-row :gutter="10">
                <el-col :span="24">
                    <el-card :body-style="{ padding: '14px' }">
                        <span style="font-size: 18px;">云计算热度趋势图</span>
                        <div id="line-chart"></div>
                    </el-card>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script setup name="data">
import { ref, onMounted, reactive } from 'vue';
import { useRouter } from "vue-router";

import * as echarts from 'echarts/core';
import "echarts-wordcloud";
import {
    GridComponent,
    TooltipComponent,
    ToolboxComponent,
    LegendComponent,
    DataZoomComponent
} from 'echarts/components';

import { LineChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

import { getIndustryData } from "@/api/api";


echarts.use([
    GridComponent,
    LineChart,
    CanvasRenderer,
    TooltipComponent,
    ToolboxComponent,
    LegendComponent,
    DataZoomComponent
]);


import { HomeFilled } from '@element-plus/icons-vue';
import { appWindow } from '@tauri-apps/api/window';

const router = useRouter();

let searchObj = ref({
    date: "",
    hotword: "1",
    platform: "1",
});

import imageData from './image.js';

let maskImage = new Image();
maskImage.src = imageData;

const initCiYunChart = () => {
    let ciyunChart = echarts.init(document.getElementById("ciyun-chart"))
    let chartOption = {
        series: [{
            type: 'wordCloud',   //类型
            width: '100%',  //宽度
            height: '100%', //高度
            shape: 'circle',
            keepAspect: false,
            sizeRange: [16, 70],     //字体大小范围
            rotationRange: [-90, 90],
            left: 'center',
            top: 'center',
            right: null,
            bottom: null,
            rotationStep: 45,
            gridSize: 8,
            maskImage: maskImage,

            textStyle: {                  //随机获取样式
                fontFamily: 'sans-serif',
                fontWeight: 'bold',
                color: function () {
                    // Random color
                    return 'rgb(' + [
                        Math.round(Math.random() * 200),
                        Math.round(Math.random() * 200),
                        Math.round(Math.random() * 200)
                    ].join(',') + ')';
                }
            },
            emphasis: {    //获得焦点时的样式
                focus: 'self',
                textStyle: {
                    textShadowBlur: 10,
                    textShadowColor: '#333'
                }
            },

            // 数据必须是一个数组，数组是对象，对象必须有name和value属性
            data: [],
        }]
    };

    maskImage.onload = function () {
        getIndustryData().then((res) => {
            if (res.code == 200) {
                let words = [];
                for (let i = 0; i < 100; i++) {
                    words.push(res.data[i]);
                };
                chartOption.series[0].data = words;
                ciyunChart.setOption(chartOption);
            }
        });
    }

}

const initLineChart = () => {
    let lineChart = echarts.init(document.getElementById("line-chart"))

    let chartOption = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            data: ['百度指数']
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ['2023-10-15', '2023-10-16', '2023-10-17', '2023-10-18', '2023-10-19', '2023-10-20', '2023-10-21']
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: '百度指数',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [120, 132, 101, 134, 90, 230, 210]
            },
        ]
    };

    lineChart.setOption(chartOption);
}

const goHomePage = async () => {
    router.push('/news');
    await appWindow.setFullscreen(false);
};

const fullScreen = async () => {
    await appWindow.setFullscreen(true);
};


onMounted(() => {
    initCiYunChart();
    initLineChart();
    fullScreen();
});


</script>

<style lang="scss" scoped>
.content-container {
    box-sizing: border-box;
    padding: 10px;
    overflow-x: hidden;
    background-color: #e6f1fe;
    border: 1px solid #e0e0e0;
    border-radius: 6px;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.05);

    .content-title {
        font-size: 18px;
    }
}

.el-card {
    background: #c6e2ff;
}

.el-row {
    padding: 10px;
}

.search-content {
    .search-item {
        font-size: 14px;
        color: #303133;
        margin-right: 40px;
    }
}

#ciyun-chart {
    height: 400px;
    width: 600px;
    margin: 0 auto;
}

#line-chart {
    height: 300px;
    width: 100%;
}
</style>
