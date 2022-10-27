import {get, post} from '../network/http'

let baseUrl = process.env.REACT_APP_BASE_URL;


/**
 * 获取Banner接口
 */
function getHomeList(date) {
    return get(baseUrl + "/api/v2/feed", {"date": date, "num": 1});
}


export default {
    getHomeList,
}
