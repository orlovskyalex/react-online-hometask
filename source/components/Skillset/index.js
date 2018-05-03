import React, { Component } from 'react';
import Styles from './styles.m.css';
import skillset from './skillset';
import Skill from '../Skill';
import SectionHeading from '../SectionHeading';

export default class Skillset extends Component {
    render () {
        return (
            <div className = { Styles.skillset }>
                <SectionHeading name = 'Набор скилов' number = '01.' />
                {skillset.length && skillset.map(({ id, points, title }) => (
                    <Skill key = { id } points = { points } title = { title } />
                ))}
            </div>
        );
    }
}
