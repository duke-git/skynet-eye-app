<template>
    <div class="tool-bar-ri">
        <div class="fullscreen">
            <img src="@/assets/images/fangda.png" v-if="!isFullscreen" @click="handleFullScreen" class="fullscreen-icon" />
            <img src="@/assets/images/suoxiao.png" v-if="isFullscreen" @click="handleFullScreen" class="fullscreen-icon" />
        </div>

        <span class="username">{{ username }}</span>

        <el-dropdown trigger="click">
            <div class="avatar">
                <img src="@/assets/images/avatar.gif" alt="avatar" />
            </div>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item divided @click="logout">
                        <el-icon>
                            <SwitchButton />
                        </el-icon>{{ "退出登陆" }}
                    </el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

import { ElMessageBox, ElMessage } from "element-plus";
// import screenfull from "screenfull";

import { appWindow } from '@tauri-apps/api/window';

const isFullscreen = ref(false);

let username = ref("");

const router = useRouter();

onMounted(() => {
    username.value = localStorage.getItem("username");
    // screenfull.on("change", () => {
    //     if (screenfull.isFullscreen) isFullscreen.value = true;
    //     else isFullscreen.value = false;
    // });
});

const handleFullScreen = async () => {
    try {
        if (isFullscreen.value) {
            await appWindow.setFullscreen(false);
            isFullscreen.value = false;
        } else {
            await appWindow.setFullscreen(true);
            isFullscreen.value = true;
        }
    } catch (err) {
        console.error(err);
    }
    // if (!screenfull.isEnabled) ElMessage.warning("当前您的浏览器不支持全屏 ❌");
    // screenfull.toggle();
};


const logout = () => {
    ElMessageBox.confirm("您是否确认退出登录?", "温馨提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
    }).then(async () => {
        localStorage.setItem("token", "");
        localStorage.setItem("username", "");

        router.replace("/login");
        ElMessage.success("退出登录成功！");
    });
};



</script>

<style lang="scss" scoped>
.tool-bar-ri {
    display: flex;
    align-items: center;
    justify-content: center;
    // padding-right: 25px;
    float: right;

    .fullscreen-icon {
        width: 24px;
        height: 24px;
        cursor: pointer;
        vertical-align: middle;
    }

    .username {
        margin: 0 20px;
        font-size: 15px;
    }

    .avatar {
        width: 40px;
        height: 40px;
        overflow: hidden;
        cursor: pointer;
        border-radius: 50%;

        img {
            width: 100%;
            height: 100%;
        }
    }
}
</style>