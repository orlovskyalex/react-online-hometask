import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Styles from './styles.m.css';

export default class Workplace extends Component {
    render () {
        const { company, location, period, position } = this.props;

        return (
            <div className = { Styles.workplace }>
                <div className = { Styles.leftColumn }>
                    <div className = { Styles.period }>{ period }</div>
                    <div className = { Styles.position }>{ position }</div>
                </div>
                <div className = { Styles.rightColumn }>
                    <div className = { Styles.location }>{ location }</div>
                    <div className = { Styles.company }>{ company }</div>
                </div>
            </div>
        );
    }
}

Workplace.propTypes = {
    company:  PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    period:   PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
};
