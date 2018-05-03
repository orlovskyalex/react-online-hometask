// Core
import React, { Component } from 'react';

// Instruments
import Styles from './styles.m.css';

// Components
import Skillset from '../Skillset';
import Experience from '../Experience';
import Contacts from '../Contacts';
import Education from '../Education';

export default class Content extends Component {
    render () {
        return (
            <div className = { Styles.content }>
                <div>
                    <div className = { Styles.topRow }>
                        <Skillset />
                        <Experience />
                    </div>
                    <div className = { Styles.bottomRow }>
                        <Contacts />
                        <Education />
                    </div>
                </div>
            </div>
        );
    }
}
