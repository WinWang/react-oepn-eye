import {Navigate} from 'react-router-dom'

import Main from '../page/main/main'  //主项目入口页面容器，承载四个tab切换的页面入口
import Home from '../page/home/home' //首页页面
import Find from '../page/find/find' //发现页面
import Hot from '../page/hot/hot'   //热门tab页面
import Mine from '../page/mine/mine'  //我的页面
import Test from '../page/test/test'  //测试组件class页面
import Category from '../page/find/category/category'  //分类页面
import Focus from '../page/find/focus/focus'  //关注页面
import Topic from '../page/find/topic/topic'  //专题页面
import Rank from '../page/hot/rank/rank' //排行榜页面
import VideoDetail from "../page/video_detail/video_detail"; //视频播放详情页面

import React from "react";

const routeList = [
    {
        path: '/',
        element: <Navigate to="/main" replace/>
    },
    {
        path: '/main/*',
        element: <Main/>,
        children: [
            {
                index: true,
                element: <Navigate to="/main/home" replace={true}/>
            },
            {
                path: 'home',
                element: <Home/>,
                replace: true
            },
            {
                path: 'find',
                element: <Find/>,
                children: [
                    {
                        index: true,
                        element: <Navigate to="/main/find/focus" replace={true}/>
                    },
                    {
                        path: 'focus',
                        element: <Focus/>,
                        replace: true
                    },
                    {
                        path: 'category',
                        element: <Category/>,
                        replace: true
                    },
                    {
                        path: 'topic',
                        element: <Topic/>,
                        replace: true
                    }
                ],
                replace: true
            },
            {
                path: 'hot',
                element: <Hot/>,
                children: [
                    {
                        index: true,
                        element: <Navigate to="/main/hot/rank" replace={true} state="weekly"/>
                    },
                    {
                        path: 'rank',
                        element: <Rank/>,
                        replace: true
                    }
                ]
            },
            {
                path: 'mine',
                element: <Mine/>,
                replace: true
            },
            {
                path: 'test',
                element: <Test/>,
                replace: true
            }
        ]
    },
    {
        path: '/videoDetail',
        element: <VideoDetail/>
    }
]

export default routeList