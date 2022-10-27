import {Navigate} from 'react-router-dom'

import Main from '../page/main/main'
import Home from '../page/home/home'
import Find from '../page/find/find'
import Hot from '../page/hot/hot'
import Mine from '../page/mine/mine'
import Test from '../page/test/test'
import Category from '../page/find/category/category'
import Focus from '../page/find/focus/focus'
import Topic from '../page/find/topic/topic'

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
                element: <Navigate to="/main/home" replace/>
            },
            {
                path: 'home',
                element: <Home/>
            },
            {
                path: 'find',
                element: <Find/>,
                children: [
                    {
                        index: true,
                        element: <Navigate to="/main/find/focus" replace/>
                    },
                    {
                        path: 'focus',
                        element: <Focus/>
                    },
                    {
                        path: 'category',
                        element: <Category/>
                    },
                    {
                        path: 'topic',
                        element: <Topic/>
                    }
                ]
            },
            {
                path: 'hot',
                element: <Hot/>
            },
            {
                path: 'mine',
                element: <Mine/>
            },
            {
                path: 'test',
                element: <Test/>
            }
        ]
    }
]

export default routeList