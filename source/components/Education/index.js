import React, { Component } from 'react';
import Styles from './styles.m.css';
import education from './education';
import SectionHeading from '../SectionHeading';
import Eduspace from '../Eduspace';

export default class Skillset extends Component {
    render () {
        return (
            <div className = { Styles.education }>
                <SectionHeading name = 'Образование' number = '04.' />
                {education.length && education.map(({ id, degree, eduspace, period }) => (
                    <Eduspace degree = { degree } eduspace = { eduspace } key = { id } period = { period } />
                ))}
                <div className = { Styles.copyright }>
                    2018 &copy; Илон Маск
                </div>
            </div>
        );
    }
}
