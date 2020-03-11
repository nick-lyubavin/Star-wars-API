import React, { Component } from 'react';
import PlanetDetails from '../planet-details';

import SwapiService from '../../services/swapi-service';
import SwVisualService from '../../services/sw-visual-service';

import Spinner from '../spinner';
import ErrorMessage from '../error-message';

import './random-planet.css';

export default class RandomPlanet extends Component { 

    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true,
        error: false,
    }; 

    componentDidMount = () => {
        this.updatePlanet();

        this.interval = setInterval(this.updatePlanet, 5000);
    }

    componentWillUnmount = () => {
        clearInterval(this.interval);
    }

    onPlanetLoaded = planet => {
        this.setState({
            planet,
            loading: false,
            error: false,
        });        
    }

    onError = (err) => {
        this.setState({
            loading: false,
            error: true
        });

    }


    updatePlanet = () => {
        const id = Math.floor((Math.random() * 20)) + 3;        

        this.swapiService.getPlanet(id)
            .then(planet => this.onPlanetLoaded(planet))
            .catch(this.onError);

    }

    

    render = () => {
        const { planet, loading, error } = this.state;

        const hasData = !(error || loading);

        const errorView = error ? <ErrorMessage /> : null;
        const spinner = loading ? <Spinner /> : null;
        const data = hasData ? <PlanetView planet={planet} /> : null;


        return (
            <div className='random-planet jumbotron d-flex'>
                {errorView}
                {spinner}
                {data}
            </div>
        )
    }

}

const PlanetView = ({ planet }) => {

    const { id, name, population, rotationPeriod, diameter } = planet;

    return (
        <React.Fragment>
            <img className='random-planet__img'
                src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}></img>
            <div className='random-planet__info'>
                <h4>{name}</h4>
                <ul className='list-group'>
                    <li className='list-group-item'>
                        <span>Population: </span>
                        <span>{population}</span>
                    </li>
                    <li className='list-group-item'>
                        <span>Rotation period: </span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className='list-group-item'>
                        <span>Diameter: </span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
}