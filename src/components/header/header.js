import React, { Component } from 'react';

import './header.css';

export default class Header extends Component {
    render() {
        return (
            
                <div className='header'>
                    <h1>Star DB</h1>
                    <ul className='nav nav-pills'>
                        <li className="nav-item active">
                            <a className="nav-link active" href="#0">People</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#0">Planets</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#0">Starships</a>
                        </li>
                    </ul>
                </div>

           
        )
    }
}