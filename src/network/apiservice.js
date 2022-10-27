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
 * @param startId
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


export default {
    getHomeList,
    getCategoryData,
    getFocusData,
    getTopicData,
}
