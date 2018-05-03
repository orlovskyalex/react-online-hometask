import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Styles from './styles.m.css';

export default class Eduspace extends Component {
    render () {
        const { degree, eduspace, period } = this.props;

        return (
            <div className = { Styles.eduspace }>
                <div className = { Styles.period }>{ period }</div>
                <div className = { Styles.eduspace }>{ eduspace }</div>
                <div className = { Styles.degree }>{ degree }</div>
            </div>
        );
    }
}

Eduspace.propTypes = {
    degree:   PropTypes.string.isRequired,
    eduspace: PropTypes.string.isRequired,
    period:   PropTypes.string.isRequired,
};
