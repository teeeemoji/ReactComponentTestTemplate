import React from 'react';
import style from './style.css'
import TextareaInReact from '../../components/TextareaInReact'

export default class SecondPage extends React.Component {
    render() {
        return (
            <h1 className={style['pages-second']}>
                <TextareaInReact
                    value={'x 先生 get?a=1&b= get?a=1&b= get?a=1&b= get?a=1&b= get?a=1&b= get?a=1&b= get?a=1&b=2&c=3\n' +
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
                    'f'}
                />
            </h1>
        )
    }
}