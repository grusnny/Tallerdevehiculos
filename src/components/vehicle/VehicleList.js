import React, { Component } from 'react';
import VehicleCard from './VehicleCard';
import { deleteVehicle, getAllVehicles } from '../../services/vehicles';
import { FloatingButton, Item } from "react-floating-button";
import AddNew from '../utility/images/AddIcon.jpg';
import AddNewVehicle from './AddNewVehicle';

export default class ListVehicle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cars: [],
            isOpenNewCar: false,
            cars2: []
        }
    }

    async componentDidMount() {
        await getAllVehicles().then((responseJson) => {
            this.setState({
                cars: responseJson
            })
        });
    }

    render() {
        return (
            <div class="container-fluid">
                <div class="row mx-3 my-4">
                    {this.state.cars.map(car =>
                        <div class="col-sm-6 col-md-4 col-lg-3 my-1">
                            <VehicleCard callback={(value) => this.delete(value)} key={car.licensePlate} data={car} />
                        </div>
                    )}
                    <FloatingButton
                    >
                        <Item
                            imgSrc={AddNew}
                            backgroundColor='#3265CE'
                            onClick={() => this.setAddNewModal(true)}
                        />
                    </FloatingButton>
                    <AddNewVehicle show={this.state.isOpenNewCar} onHide={() => this.setAddNewModal(false)} />
                </div>
            </div>
        );
    }

    delete(value) {
        deleteVehicle(JSON.stringify(value)).then(response => {
            window.location.reload();
        });
    }

    setAddNewModal(value) {
        this.setState({
            isOpenNewCar: value
        })
    }
}