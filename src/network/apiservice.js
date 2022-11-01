import {get} from '../network/http'
import * as Constant from '../constant/constant'

let baseUrl = process.env.REACT_APP_BASE_URL;


/**
 * 获取首页接口
 */
function getHomeList(date) {
    return get(baseUrl + "/api/v2/feed", {"date": date, "num": 1});
}

/**
 * 获取关注数据
 */
function getFocusData(start) {
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

/**
 * 获取视频关联
 * @param videoId
 * @returns {Promise | Promise<unknown>}
 */
function getVideoList(videoId) {
    return get(baseUrl + "/api/v4/video/related", {"id": videoId})
}


/**
 * 查询专题详情
 * @param id
 * @returns {Promise | Promise<unknown>}
 */
function getTopicDetailData(id) {
    return get(baseUrl + "api/v3/lightTopics/internal/" + id, {})
}

/**
 * 获取分享详情接口
 * @param id
 * @param start
 * @returns {Promise | Promise<unknown>}
 */
function getCategoryDetail(id, start) {
    return get(baseUrl + "api/v4/categories/videoList", {
        "id": id,
        "start": start,
        "udid": Constant.UUID,
        deviceModel: Constant.DEVICE_NUM
    })
}


export default {
    getHomeList,
    getCategoryData,
    getFocusData,
    getTopicData,
    getRankListData,
    getVideoList,
    getTopicDetailData,
    getCategoryDetail

}
