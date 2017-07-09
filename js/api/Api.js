/**
 * Created by Mrx on 2017/7/5.
 */
'use strict'

// 接口列表

let HOST_URI = 'https://www.v2ex.com';

//取网站状态
function getSiteState () {
    return (HOST_URI+ "/api/site/stats.json");
}

//取最新主题
function getLastTopics () {
    return (HOST_URI+ "/api/topics/latest.json");
}

//取热议主题
function getHotTopics () {
    return (HOST_URI+ "/api/topics/hot.json");
}

//取主题信息 id	主题id（必选）
function getTopics () {
    return (HOST_URI+ "/api/topics/show.json");
}

//取主题回复 topic_id	主题id（必选） page page_size
function getReplies () {
    return (HOST_URI+ "/api/replies/show.json");
}

//取用户信息  username	用户名（必选）
function getMembers () {
    return (HOST_URI+ "/api/members/show.json");
}

export default {
    getDomain: HOST_URI,
    getSiteState: getSiteState,
    getLastTopics: getLastTopics,
    getHotTopics: getHotTopics,
    getTopics: getTopics,
    getReplies: getReplies,
    getMembers: getMembers
}