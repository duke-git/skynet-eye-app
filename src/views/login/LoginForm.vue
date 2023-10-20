<template>
    <el-form ref="loginFormRef" :model="loginForm" :rules="loginRules" size="large">
        <el-form-item prop="username">
            <el-input v-model="loginForm.username" placeholder="用户名: ksc">
                <template #prefix>
                    <el-icon class="el-input__icon">
                        <user />
                    </el-icon>
                </template>
            </el-input>
        </el-form-item>
        <el-form-item prop="password">
            <el-input v-model="loginForm.password" type="password" placeholder="密码: 123" show-password
                autocomplete="new-password">
                <template #prefix>
                    <el-icon class="el-input__icon">
                        <lock />
                    </el-icon>
                </template>
            </el-input>
        </el-form-item>
    </el-form>
    <div class="login-btn">
        <el-button :icon="UserFilled" round size="large" type="primary" :loading="loading" @click="login(loginFormRef)">
            登录
        </el-button>
        <el-button :icon="CircleClose" round size="large" @click="resetForm(loginFormRef)"> 重置 </el-button>
    </div>
</template>

<script setup>
import { ref, reactive } from "vue";

import { useRouter } from "vue-router"

import { getTimeState } from "@/utils/index";

import { CircleClose, UserFilled } from "@element-plus/icons-vue";

const router = useRouter();

const loginFormRef = ref();
const loginRules = reactive({
    username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
    password: [{ required: true, message: "请输入密码", trigger: "blur" }]
});

const loading = ref(false);
const loginForm = reactive({
    username: "",
    password: ""
});

// login
const login = (formEl) => {
    if (!formEl) return;
    formEl.validate(async valid => {
        if (!valid) return;
        // 跳转到首页
        if (loginForm.username == "ksc" && loginForm.password == "123") {
            localStorage.setItem("token", "123456");
            localStorage.setItem("username", "ksc");

            router.push("/news");

            ElNotification({
                title: getTimeState(),
                message: "欢迎登录天网战略眼",
                type: "success",
                duration: 3000
            });
        } else {
            ElNotification({
                title: "用户名密码错误",
                message: "",
                type: "error",
                duration: 2000
            });
        }
    });
};

// resetForm
const resetForm = (formEl) => {
    if (!formEl) return;
    formEl.resetFields();
};

</script>

<style scoped lang="scss">
@import "./index.scss";
</style>