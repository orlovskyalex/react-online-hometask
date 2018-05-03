import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Styles from './styles.m.css';

export default class Skill extends Component {
    render () {
        const { title, points } = this.props;

        return (
            <div className = { Styles.skill }>
                <span>{title}</span>
                <ul>
                    {[...Array(10)].map((point, index) => (
                        <li
                            className = { index > points ? Styles.inactive : null }
                            key = { Math.random() }
                        />
                    ))}
                </ul>
            </div>
        );
    }
}

Skill.propTypes = {
    points: PropTypes.number.isRequired,
    title:  PropTypes.string.isRequired,
};
