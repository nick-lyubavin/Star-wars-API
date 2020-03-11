import React, { Component } from 'react';

import Header from '../header';

import PeoplePage from '../people-page';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import PlanetDetails from '../planet-details';
import RandomPlanet from '../random-planet';
import StarshipDetails from '../starship-details';
import ErrorButton from '../error-button';
import ErrorMessage from '../error-message';
import SwapiService from '../../services/swapi-service';

import './app.css';


export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        showRandomPlanet: true,
        hasError: false,
    }

    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            }
        });
    };

    componentDidCatch = () => {
        console.log('componentDidCatch');

        this.setState({ hasError: true });
    }

    render() {

        if (this.state.hasError) {
            return <ErrorMessage />
        }

        const planet = this.state.showRandomPlanet ?
            <RandomPlanet /> :
            null;

        return (
            <div>
                <Header />
                {planet}

                <button
                    className="toggle-planet btn btn-warning btn-lg"
                    onClick={this.toggleRandomPlanet}>
                    Toggle Random Planet
                </button>

                <ErrorButton />

                <PeoplePage
                    getData={this.swapiService.getAllPeople}
                    renderItem={item => `${item.name} (${item.gender}, ${item.birthYear}`}
                />

                <PeoplePage
                    getData={this.swapiService.getAllPlanets}
                    renderItem={item => `${item.name} (${item.population}, ${item.rotationPeriod}`}
                />

                <PeoplePage
                    getData={this.swapiService.getAllStarships}
                    renderItem={item => `${item.name} (${item.model}, ${item.manufacturer}`}
                />

                {/* <div className='row mb2'>
                    <div className='col-md-6'>
                        <ItemList
                            onItemSelected={this.onPersonSelected}
                            getData={this.swapiService.getAllPlanets}
                            renderItem={item => {return (item.name + ' ()' )}}
                        />
                    </div>

                    <div className='col-md-6'>
                        <PersonDetails
                            selectedPersonId={this.state.selectedPersonId}
                        />
                    </div>
                </div> */}

                {/* <div className='row mb2'>
                    <div className='col-md-6'>
                        <ItemList
                            onItemSelected={this.onPersonSelected}
                            getData={this.swapiService.getAllStarships}
                            renderItem={item => {return (item.name + '()' )}}
                        />
                    </div>

                    <div className='col-md-6'>
                        <PersonDetails
                            selectedPersonId={this.state.selectedPersonId}
                        />
                    </div>
                </div> */}

            </div>
        );
    }

}