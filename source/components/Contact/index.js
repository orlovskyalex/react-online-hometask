import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Styles from './styles.m.css';

export default class Contact extends Component {
    render () {
        const { action, address } = this.props;

        return (
            <div className = { Styles.contact }>
                <div className = { Styles.action }>{ action }</div>
                <div className = { Styles.address }>{ address }</div>
            </div>
        );
    }
}

Contact.propTypes = {
    action:  PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
};
