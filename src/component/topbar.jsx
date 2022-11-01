import React, {forwardRef, useEffect} from "react";
import {useNavigate} from 'react-router-dom'
import {Observer, useLocalObservable} from "mobx-react-lite";
import {NavBar} from "react-vant";
import {ArrowLeft} from '@react-vant/icons'

/**
 * 通用顶部导航返回栏
 * @type {React.ForwardRefExoticComponent<React.PropsWithoutRef<{}> & React.RefAttributes<unknown>>}
 */
const TopBar = forwardRef((props, ref) => {
    const navigate = useNavigate()
    const data = useLocalObservable(() => ({
        fixed: true,
        title: "",
        placeholder: true,
        leftArrow: true,
        setFixed(newFixed) {
            this.fixed = newFixed
        },
        setTitle(newTitle) {
            this.title = newTitle
        },
        setPlaceHolder(placeholder) {
            this.placeholder = placeholder
        },
        setLeftArrow(leftArrow) {
            this.leftArrow = leftArrow
        }
    }))

    useEffect(() => {
        data.setTitle(props.title)
    }, [props.title])

    useEffect(() => {
        data.setFixed(props.fixed)
    }, [props.fixed])

    useEffect(() => {
        data.setPlaceHolder(props.placeholder)
    }, [props.placeholder])

    useEffect(() => {
        data.setLeftArrow((props.leftArrow != null || props.leftArrow !== undefined) ? props.leftArrow : true)
    }, [props.leftArrow])

    return (
        <Observer>{
            () => (
                <NavBar title={data.title} fixed={data.fixed} placeholder={data.placeholder}
                        leftArrow={data.leftArrow ? <ArrowLeft/> : null} safeAreaInsetTop={true}
                        border={false}
                        onClickLeft={() => {
                            navigate(-1)
                        }}/>
            )
        }</Observer>
    )
})

export default TopBar