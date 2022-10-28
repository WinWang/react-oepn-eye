import React, {useLayoutEffect, useEffect, useState} from "react";
import {useNavigate, useLocation} from 'react-router-dom'
import ReactPlayer from 'react-player'
import api from '../../network/apiservice'

const VideoTest = () => {
    const [videoUrl, setVideoUrl] = useState("")

    useLayoutEffect(() => {

    }, [])

    useEffect(() => {

    }, [])

    return (
        <div>
            <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U'/>
        </div>
    )

}

export default VideoTest