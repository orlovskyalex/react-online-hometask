// Core
import React, { Component } from 'react';

// Instruments
import Styles from './styles.m.css';
import elon from 'theme/assets/images/elon-musk.png';

export default class Header extends Component {
    render () {
        return (
            <div className = { Styles.header }>
                <img src = { elon } />
            </div>
        );
    }
}
