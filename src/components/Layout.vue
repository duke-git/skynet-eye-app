<!-- 纵向布局 -->
<template>
    <el-container class="layout">
        <el-aside style="width:210px">
            <div class="aside-box" style="width:210px">
                <div class="logo flx-center">
                    <img class="logo-img" src="@/assets/images/app_logo.png" alt="logo" />
                    <span class="logo-text">天网战略眼</span>
                </div>
                <el-scrollbar>
                    <el-menu :router="false" :default-active="activeMenu" :collapse-transition="false">
                        <Menu :menu-list="menuList" />
                    </el-menu>
                </el-scrollbar>
            </div>
        </el-aside>
        <el-container>
            <el-header>
                <Header />
            </el-header>
            <el-main>
                <router-view v-slot="{ Component, route }">
                    <transition appear name="fade-transform" mode="out-in">
                        <keep-alive>
                            <component :is="Component" :key="route.fullPath" />
                        </keep-alive>
                    </transition>
                </router-view>
            </el-main>
            <el-footer>
                <div class="footer flx-center">
                    <span> 天网战略眼 2023 © By 金山云 Kingcoder team. </span>
                </div>
            </el-footer>
        </el-container>
    </el-container>
</template>

<script setup name="layout">

import { reactive, computed } from "vue";
import { useRoute } from "vue-router";
import Menu from "@/components/Menu.vue";
import Header from "@/components/Header.vue";

const route = useRoute();
const activeMenu = computed(() => (route.meta.activeMenu ? route.meta.activeMenu : route.path));

console.log(route.meta.keepAlive);

const menuList = reactive([
    {
        component: "/news/index",
        meta: {
            "icon": "DataLine",
            "title": "今日新闻",
        },
        name: "news",
        path: "/news",
    },
    {
        component: "/policy/index",
        meta: {
            "icon": "DocumentCopy",
            "title": "政策收集",
        },
        name: "policy",
        path: "/policy",
    },
    {
        component: "/competitor/index",
        meta: {
            "icon": "Edit",
            "title": "竞品追踪",
        },
        name: "competitor",
        path: "/competitor",
    },
    {
        component: "/data/index",
        meta: {
            "icon": "Picture",
            "title": "行业数据",
        },
        name: "data",
        path: "/data",
    },
]);

</script>

<style scoped lang="scss">
.layout {
    min-width: 600px;
}

.el-container {
    width: 100%;
    height: 100%;

    :deep(.el-aside) {
        width: auto;
        background-color: #fff;
        // border-right: 1px solid #e4e7ed;

        .aside-box {
            display: flex;
            flex-direction: column;
            height: 100%;
            transition: width 0.3s ease;

            .el-scrollbar {
                height: calc(100% - 55px);

                .el-menu {
                    width: 100%;
                    overflow-x: hidden;
                    border-right: none;
                }
            }

            .logo {
                box-sizing: border-box;
                height: 50px;
                border-right: 1px solid #e4e7ed;
                border-top: 1px solid #e4e7ed;

                .logo-img {
                    width: 50px;
                    height: 40px;
                    margin-right: 6px;
                    vertical-align: text-bottom;
                }

                .logo-text {
                    font-size: 24px;
                    color: #303133;
                    font-weight: bold;
                }
            }
        }
    }

    .el-header {
        box-sizing: border-box;
        height: 50px;
        line-height: 50px;
        background-color: #fff;
        border-bottom: 1px solid #e4e7ed;
        border-top: 1px solid #e4e7ed;
    }

    .el-main {
        box-sizing: border-box;
        padding: 10px 12px;
        overflow-x: hidden;
        background-color: var(--el-bg-color-page);
        height: calc(100vh - 6rem);
    }

    .el-footer {
        height: auto;
        padding: 0;
    }

    .footer {
        height: 30px;
        background-color: var(--el-bg-color);
        border-top: 1px solid var(--el-border-color-light);
        text-align: center;

        span {
            font-size: 14px;
            color: var(--el-text-color-secondary);
            text-decoration: none;
            letter-spacing: 0.5px;
        }
    }
}
</style>

