import React from 'react';
import style from './style.css';

import Textarea from '../../components/TextareaUseJquery';

export default class FirstCase extends React.Component {


    constructor() {
        super();
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    state = {
        height: 'auto',
        content: 'x 先生 get?a=1&b= get?a=1&b= get?a=1&b= get?a=1&b= get?a=1&b= get?a=1&b= get?a=1&b=2&c=3'
    };

    componentDidMount() {
        if (this.inputRef && this.state.content) {
            this.inputRef.innerText = this.state.content;
        }
    }

    render() {
        return (
            <div className={style['component-ar-textarea-ctn']}>
                <h3>方案一:jquery 时代的解决方案(两次设置 div 的 height, 第一次设置 auto, 第二次设置为
                    scrollHeight)
                </h3>
                <div className={style['demo-ctn']}>
                    <Textarea
                        value={this.state.content}
                        placeholder="请输入一些东西啦"
                        inputRef={ref => {
                            this.inputRef = ref || this.inputRef;
                        }}
                        onChange={this.handleInputChange}
                    />
                </div>
            </div>
        )
    }

    handleInputChange(value) {
        this.setState({content: value});
    }
}