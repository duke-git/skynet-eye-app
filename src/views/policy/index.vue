<template>
    <div class="page-container">
        <div class="title-content">
            <span class="page-title">政策收集</span>
        </div>
        <div class="policy-content">
            <div class="search-content" style="">
                <span class="search-item">
                    <label>关键词: </label>
                    <el-input v-model="searchObj.keyword" style="width: 300px;" placeholder="试试搜索: 信创"
                        @change="getPolicy()" />
                </span>
                <span class="search-item">
                    <label>时间: </label>
                    <el-date-picker v-model="searchObj.date" type="daterange" range-separator="至" start-placeholder="开始日期"
                        end-placeholder="结束日期" style="width: 240px;vertical-align: middle;" format="YYYY-MM-DD"
                        value-format="YYYY-MM-DD" @change="getPolicy()" />
                </span>
            </div>
            <el-table :data="policyData" stripe style="width: 100%">
                <el-table-column prop="date" label="时间" width="140" />
                <el-table-column prop="department" label="颁布单位" width="220" />
                <el-table-column prop="title" label="政策标题" width="220">
                    <template #default="scope">
                        <el-link type="primary" :href="scope.row.url" target="_blank">{{ scope.row.title }}</el-link>
                    </template>
                </el-table-column>
                <el-table-column prop="summary" label="总结" />
            </el-table>
        </div>
        <AiBot />
    </div>
</template>

<script setup name="news">
import { ref, onMounted } from 'vue';

import AiBot from "@/components/AiBot.vue";

import { getPolicyData } from "@/api/api";


const policyData = ref([
    {
        id: '1',
        date: '',
        department: '',
        title: '',
        summary: '',
    },
]);

let searchObj = ref({
    keyword: "",
    date: ""
})

const getPolicy = () => {
    let param = {};

    if (searchObj.value.keyword) {
        param.keyword = searchObj.value.keyword;
    }

    if (searchObj.value.date) {
        param.start_date = searchObj.value.date[0];
        param.end_date = searchObj.value.date[1];
    }

    getPolicyData(param).then((res) => {
        if (res.code == 200) {
            policyData.value = res.data;
        }
    });
};

onMounted(() => {
    getPolicy();
});

</script>

<style lang="scss" scoped>
.page-title {
    font-size: 20px;
    color: #303133;
}

.policy-content {
    margin-top: 10px;
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
</style>

