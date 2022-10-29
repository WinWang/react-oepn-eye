import './video_list_component.less'
import React, {forwardRef, useEffect, useLayoutEffect, useState} from "react";
import api from '../../../network/apiservice'
import {Image, List} from "react-vant";

/**
 * 该页面涉及到父组件和子组件的传递参数
 * @type {React.ForwardRefExoticComponent<React.PropsWithoutRef<{}> & React.RefAttributes<unknown>>}
 */
const VideoListComponent = forwardRef((props, ref) => {
    const [dataList, setDataList] = useState([])
    const [playingUrl, setPlayingUrl] = useState("")
    //获取父组件定义的回掉函数--可以是多个，用{}接受
    const {callback} = props
    useLayoutEffect(() => {

    }, [])

    useEffect(() => {
        getVideoList()
    }, [props.videoId])

    /**
     * 获取视频列表数据
     */
    const getVideoList = () => {
        if (props.videoId === "" || props.videoId === undefined || props.videoId === null) {
            return
        }
        api.getVideoList(props.videoId).then(res => {
            let list = res.itemList.filter(item => {
                return item.type === "videoSmallCard"
            })
            setDataList(() => [...list])
        })
    }

    return (
        <List finished={true}>
            {dataList.map((item, index) => (
                <div key={index} className="video-list-wrap" onClick={() => {
                    callback(item.data.playUrl)
                    setPlayingUrl(item.data.playUrl)
                }}>
                    <div className="image-wrap-list"><Image src={item.data.cover.feed} fit={"cover"}
                                                            width="100px"
                                                            height="60px"/></div>
                    <div className="right-wrap">
                        <span className="title"
                              style={{color: playingUrl === item.data.playUrl ? 'red' : '#333333'}}>{item.data.title}</span>
                        <span className="desc"
                              style={{color: playingUrl === item.data.playUrl ? 'red' : '#999999'}}>{item.data.description}</span>
                    </div>
                </div>
            ))}
        </List>
    )
})

export default VideoListComponent