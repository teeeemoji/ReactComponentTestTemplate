import React from 'react';
import logo from './logo.svg';
import style from './style.css';

export default class PageContainer extends React.Component {

    render() {
        return (
            <div className={style['page-container']}>
                <img className={style['react-Logo']} src={logo}
                     alt="React Logo"/>
                <h1 className={style['page-title']}>React 组件测试</h1>
                <div className={style['component-container']}>
                    {
                        this.props.children
                    }
                </div>
            </div>
        )
    }
}