import React from 'react';
import style from './style.css';
import PropTypes from 'prop-types';

import {noop} from '../../utils/common-const';

// use jquery
// import $ from 'jquery';

export default class CompName extends React.Component {

    static propTypes = {
        // 值
        value: PropTypes.string,
        // 占位符
        placeholder: PropTypes.string,
        // change 事件回调
        onChange: PropTypes.func,

        inputRef: PropTypes.func,
    };

    static defaultProps = {
        value: '',
        placeholder: '',
        onChange: noop
    };

    constructor() {
        super();
        this.bindRef = this.bindRef.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.resize = this.resize.bind(this);
    }

    componentDidMount() {
        this.resize();
    }

    render() {
        return (
            <div className={style['comp-textarea-use-jquery']}>
                <textarea
                    ref={this.bindRef}
                    className={style['textarea']}
                    placeholder={this.props.placeholder}
                    value={this.props.value}
                    onChange={this.handleChange}
                />
            </div>
        )
    }

    // 绑定 ref
    bindRef(ref) {
        if (ref) {
            this.inputRef = ref;
            if (this.props.inputRef) {
                this.props.inputRef(ref);
            }
        }
    }

    // 防抖
    resizing = false;

    // 重新计算 textarea 的高度
    resize() {
        console.log('resize')
        if (this.inputRef) {
            this.inputRef.style.height = 'auto';
            this.inputRef.style.height = this.inputRef.scrollHeight + 'px';
        }
        this.resizing = false;
    }

    handleChange(e) {
        if (this.props.onChange) {
            this.props.onChange(e.target.value)
        }
        this.resize();
    }
}