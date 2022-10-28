import './topic.less'
import React, {useLayoutEffect, useState} from 'react'
import {Image, List, PullRefresh} from 'react-vant'
import api from '../../../network/apiservice'


const Topic = () => {

    const [dataList, setDataList] = useState([])
    const [start, setStart] = useState(0)

    useLayoutEffect(() => {

    }, [])

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
            <PullRefresh onRefresh={refresh}>
                <List onLoad={onLoadMore}>
                    {dataList.map((item, index) => (
                        <div key={index} className='image-wrap-out'>
                            <div className='image-wrap'><Image src={item.data.image} fit={"cover"}/></div>
                        </div>
                    ))}
                </List>
            </PullRefresh>
        </div>
    )
}
export default Topic