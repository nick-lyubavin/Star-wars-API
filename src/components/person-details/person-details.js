import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import ErrorButton from '../error-button';

import './person-details.css';

export default class PersonDetails extends Component {

  swapiService = new SwapiService();

  state = {
    person: null,
    loading: false,
  }

  updatePerson() {
    const { selectedPersonId } = this.props;
    if (!selectedPersonId) {
      console.log('no id');
      return;
    }

    this.setState({ loading: true });

    this.swapiService.getPerson(selectedPersonId)
      .then(person => {
        this.setState({
          person,
          loading: false
        });
      });

  }

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedPersonId !== prevProps.selectedPersonId) {
      this.updatePerson();
    }
  }

  render() {

    const hasData = !!this.state.person;

    let content = null;
    if (!hasData && !this.state.loading) {
      content = <span>Select hero from list</span>
    } else if (this.state.loading) {
      content = <Spinner />;
    } else {
      content = <PersonView person={this.state.person} />
    }    

    return (
      <div className="person-details card">      
        {content}
      </div>
    )

  }

}

const PersonView = (props) => {

  const { person: { id, name, gender, eyeColor, birthYear } } = props;

  return (
    <React.Fragment>
      <img className="person-image"
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
        alt="character" />
      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Gender</span>
            <span>{gender}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Birth Year</span>
            <span>{birthYear}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Eye Color</span>
            <span>{eyeColor}</span>
          </li>
        </ul>
        <ErrorButton />
      </div>
          
    </React.Fragment>
  );
}