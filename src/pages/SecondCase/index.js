import React from 'react';
import style from './style.css'
import TextareaInReact from '../../components/TextareaInReact'

export default class SecondPage extends React.Component {

    constructor() {
        super();

        this.state = {
            value: 'x 先生 get?a=1&b= get?a=1&b= get?a=1&b= get?a=1&b= get?a=1&b= get?a=1&b= get?a=1&b=2&c=3\n' +
            'asdfasdf\n' +
            'asdf\n' +
            'asdf\n' +
            'asdfas\n' +
            'fa\n' +
            'sdff\n' +
            'ds\n' +
            'f\n' +
            'sdf\n' +
            'sd\n' +
            'f'
        };

        this.handleValueChange = this.handleValueChange.bind(this);
    }

    render() {
        return (
            <div className={style['pages-second']}>
                <h1 className={style['pages-second-title']}>
                    方案二: 使用隐藏 textarea 标签
                </h1>
                <TextareaInReact
                    value={this.state.value}
                    onChange={this.handleValueChange}
                />
            </div>
        )
    }

    handleValueChange(value) {
        this.setState({value})
    }
}