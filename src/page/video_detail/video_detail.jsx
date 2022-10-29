import './video_detail.less'
import React, {useEffect, useLayoutEffect, useState} from "react";
import ReactPlayer from "react-player";
import {useLocation, useNavigate} from 'react-router-dom'
import {NavBar} from "react-vant";
import VideoListComponent from "./component/video_list_component";

const VideoDetail = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const [videoUrl, setVideoUrl] = useState("")
    const [videoId, setVideoId] = useState("")

    useLayoutEffect(() => {
        setVideoUrl(location.state.videoUrl)
        setVideoId(location.state.videoId)
    }, [])

    useEffect(() => {

    }, [])

    /**
     * 定义传递给子组件的回掉callback函数
     * @param childVideoId
     */
    const callback = (childVideoUrl) => {
        setVideoUrl(childVideoUrl)
    }

    return (
        <div className="video-vertical-layout">
            <NavBar fixed={true} title={"视频详情"} onClickLeft={() => {
                navigate(-1)
            }}/>
            <div className="top-empty-layout"/>
            <ReactPlayer url={videoUrl}
                         width='100%'
                         height='auto'
                         playing={true}
            />
            <div className="video-child-wrap">
                <VideoListComponent videoId={videoId} callback={callback}/>
            </div>
        </div>
    )

}

export default VideoDetail