import React, { Component } from 'react';
import Styles from './styles.m.css';
import SectionHeading from '../SectionHeading';
import contacts from './contacts';
import Contact from '../Contact';

export default class Contacts extends Component {
    render () {
        return (
            <div className = { Styles.contacts }>
                <SectionHeading name = 'Контакты' number = '03.' />
                {contacts.length && contacts.map(({ id, action, address }) => (
                    <Contact action = { action } address = { address } key = { id } />
                ))}
            </div>
        );
    }
}
