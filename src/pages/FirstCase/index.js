import React from 'react';
import {Link} from 'react-router-dom';

export default class TestPage extends React.Component {
    render() {
        const {routes} = this.props;
        return (
            <p>
                here is a page
            </p>
        )
    }
}