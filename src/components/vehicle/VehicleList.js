import React, { Component } from 'react';
import VehicleCard from './VehicleCard';
import { getAllVehicles } from '../../services/vehicles';

export default class ListVehicle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cars: [],
            update: false,
            cars2: []
        }
    }

    async componentDidMount(){
        await getAllVehicles().then((responseJson) => {
            this.setState({
                cars: responseJson
            })
        });
    }

    /*getCarList(){
        this.setState({
            update:true
        });
        firebase.auth().currentUser.getIdToken(true).then(function(idToken) {
            const url = 'https://run.mocky.io/v3/513fe8c4-4e1a-42d4-927e-14857a88b8b3';
            fetch(url, {
                method: 'GET',
                headers: new Headers({
                    'Content-type': 'application/json',
                    'idToken': idToken,
                }),
            }).then((Response) => Response.json())
            .then((ResponseJson) => {
                this.setState({
                    update:false,
                    cars: ResponseJson
                })
            });
        }.bind(this))
    }*/



    render() {
        return (
            <div style={{display: 'flex', flexDirection: 'row'}}>
                {this.state.cars.map(car => 
                    <VehicleCard key={car.licensePlate} data = {car} />
                )}
            </div>
        );
    }
}