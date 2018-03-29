import React from 'react'
import style from './style.css';
import {copyStyle} from "./copy-style";
import PropTypes from 'prop-types';

const DEFAULT_HEIGHT = 20;

export default class TextareaInReact extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            height: DEFAULT_HEIGHT,
            value: props.value,
        };

        this.setValue = this.setValue.bind(this);
        this.setFilledTextareaHeight = this.setFilledTextareaHeight.bind(this);
    }

    componentDidMount() {
        this.copyTextareaStyle();
        this.setFilledTextareaHeight();
    }

    componentWillReceiveProps() {
        this.clearNextFrame();
        this.onNextFrameActionId = setTimeout(() => this.setFilledTextareaHeight());
    }

    clearNextFrame() {
        clearTimeout(this.onNextFrameActionId);
    }

    setFilledTextareaHeight() {
        const element = this.ghost;
        // 优化点
        console.log('判断中...')
        if (this.inputRef.style.height !== (element.scrollHeight + 'px')) {
            console.log('需要修改高度哦')
            this.setState({
                height: element.scrollHeight,
            });
        }
    }

    setValue(event) {
        // this.setFilledTextareaHeight();
        this.onNextFrameActionId = setTimeout(() => this.setFilledTextareaHeight());
        const {value} = event.target;

        if (this.props.value === undefined) {
            this.setState({value});
        } else {
            this.props.onChange(value);
        }
    }

    getExpandableField() {
        const {height} = this.state;
        let value;
        if (this.props.value === undefined) {
            value = this.state.value;
        } else {
            value = this.props.value;
        }

        return (
            <textarea
                className={style['textarea']}
                name="textarea"
                id="textarea"
                autoFocus={true}
                defaultValue={value}
                ref={(c) => this.inputRef = c}
                style={{height}}
                onChange={this.setValue}
            />
        );
    }

    getGhostField() {
        let value;
        if (this.props.value === undefined) {
            value = this.state.value;
        } else {
            value = this.props.value;
        }
        return (
            <textarea
                className={style['textarea--ghost']}
                ref={(c) => this.ghost = c}
                value={value}
                onChange={() => {}}
            />
        );
    }

    render() {
        console.log('render');
        return (
            <div className={style['container']}>
                {/*渲染一个正常的 textarea */}
                {this.getExpandableField()}
                {/*渲染一个不正常的 textarea */}
                {this.getGhostField()}
            </div>
        );
    }

    copyTextareaStyle() {
        // 从 textarea 复制到 div
        copyStyle(this.ghost, this.inputRef);
    }
}