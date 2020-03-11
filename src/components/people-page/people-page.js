import React, { Component } from 'react';

import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorMessage from '../error-message/error-message';
// import SwapiService from '../../services/swapi-service';

import './people-page.css';

export default class PeoplePage extends Component {

    // swapiService = new SwapiService();

    state = {
        selectedPersonId: 3,
        hasError: false,        
    }

    componentDidCatch() {
        this.setState({hasError: true});
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPersonId: id,
        });
    }

    render() {
        if (this.state.hasError) {
            return <ErrorMessage />;
        }

        return (
            <div className='page row mb2'>
                <div className='col-md-6'>
                    <ItemList 
                    onItemSelected={this.onPersonSelected}
                    getData={this.props.getData}
                    renderItem={this.props.renderItem}
                    />
                </div>

                <div className='col-md-6'>
                    <PersonDetails
                        selectedPersonId={this.state.selectedPersonId}
                    />                    
                </div>
            </div>
        )
    }
}