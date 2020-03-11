import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';

import './item-list.css';

export default class ItemList extends Component {   

    state = {        
        itemList: null,
        }

    componentDidMount() {
        const { getData } = this.props;
        
        getData().then(itemList => {
            this.setState({
                itemList,
            });
        });
    }

    render() {
        const { itemList } = this.state;

        if (!itemList) {
            return <Spinner />;
        }

        const itemListView = itemList.map(item => {
            
            const {renderItem} = this.props;
            debugger;
            const label = renderItem(item);

            return (           
                <li className='list-group-item'
                    key={item.id}
                    onClick={() => this.props.onItemSelected(item.id)}
                >
                    {label}
                </li>
            );
        });

        return (
            <ul className='list-item list-group'>
                {itemListView}
            </ul>
        )
    }
}