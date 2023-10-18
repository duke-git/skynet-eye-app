import { createRouter, createWebHashHistory } from "vue-router";


const staticRouter = [
    {
        path: "/news",
        name: "layout",
        component: () => import("@/components/Layout.vue"),
        children: [
            {
                path: "/news",
                name: "news",
                component: () => import("@/views/news/index.vue"),
                meta: {
                    title: "今日新闻",
                    keepAlive: true
                }
            },
            {
                path: "/policy",
                name: "policy",
                component: () => import("@/views/policy/index.vue"),
                meta: {
                    title: "政策收集",
                    keepAlive: true
                }
            },
            {
                path: "/competitor",
                name: "competitor",
                component: () => import("@/views/competitor/index.vue"),
                meta: {
                    title: "竞品追踪",
                    keepAlive: true
                }
            },
            {
                path: "/data",
                name: "data",
                component: () => import("@/views/data/index.vue"),
                meta: {
                    title: "行业数据",
                    keepAlive: true
                }
            },
        ]
    },
    {
        path: "/",
        redirect: "/news"
    },
    {
        path: "/login",
        name: "login",
        component: () => import("@/views/login/index.vue"),
        meta: {
            title: "登录",
            keepAlive: false
        }
    },
    {
        path: "/data",
        name: "data",
        component: () => import("@/views/data/index.vue"),
        meta: {
            title: "行业数据",
            keepAlive: true
        }
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes: [...staticRouter],
    strict: false,
    scrollBehavior: () => ({ left: 0, top: 0 })
});

/**
 * @description 路由拦截 beforeEach
 * */
router.beforeEach(async (to, from, next) => {
    if (to.path.toLocaleLowerCase() === "/login") {
        return next();
    }

    let token = localStorage.getItem('token')
    if (token !== "123456") {
        next({ path: '/login' });
    }

    next();
});

export default router;

