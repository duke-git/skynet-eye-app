import request from "@/utils/request";

// 今日新闻页面
export function getNewsList(param) {
    return request({
        url: "/news/GetNewsList",
        method: "get",
        params: param,
    });
}

export function getNewsTag(param) {
    return request({
        url: "/news/GetNewsTag",
        method: "get",
        params: param,
    });
}

export function setNewsTag(data) {
    return request({
        url: "/news/SetNewsTag",
        method: "Post",
        params: null,
        data: data
    });
}

export function deleteNewsTag(params) {
    return request({
        url: "/news/DeleteNewsTag",
        method: "Delete",
        params: params,
    });
}

// 政策收集页面
export function getPolicyData(param) {
    return request({
        url: "/news/GetPolicyData",
        method: "Get",
        params: param
    });
}


//竞品追踪页面
export function getCompetitorData(param) {
    return request({
        url: "/news/GetCompetitorData",
        method: "Get",
        params: param
    });
}