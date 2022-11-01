import {Observer, useLocalObservable} from "mobx-react-lite"
import {useLayoutEffect} from "react";
import api from "../../../network/apiservice";
import {Grid, GridItem, Image} from "react-vant";

const Mobx = () => {
    const todo = useLocalObservable(() => ({
        title: "Test",
        done: true,
        testList: [],
        netList: [],
        toggle() {
            this.done = !this.done
        },
        setTestList(list) {
            this.testList = list
        },
        setNetList(netlist) {
            this.netList = netlist
        }
    }))

    useLayoutEffect(() => {
        setTimeout(() => {
            todo.setTestList([
                {"name": "麻子", "age": 1},
                {"name": "赵倩", "age": 2},
                {
                    "name": "孙俪",
                    "age": 3
                }])
            console.log("我执行>>>>>哈哈哈哈" + todo.testList.length)
        }, 5000)
        netData()

    }, [])


    const netData = () => {
        api.getCategoryData().then(res => {
            todo.setNetList(res)
        })
    }


    return (
        <Observer>
            {() => (
                <div>
                    <h1 onClick={() => {
                        todo.toggle()
                        todo.setTestList([
                            {"name": "张三", "age": 12},
                            {"name": "李四", "age": 13},
                            {
                                "name": "王二",
                                "age": 14
                            }])
                    }
                    }>
                        {todo.title} {todo.done ? "[DONE]" : "[TODO]"}
                    </h1>

                    <h1>{todo.title}</h1>

                    {
                        todo.testList.map((item, index) => (
                                <h1 key={index}>{todo.title}{item.name}{item.age}</h1>
                            )
                        )
                    }

                    {
                        todo.netList.map((item, index) => (
                                <h4 key={index}>{item.name}{item.headerImage}</h4>
                            )
                        )
                    }

                    {/*{"funcName":"getToken","param":{},"flowNo":"FN-1667196439777-4192000101"}*/}
                    <div className="cate-vertical-layout">
                        <Grid square columnNum={2}>
                            {
                                todo.netList.map((item, index) => (
                                    <GridItem key={index} onClick={() => {
                                        window.my.updateApk("{\"param\": {\"downloadUrl\": \"https://dl1.app.gtja.com/installpackage/appdistributionplatform/android/gtjaqh_beta/gtjaqh_beta.apk\"}}")
                                    }}>
                                        <div className="img-wrap">
                                            <Image src={item.headerImage} fit={"cover"}/>
                                            <span className="ad-title">{item.name}</span>
                                        </div>
                                    </GridItem>
                                ))
                            }
                        </Grid>
                    </div>
                    ))

                </div>
            )}
        </Observer>
    )
}
export default Mobx