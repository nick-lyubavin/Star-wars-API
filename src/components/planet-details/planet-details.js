import React, { Component } from 'react';

import './planet-details.css';

export default class PlanetDetails extends Component {
    render() {
        return (
            <div className='planet-details'>
                <h4>Planet name</h4>
                <ul className='list-group'>
                    <li className='list-group-item'>
                        <span>Population: </span>
                        <span>123123</span>
                    </li>
                    <li className='list-group-item'>
                        <span>Rotation period: </span>
                        <span>365</span>
                    </li>
                    <li className='list-group-item'>
                        <span>Diameter: </span>
                        <span>128</span>
                    </li>
                </ul>
            </div>
        )
    }

}