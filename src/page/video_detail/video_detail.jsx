import './video_detail.less'
import React, {useLayoutEffect, useEffect, useState} from "react";
import ReactPlayer from "react-player";
import {useNavigate, useLocation} from 'react-router-dom'
import api from '../../network/apiservice'

const VideoDetail = () => {

    const [videoUrl, setVideoUrl] = useState("")

    const location = useLocation()

    useLayoutEffect(() => {
        setVideoUrl(location.state)
    }, [])

    useEffect(() => {

    }, [])

    return (
        <div>
            <ReactPlayer url={videoUrl}
                         width='100%'
                         height='210px'
                         playing={true}
            />
        </div>
    )

}

export default VideoDetail