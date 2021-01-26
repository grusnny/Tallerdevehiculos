import React, { Component } from 'react';
import VehicleCard from './VehicleCard';
import { deleteVehicle, getAllVehicles } from '../../services/vehicles';
import { FloatingButton, Item } from "react-floating-button";
import AddNew from '../utility/images/AddIcon.jpg';
import AddNewVehicle from './AddNewVehicle';
import { getUserByRole } from '../../services/users';

export default class ListVehicle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
            cars: [],
            isOpenNewCar: false,
            cars2: [],
            owners:[]
        }
    }

    async componentDidMount() {
        await getUserByRole("Owner").then((ResponseJson) => {
            this.setState({
                owners: ResponseJson
            });
        });
        await getAllVehicles().then((responseJson) => {
            this.setState({
                cars: responseJson
            })
        });
        this.setState({isLoading:true});
    }

    render() {
        if(this.state.isLoading){
            return (
                <div className="container-fluid">
                    <div className="row mx-3 my-4">
                        {this.state.cars.map(car =>
                            <div key={car.licensePlate} className="col-sm-6 col-md-4 col-lg-3 my-1">
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
                        <AddNewVehicle owners={this.state.owners} show={this.state.isOpenNewCar} onHide={() => this.setAddNewModal(false)} />
                    </div>
                </div>
            );
        }else{
            return(<progress class="progress is-large is-link" max="100">15%</progress>);
        }
        
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