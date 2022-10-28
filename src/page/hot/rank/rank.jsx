import React, {useState, useLayoutEffect, useEffect} from 'react'
import {PullRefresh, List, Image} from "react-vant"
import {useLocation} from 'react-router-dom'
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

    useLayoutEffect(() => {
        console.log("路由传递参数>>>" + location.state)
        setParams(location.state)
        getRankData(location.state)
    }, [location.state])

    const getRankData = async (rankType) => {
        await api.getRankListData(rankType).then(res => {
            setDataList([...res.itemList])
        })
    }

    const refresh = async () => {
        await getRankData(location.state)
    }

    return (
        <PullRefresh onRefresh={refresh}>
            <List finished={true}>
                {dataList.map((item, index) => (
                    <div key={index} className="item-wrap-layout">
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

