<template>
    <div class="login-container flx-center">
        <div class="login-box">
            <div class="login-left">
                <h1 class="login-text1">天网战略眼</h1>
                <h3 class="login-text2"><i>云计算行业趋势监控AI助手</i></h3>
            </div>
            <div class="login-form">
                <div class="login-logo">
                    <!-- <img class="login-icon" src="@/assets/images/app_logo.png" alt="" /> -->
                    <h2 class="logo-text">系统登陆</h2>
                </div>
                <LoginForm />
            </div>
        </div>
    </div>
</template>

<script setup name="login">
import LoginForm from "./LoginForm.vue";
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>

