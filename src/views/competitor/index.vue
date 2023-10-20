<template>
    <div class="page-container">
        <div class="title-content">
            <span class="page-title">竞品追踪</span>
        </div>
        <div class="competitor-content">
            <div class="search-content">
                <span class="search-item">
                    <label>时间: </label>
                    <el-date-picker v-model="searchObj.date" type="daterange" range-separator="至" start-placeholder="开始日期"
                        style="width: 240px;vertical-align: middle;" end-placeholder="结束日期" format="YYYY-MM-DD"
                        value-format="YYYY-MM-DD" />
                </span>
                <span class="search-item">
                    <label>关注厂商: </label>
                    <el-select v-model="searchObj.company" style="width: 120px;">
                        <el-option label="全部" value="" />
                        <el-option label="阿里云" value="阿里云" />
                        <el-option label="腾讯云" value="腾讯云" />
                        <el-option label="华为云" value="华为云" />
                        <el-option label="天翼云" value="天翼云" />
                        <el-option label="AWS" value="AWS" />
                        <el-option label="Azure" value="Azure" />
                        <el-option label="百度智能云" value="百度智能云" />
                    </el-select>
                </span>
                <span class="search-item">
                    <label>关注产品: </label>
                    <el-select v-model="searchObj.product" style="width: 130px;">
                        <el-option label="计算" value="1计算" />
                        <el-option label="存储" value="存储" />
                        <el-option label="网络" value="网络" />
                        <el-option label="数据库" value="数据库" />
                        <el-option label="容器与中间件" value="容器与中间件" />
                        <el-option label="安全" value="安全" />
                        <el-option label="边缘云" value="边缘云" />
                        <el-option label="视频云" value="视频云" />
                        <el-option label="大数据" value="大数据" />
                        <el-option label="人工智能与算法" value="人工智能与算法" />
                        <el-option label="企业应用" value="企业应用" />
                    </el-select>
                </span>
                <el-button type="primary" @click="getCompetitor()">查询</el-button>
            </div>

            <div class="timeline-content">
                <el-timeline>
                    <el-timeline-item v-for="(item, index) in competitorData" :key="index" type="primary" size="large"
                        :hollow="true" :timestamp="item.date" placement="bottom">
                        <div>
                            <el-link type="primary" :href="item.url" target="_blank" class="competitor-title">
                                {{ item.title }}
                            </el-link>
                            <span class="competitor-name">{{ "#" + item.department }}</span>
                            <div class="competitor-summary">
                                {{ item.summary }}
                            </div>
                        </div>
                    </el-timeline-item>
                </el-timeline>
            </div>
        </div>
        <AiBot />
    </div>
</template>

<script setup name="news">

// import 'dayjs/locale/zh-cn';

import { ref, onMounted } from 'vue';

import { getCompetitorData } from "@/api/api";
import AiBot from "@/components/AiBot.vue";

const competitorData = ref([]);

let searchObj = ref({
    date: "",
    company: "",
    product: ""
});


const getCompetitor = () => {
    let param = {};

    if (searchObj.value.role) {
        param.role = searchObj.value.role;
    }

    if (searchObj.value.company) {
        param.company = searchObj.value.company;
    }

    if (searchObj.value.product) {
        param.product = searchObj.value.product;
    }

    if (searchObj.value.date) {
        param.start_date = searchObj.value.date[0];
        param.end_date = searchObj.value.date[1];
    }

    getCompetitorData(param).then((res) => {
        if (res.code == 200) {
            competitorData.value = res.data;
        }
    });
};

onMounted(() => {
    getCompetitor();
});

</script>

<style lang="scss" scoped>
.page-title {
    font-size: 20px;
    color: #303133;
}

.competitor-content {
    margin-top: 10px;
    padding: 20px;

    .search-content {
        margin-bottom: 20px;

        .search-item {
            font-size: 14px;
            color: #303133;
            margin-right: 20px;
        }
    }

    .timeline-content {
        margin-top: 40px;

        .competitor-title {
            font-size: 15px;
            display: inline-block;
            margin-bottom: 4px;
        }

        .competitor-name {
            color: #606266;
            margin-left: 20px;
        }

        .competitor-summary {
            background: #f2f3f5;
            margin-top: 4px;
            line-height: 22px;
        }
    }

}
</style>

