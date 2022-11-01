import './topic.less'
import React, {useEffect, useState} from 'react'
import {Image, List, PullRefresh} from 'react-vant'
import {useNavigate, useLocation} from "react-router-dom";
import api from '../../../network/apiservice'
import TopBar from "../../../component/topbar";


const Topic = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [dataList, setDataList] = useState([])
    const [start, setStart] = useState(0)
    const [showTitleBar, setShowTitleBar] = useState(false)

    useEffect(() => {
        setShowTitleBar(location.state)
    }, [location.state]);

    const getTopicData = async (isRefresh, startNum) => {
        await api.getTopicData(startNum).then(res => {
            if (isRefresh) {
                setDataList(res.itemList)
            } else {
                setDataList((v) => [...v, ...res.itemList])
            }
        })
    }

    // 下拉刷新
    const refresh = async () => {
        setStart(() => 0)
        await getTopicData(true, 0)
    }
    // 加载更多
    const onLoadMore = async () => {
        setStart((v) => v + 1)
        await getTopicData(false, start + 1)
    }

    return (
        <div className="topic-vertical-layout">
            {showTitleBar ?
                <TopBar title={"关注"} fixed={true} placeholder={true}/>
                : null}
            <PullRefresh onRefresh={refresh}>
                <List onLoad={onLoadMore}>
                    {dataList.map((item, index) => (
                        <div key={index} className='image-wrap-out' onClick={() => {
                            navigate("/topicDetail", {
                                state: item.data.id
                            })
                        }}>
                            <div className='image-wrap'><Image src={item.data.image} fit={"cover"}/></div>
                        </div>
                    ))}
                </List>
            </PullRefresh>
        </div>
    )
}
export default Topic