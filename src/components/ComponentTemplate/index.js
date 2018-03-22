import React from 'react'
import style from './style.css';

export default class CompName extends React.Component {

    render() {
        return (
            <div className={style['comp-xxx']}>
                这里是一个组件
            </div>
        )
    }
}