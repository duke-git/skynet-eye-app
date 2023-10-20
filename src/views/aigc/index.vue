<template>
    <div class="page-container">
        <div class="title-content">
            <span class="page-title">AIGC专区</span>
        </div>

        <div class="news-continer">
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
                    <el-row :gutter="10">
                        <el-col :span="6" v-for="item in newsData">
                            <el-card :body-style="{ padding: '14px' }" style="margin-top: 10px;">
                                <div class="news-content">
                                    <el-link type="primary" :href="item.url" class="title" target="_blank">{{ item.title
                                    }}</el-link>
                                    <div class="key-word" v-if="item.keyword">
                                        <span v-for="word in item.keyword.split('，')">{{ "#" + word + " " }}</span>
                                    </div>
                                    <img :src="item.imageUrl" align="left" class="news-image" />
                                    <span class="summary">{{ item.summary }}</span>
                                </div>
                            </el-card>
                        </el-col>
                    </el-row>
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
                    学术成果
                </el-tab-pane>
            </el-tabs>

        </div>
        <AiBot />
    </div>
</template>

<script setup name="news">
import { ref, onMounted } from 'vue';

import { Headset, Setting } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus';

import AiBot from "@/components/AiBot.vue";

import { getNewsList } from "@/api/api";


let newsData = ref([
    { summary: "" }
]);

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

.news-continer {
    margin-top: 20px;

    .el-card {
        height: 100%;
    }

    .news-image {
        width: 150px;
        height: 150px;
        margin-right: 10px;
    }

    .news-content {
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

.tag-container {
    margin-top: 20px;
    background: #f2f3f5;
    padding: 10px;

    .tag-title {
        font-size: 18px;
        color: #303133;
    }

    .tag-div {
        font-size: 16px;
        color: #303133;
        margin: 10px 0;
    }

    .audio-title {
        font-size: 16px;
        color: #635e5e;
        margin-left: 20px;
    }
}

.mx-1 {
    margin-left: 0.25rem;
    margin-right: 0.25rem;
}

.player-container {
    margin-top: 10px;
    padding: 20px;
}
</style>
