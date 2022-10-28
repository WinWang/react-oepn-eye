import {get} from '../network/http'

let baseUrl = process.env.REACT_APP_BASE_URL;


/**
 * 获取首页接口
 */
async function getHomeList(date) {
    return get(baseUrl + "/api/v2/feed", {"date": date, "num": 1});
}

/**
 * 获取关注数据
 */
async function getFocusData(start) {
    return get(baseUrl + "/api/v4/tabs/follow", {"start": start})
}

/**
 * 获取分类数据
 */
function getCategoryData() {
    return get(baseUrl + "/api/v4/categories", {})
}

/**
 * 获取专题数据
 */
function getTopicData(start) {
    return get(baseUrl + "/api/v3/specialTopics", {"start": start})
}

/**
 * 获取排行榜数据
 * @param rankType  weekly 周排行       monthly 月排行        historical  总排行
 * @returns {Promise | Promise<unknown>}
 */
function getRankListData(rankType) {
    return get(baseUrl + "/api/v4/rankList/videos", {"strategy": rankType})
}


export default {
    getHomeList,
    getCategoryData,
    getFocusData,
    getTopicData,
    getRankListData
}
