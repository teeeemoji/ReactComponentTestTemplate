import React from 'react';
import style from './style.css'

export default class TestPage extends React.Component {
    render() {
        return (
            <h1 className={style['pages-xxx']}>
                this is page xxx
            </h1>
        )
    }
}