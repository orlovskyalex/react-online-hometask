// Core
import React, { Component } from 'react';

// Instruments
import Styles from './styles.m.css';
import elon from 'theme/assets/images/elon-musk.png';

export default class Header extends Component {
    render () {
        return (
            <div className = { Styles.header }>
                <div>
                    <h1>Илон Маск</h1>
                    <span>Предприниматель, изобретатель, инженер, инвестор</span>
                    <p>
                        Стремлюсь сократить глобальное потепление за счёт устойчивого производства
                        потребления энергии и снижения «риска исчезновения человека», сделав жизнь
                        многопланетной и создав человеческую колонию на Марсе.
                    </p>
                </div>
                <img src = { elon } />
            </div>
        );
    }
}
