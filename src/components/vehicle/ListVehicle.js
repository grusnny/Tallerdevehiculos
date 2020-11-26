import React, { Component } from 'react';
import CardVehicle from './CardVehicle';

export default class ListVehicle extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <CardVehicle/>
            </div>
            
        );
    }
}