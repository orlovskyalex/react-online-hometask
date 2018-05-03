import React, { Component } from 'react';
import Styles from './styles.m.css';
import SectionHeading from '../SectionHeading';
import Workplace from '../Workplace';
import experience from './experience';

export default class Experience extends Component {
    render () {
        return (
            <div className = { Styles.experience }>
                <SectionHeading name = 'Опыт работы' number = '02.' />
                {experience.length && experience.map(({ id, company, location, period, position }) => (
                    <Workplace
                        company = { company }
                        key = { id }
                        location = { location }
                        period = { period }
                        position = { position }
                    />
                ))}
            </div>
        );
    }
}
