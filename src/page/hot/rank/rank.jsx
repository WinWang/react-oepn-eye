import React, {useLayoutEffect, useState} from 'react'
import {Image, List, PullRefresh} from "react-vant"
import {useLocation, useNavigate} from 'react-router-dom'
import api from '../../../network/apiservice'

/**
 * 排行榜页面-子内容页面
 * @returns {JSX.Element}
 * @constructor
 */
const Rank = () => {
    const [dataList, setDataList] = useState([])
    const [params, setParams] = useState("")
    const location = useLocation()
    const navigate = useNavigate()

    useLayoutEffect(() => {
        console.log("路由传递参数>>>" + location.state.rankType)
        setParams(location.state.rankType)
        getRankData(location.state.rankType)
    }, [location.state])

    const getRankData = async (rankType) => {
        await api.getRankListData(rankType).then(res => {
            setDataList([...res.itemList])
        })
    }

    const refresh = async () => {
        await getRankData(location.state.rankType)
    }

    const clickItem = (item) => {
        navigate("/videoDetail", {
            state: {
                "videoUrl": item.data.playUrl,
                "videoId": item.data.id
            }
        })
    }

    return (
        <PullRefresh onRefresh={refresh}>
            <List finished={true}>
                {dataList.map((item, index) => (
                    <div key={index} className="item-wrap-layout" onClick={() => {
                        clickItem(item)
                    }}>
                        <div className="image-wrap">
                            <Image src={item.data.cover.feed} fit={"cover"}/>
                            <div className="left-tag"><span className="tag-text">{item.data.category}</span></div>
                        </div>
                        {item.data.author ?
                            <div className="horizontal-layout">
                                <Image round height="50px" width="50px" src={item.data.author.icon}/>
                                <div className="title-desc-wrap">
                                    <span className="item-bottom-title">{item.data.author.name}</span>
                                    <span className="item-bottom-desc">{item.data.author.description}</span>
                                </div>
                            </div> : null}
                    </div>
                ))}
            </List>
        </PullRefresh>
    )
}

export default Rank

