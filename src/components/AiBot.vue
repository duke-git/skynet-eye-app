<template>
    <el-popover placement="top-start" title="点击试试AI助手哦😄" :width="200" trigger="hover" content="">
        <template #reference>
            <img src="@/assets/images/ai_bot_button.png" @click="drawer = true" class="ai-bot-button" />
        </template>
    </el-popover>

    <el-drawer v-model="drawer" title="" direction="rtl" :with-header="false" size="40%">
        <iframe src="http://36.103.167.61:7860/" frameborder="0" style="width: 100%; height: 700px;"></iframe>
    </el-drawer>
</template>

<script setup>
import { ref } from 'vue';

const drawer = ref(false);

</script>

<style lang="scss" scoped>
.ai-bot-button {
    width: 50px;
    height: 50px;
    cursor: pointer;
    position: fixed;
    bottom: 10%;
    right: 2%;
    box-shadow: 0 0 10px #808389;
    border-radius: 50%;
    z-index: 1000;
}
</style>
