import { ElMessage } from 'element-plus';


import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://36.103.167.150:8080',
    timeout: 5000 // 超时时间
});

// instance.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
instance.defaults.headers.common['Content-Type'] = 'Application/json';
instance.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

// 请求拦截器  前端 => 后端传输
instance.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// 响应拦截器  后端 => 前端传输
instance.interceptors.response.use(
    response => {
        return response.data;
    },
    error => {
        ElMessage.error(error)
        return Promise.reject(error);
    }
);

export default instance;
