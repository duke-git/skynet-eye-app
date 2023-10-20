<template>
    <div class="page-container">
        <div class="title-content">
            <span class="page-title">AIGC专区</span>
        </div>

        <div class="agic-continer">
            <el-tabs type="border-card" class="demo-tabs">
                <el-tab-pane>
                    <template #label>
                        <span class="custom-tabs-label">
                            <el-icon style="margin-right:4px; vertical-align: middle;">
                                <Document />
                            </el-icon>
                            <span style="vertical-align: middle;">前沿新闻</span>
                        </span>
                    </template>
                    <div style="margin-top: 20px;">
                        <el-row :gutter="10">
                            <el-col :span="6" v-for="item in newsData">
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
                        <div class="search-content" style="">
                            <span class="search-item">
                                <label>关键词: </label>
                                <el-input v-model="searchObj.keyword" style="width: 300px;"
                                    placeholder="查询AIGC相关论文，试试搜索: 云计算" @change="getPolicy()" />
                            </span>
                        </div>
                        <el-table :data="policyData" stripe style="width: 100%">
                            <el-table-column prop="date" label="时间" width="140" />
                            <el-table-column prop="title" label="标题" width="220">
                                <template #default="scope">
                                    <el-link type="primary" :href="scope.row.url" target="_blank">{{ scope.row.title
                                    }}</el-link>
                                </template>
                            </el-table-column>
                            <el-table-column prop="author" label="论文作者" width="220" />
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

import { Headset, Setting } from '@element-plus/icons-vue'


import AiBot from "@/components/AiBot.vue";

import { getNewsList } from "@/api/api";


let newsData = ref([
    { summary: "" }
]);

let searchObj = ref({
    keyword: "",
});

const getNewsData = () => {
    getNewsList().then((res) => {
        if (res.code == 200) {
            let data = [];
            for (let i = 0; i < 12; i++) {
                data.push(res.data[i]);
            }
            newsData.value = data;
        }
    });

};

onMounted(() => {
    getNewsData();
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

.xueshu-content {
    margin-top: 10px;
    padding: 20px;

    .search-content {
        margin-bottom: 10px;

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
