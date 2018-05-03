import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Styles from './styles.m.css';

export default class SectionHeading extends Component {
    render () {
        const { number, name } = this.props;

        return (
            <div className = { Styles.sectionHeading }>
                <h1>
                    <span className = { Styles.sectionNumber }>{ number }</span>
                    <span className = { Styles.sectionName }>{ name }</span>
                </h1>
            </div>
        );
    }
}

SectionHeading.propTypes = {
    name:   PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};
