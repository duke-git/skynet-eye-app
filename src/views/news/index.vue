<template>
    <div class="page-container">
        <div class="title-content">
            <span class="page-title">行业新闻</span>
            <el-button :icon="Headset" type="primary" style="float: right;" @click="playVideo()">语音播放</el-button>
        </div>

        <div class="news-continer">
            <el-row :gutter="10">
                <el-col :span="12">
                    <el-row :gutter="10">
                        <el-col :span="24">
                            <el-card :body-style="{ padding: '14px' }">
                                <div class="news-content">
                                    <el-link type="primary" :href="newsItem1.url" target="_blank" class="title">{{
                                        newsItem1.title
                                    }}</el-link>
                                    <div class="key-word" v-if="newsItem1.keyword">
                                        <span v-for="item in newsItem1.keyword.split('，')">{{ "#" + item + " " }}</span>
                                    </div>
                                    <img :src="newsItem1.imageUrl" align="left"
                                        style="width: 200px;height: 200px;margin-right: 10px;" />
                                    <span class="summary">{{ newsItem1.summary }}</span>
                                </div>
                            </el-card>
                        </el-col>
                    </el-row>
                    <el-row :gutter="10">
                        <el-col :span="24">
                            <el-card :body-style="{ padding: '14px' }" style="margin-top: 10px;">
                                <div class="news-content">
                                    <el-link type="primary" :href="newsItem9.url" target="_blank" class="title">{{
                                        newsItem9.title
                                    }}</el-link>
                                    <div class="key-word" v-if="newsItem9.keyword">
                                        <span v-for="item in newsItem9.keyword.split('，')">{{ "#" + item + " " }}</span>
                                    </div>
                                    <img :src="newsItem9.imageUrl" align="left"
                                        style="width: 200px;height: 200px;margin-right: 10px;" />
                                    <span class="summary">{{ newsItem9.summary }}</span>
                                </div>
                            </el-card>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :span="6">
                    <el-card :body-style="{ padding: '14px' }">
                        <div class="news-content">
                            <el-link type="primary" :href="newsItem2.url" class="title" target="_blank">{{ newsItem2.title
                            }}</el-link>
                            <div class="key-word" v-if="newsItem2.keyword">
                                <span v-for="item in newsItem2.keyword.split('，')">{{ "#" + item + " " }}</span>
                            </div>
                            <img :src="newsItem2.imageUrl" align="left" class="news-image" />
                            <span class="summary">{{ newsItem2.summary }}</span>
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="6">
                    <el-row :gutter="10">
                        <el-col>
                            <el-card :body-style="{ padding: '14px' }">
                                <div class="news-content">
                                    <el-link type="primary" :href="newsItem3.url" class="title" target="_blank">{{
                                        newsItem3.title
                                    }}</el-link>
                                    <div class="key-word" v-if="newsItem3.keyword">
                                        <span v-for="item in newsItem3.keyword.split('，')">{{ "#" + item + " " }}</span>
                                    </div>
                                    <img :src="newsItem3.imageUrl" align="left" class="news-image" />
                                    <span class="summary">{{ newsItem3.summary }}</span>
                                </div>
                            </el-card>
                        </el-col>
                    </el-row>
                    <el-row :gutter="10">
                        <el-col>
                            <el-card :body-style="{ padding: '14px' }" style="margin-top: 10px;">
                                <div class="news-content">
                                    <el-link type="primary" :href="newsItem4.url" class="title" target="_blank">{{
                                        newsItem4.title
                                    }}</el-link>
                                    <div class="key-word" v-if="newsItem4.keyword">
                                        <span v-for="item in newsItem4.keyword.split('，')">{{ "#" + item + " " }}</span>
                                    </div>
                                    <img :src="newsItem4.imageUrl" align="left" class="news-image" />
                                    <span class="summary">{{ newsItem4.summary.substring(0, 100) }}</span>
                                </div>
                            </el-card>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>

            <el-row :gutter="10">
                <el-col :span="6">
                    <el-card :body-style="{ padding: '14px' }" style="margin-top: 10px;">
                        <div class="news-content">
                            <el-link type="primary" :href="newsItem5.url" class="title" target="_blank">{{ newsItem5.title
                            }}</el-link>
                            <div class="key-word" v-if="newsItem5.keyword">
                                <span v-for="item in newsItem5.keyword.split('，')">{{ "#" + item + " " }}</span>
                            </div>
                            <img :src="newsItem5.imageUrl" align="left" class="news-image" />
                            <span class="summary">{{ newsItem5.summary }}</span>
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="6">
                    <el-card :body-style="{ padding: '14px' }" style="margin-top: 10px;">
                        <div class="news-content">
                            <el-link type="primary" :href="newsItem6.url" class="title" target="_blank">{{ newsItem6.title
                            }}</el-link>
                            <div class="key-word" v-if="newsItem6.keyword">
                                <span v-for="item in newsItem6.keyword.split('，')">{{ "#" + item + " " }}</span>
                            </div>
                            <img :src="newsItem6.imageUrl" align="left" class="news-image" />
                            <span class="summary">{{ newsItem6.summary }}</span>
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="6">
                    <el-card :body-style="{ padding: '14px' }" style="margin-top: 10px;">
                        <div class="news-content">
                            <el-link type="primary" :href="newsItem7.url" class="title" target="_blank">{{ newsItem7.title
                            }}</el-link>
                            <div class="key-word" v-if="newsItem7.keyword">
                                <span v-for="item in newsItem7.keyword.split('，')">{{ "#" + item + " " }}</span>
                            </div>
                            <img :src="newsItem7.imageUrl" align="left" class="news-image" />
                            <span class="summary">{{ newsItem8.summary }}</span>
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="6">
                    <el-card :body-style="{ padding: '14px' }" style="margin-top: 10px;">
                        <div class="news-content">
                            <el-link type="primary" :href="newsItem8.url" class="title" target="_blank">{{ newsItem8.title
                            }}</el-link>
                            <div class="key-word" v-if="newsItem8.keyword">
                                <span v-for="item in newsItem8.keyword.split('，')">{{ "#" + item + " " }}</span>
                            </div>
                            <img :src="newsItem8.imageUrl" align="left" class="news-image" />
                            <span class="summary">{{ newsItem8.summary }}</span>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
        </div>
        <div class="tag-container">
            <span class="tag-title">我的关注</span>
            <div style="padding: 10px;">
                <span v-for="tag in tags">
                    <span v-if="tag.names.length != 0" v-for="name in tag.names.split(',')" :key="name">
                        <el-tag v-if="name" :key="name" class="mx-1" closable size="large" :disable-transitions="false"
                            @close="handleTagDelete(tag.id, name)">
                            {{ name }}
                        </el-tag>
                    </span>
                </span>
                <el-button type="primary" plain :icon="Setting" @click="opensSetTagDialog">设置</el-button>
            </div>
        </div>

        <div class="tag-container" ref="player">
            <span class="tag-title">新闻音频播放</span>
            <br />
            <span class="audio-title">{{ currentAudioName }}</span>
            <AudioPlayer ref="audioPlayer" :audio-list="audioList.map(elm => elm.url)" theme-color="#5c5e64"
                :before-play="handleBeforePlay" />
        </div>

        <el-dialog v-model="setTagDialog" title="设置关键词">
            <el-form :model="tag" label-width="120px">
                <el-form-item label="关注厂商: ">
                    <el-select v-model="tag.company">
                        <el-option label="阿里云" value="阿里云" />
                        <el-option label="华为云" value="华为云" />
                        <el-option label="华为云" value="华为云" />
                        <el-option label="华为云" value="华为云" />
                        <el-option label="AWS" value="AWS" />
                    </el-select>
                </el-form-item>
                <el-form-item label="关注产品: ">
                    <el-select v-model="tag.product">
                        <el-option label="云计算" value="云计算" />
                        <el-option label="云存储" value="云存储" />
                        <el-option label="云网络" value="云网络" />
                        <el-option label="人工智能" value="人工智能" />
                        <el-option label="容器" value="容器" />
                    </el-select>
                </el-form-item>
                <el-form-item label="关注产品: ">
                    <el-input v-model="tag.names" type="textarea" style="width: 300px;" placeholder="多个关键词用逗号分隔" />
                </el-form-item>
            </el-form>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="setTagDialog = false">取消</el-button>
                    <el-button type="primary" @click="setTag">
                        确定
                    </el-button>
                </span>
            </template>
        </el-dialog>
        <AiBot />
    </div>
</template>

<script setup name="news">
import { ref, onMounted } from 'vue';

import { Headset, Setting } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus';
import AudioPlayer from '@liripeng/vue-audio-player';

import AiBot from "@/components/AiBot.vue";

import { getNewsList, getNewsTag, setNewsTag, deleteNewsTag } from "@/api/api";

let newsItem1 = ref({ summary: "" });
let newsItem2 = ref({ summary: "" });
let newsItem3 = ref({ summary: "" });
let newsItem4 = ref({ summary: "" });
let newsItem5 = ref({ summary: "" });
let newsItem6 = ref({ summary: "" });
let newsItem7 = ref({ summary: "" });
let newsItem8 = ref({ summary: "" });
let newsItem9 = ref({ summary: "" });

let tags = ref([
    { id: "xx", names: 'tag1' },
]);

let audioList = ref([]);

const getNewsData = () => {
    getNewsList().then((res) => {
        if (res.code == 200) {
            let data = res.data;
            newsItem1.value = data[0];
            newsItem2.value = data[1];
            newsItem3.value = data[2];
            newsItem4.value = data[3];
            newsItem5.value = data[4];
            newsItem6.value = data[5];
            newsItem7.value = data[6];
            newsItem8.value = data[7];
            newsItem9.value = data[8];

            let videos = [];
            data.forEach((item) => {
                videos.push({
                    name: item.title,
                    url: item.ks3Url
                })
            });

            audioList.value = videos;
        }
    });
    getNewsTag().then((res) => {
        if (res.code == 200) {
            tags.value = res.data;
        }
    });
};

onMounted(() => {
    getNewsData();
});


let setTagDialog = ref(false);
let tag = ref({
    company: '',
    product: '',
    names: [],
})

const handleTagDelete = (tagId, name) => {
    deleteNewsTag({
        id: tagId,
        names: name
    }).then((res) => {
        if (res.code == 200) {
            ElMessage({
                message: '删除成功',
                type: 'success',
            });
            getNewsTag().then((res1) => {
                if (res1.code == 200) {
                    tags.value = res1.data;
                }
            });
        }
    });
}

const opensSetTagDialog = () => {
    setTagDialog.value = true;
};

const setTag = () => {
    let data = tag.value
    setNewsTag(data).then((res) => {
        if (res.code == 200) {
            ElMessage({
                message: '设置成功',
                type: 'success',
            });
            setTagDialog.value = false;
            getNewsData();
        }
    });
};

const audioPlayer = ref(null);
const player = ref(null);

let currentAudioName = ref('');
const handleBeforePlay = (next) => {
    currentAudioName.value = audioList.value[audioPlayer.value.currentPlayIndex].name;
    next()
}
const playVideo = () => {
    player.value.scrollIntoView({ behavior: 'smooth' });
    audioPlayer.value.play();
}

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
