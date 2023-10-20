<template>
    <div class="page-container">
        <div class="title-content">
            <span class="page-title">AIGC专区</span>
        </div>
        <div class="agic-continer">
            <el-tabs type="border-card" @tab-change="changeTab">
                <el-tab-pane>
                    <template #label>
                        <span class=" custom-tabs-label">
                            <el-icon style="margin-right:4px; vertical-align: middle;">
                                <Document />
                            </el-icon>
                            <span style="vertical-align: middle;">前沿新闻</span>
                        </span>
                    </template>
                    <div style="padding: 20px;">
                        <div class="search-content">
                            <span class="search-item">
                                <label>关键词: </label>
                                <el-input v-model="searchObj.keyword1" style="width: 300px;"
                                    placeholder="查询AIGC相关新闻消息，试试搜索: 训练效率" @change="getFrontierNewsData" />
                            </span>
                        </div>
                        <el-row :gutter="10">
                            <el-col :span="6" v-for="item in frontierNews">
                                <el-card :body-style="{ padding: '14px' }" style="margin-bottom: 20px;">
                                    <div class="agic-content">
                                        <el-link type="primary" :href="item.url" class="title" target="_blank">{{ item.title
                                        }}</el-link>
                                        <div class="key-word" v-if="item.keyword">
                                            <span v-for="word in item.keyword.split('，')">{{ "#" + word + " " }}</span>
                                        </div>
                                        <img :src="item.imageUrl" align="left" class="agic-image" />
                                        <span class="summary">{{ item.summary }}</span>
                                    </div>
                                </el-card>
                            </el-col>
                        </el-row>
                    </div>
                </el-tab-pane>

                <el-tab-pane label="学术成果">
                    <template #label>
                        <span class="custom-tabs-label">
                            <el-icon style="margin-right:4px; vertical-align: middle;">
                                <DocumentCopy />
                            </el-icon>
                            <span style="vertical-align: middle;">学术成果</span>
                        </span>
                    </template>
                    <div class="xueshu-content">
                        <div class="search-content">
                            <span class="search-item">
                                <label>关键词: </label>
                                <el-input v-model="searchObj.keyword2" style="width: 300px;"
                                    placeholder="查询AIGC相关论文，试试搜索: 生成模型" @change="getLearningData" />
                            </span>
                        </div>
                        <el-table :data="learningOutcomes" stripe style="width: 100%">
                            <el-table-column prop="date" label="时间" width="140" />
                            <el-table-column prop="title" label="标题" width="220">
                                <template #default="scope">
                                    <el-link type="primary" :href="scope.row.url" target="_blank">{{ scope.row.title
                                    }}</el-link>
                                </template>
                            </el-table-column>
                            <el-table-column prop="author" label="论文作者" width="220" />
                            <el-table-column prop="keyword" label="关键词" width="220" />
                            <el-table-column prop="summary" label="论文总结" />
                        </el-table>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>
        <AiBot />
    </div>
</template>

<script setup name="news">

import { ref, onMounted } from 'vue';

import AiBot from "@/components/AiBot.vue";

import { getFrontierNews, getLearningOutcomes } from "@/api/api";


let frontierNews = ref([
    { summary: "" }
]);

let learningOutcomes = ref([]);

let searchObj = ref({
    keyword1: "",
    keyword2: "",
});

const getFrontierNewsData = () => {
    let param = {};

    if (searchObj.value.keyword1) {
        param.keyword = searchObj.value.keyword1;
    }

    getFrontierNews(param).then((res) => {
        if (res.code == 200) {
            frontierNews.value = res.data;
        }
    });
};

const getLearningData = () => {
    let param = {};

    if (searchObj.value.keyword2) {
        param.keyword = searchObj.value.keyword2;
    }

    getLearningOutcomes(param).then((res) => {
        if (res.code == 200) {
            learningOutcomes.value = res.data;
        }
    });
};

const changeTab = (val) => {
    if (val == "0") {
        searchObj.value.keyword1 = "";
        getFrontierNewsData();
    }
    if (val == "1") {
        searchObj.value.keyword2 = "";
        getLearningData();
    }
};

onMounted(() => {
    getFrontierNewsData();
});


</script>

<style lang="scss" scoped>
.page-title {
    font-size: 20px;
    color: #303133;
}

.agic-continer {
    margin-top: 20px;

    .el-card {
        height: 100%;

    }

    .el-col {
        margin-bottom: 10px;
    }

    .agic-image {
        width: 150px;
        height: 150px;
        margin-right: 10px;
    }

    .agic-content {
        margin-left: 14px;

        .title {
            font-size: 17px;
        }

        .key-word {
            font-size: 15px;
            margin: 10px 0;
            color: #434446;
        }

        .summary {
            font-size: 14px;
            color: #606266;
            padding: 0 10px;
        }
    }
}

.search-content {
    margin-bottom: 20px;

    .search-item {
        font-size: 14px;
        color: #303133;
        margin-right: 40px;
    }
}

.xueshu-content {
    padding: 20px;

    .search-content {
        margin-bottom: 20px;

        .search-item {
            font-size: 14px;
            color: #303133;
            margin-right: 40px;
        }
    }
}

.mx-1 {
    margin-left: 0.25rem;
    margin-right: 0.25rem;
}
</style>
