import './App.css';
import React from "react"
import {useRoutes} from 'react-router-dom'
import routes from './route/routes'
import Api from './network/apiservice'
import {Toast, Dialog} from 'react-vant'


const App = () => {
    React.Component.prototype.$api = Api
    React.Component.prototype.$toast = Toast
    React.Component.prototype.$dialog = Dialog

    const routeElement = useRoutes(routes)
    return (
        <div>
            <div>
                {/*<Routes>*/}
                {/*<Route path="/main" element={<Main/>}/>*/}
                {/*</Routes>*/}
                {/*动态路由表注册*/}
                {routeElement}
            </div>
        </div>
    )
}


export default App
