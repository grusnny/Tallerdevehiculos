import React, { Component } from "react";
import VehicleCard from "./VehicleCardUser";
import { deleteVehicle, getAllVehicles } from "../../services/vehicles";
import { FloatingButton, Item } from "react-floating-button";
import { getUserByRole } from "../../services/users";

export default class ListVehicle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: [],
      isFilter: false,
      cars2: [],
      owners: [],
    };
  }

  async componentDidMount() {
    await getUserByRole("Owner").then((ResponseJson) => {
      this.setState({
        owners: ResponseJson,
      });
    });
    await getAllVehicles().then((responseJson) => {
      this.setState({
        cars: responseJson,
        
      });
    });
    this.state.cars.map((element) => {
      if (element.owner.id==123456) {
        this.state.cars2.push(element);
      }
    });
    this.setState({isFilter:true})
  }

  render() {
      if(this.state.isFilter){
        return (
            <div className="container-fluid">
              <div className="row mx-3 my-4">
                {this.state.cars2.map((car) => (
                  <div
                    key={car.licensePlate}
                    className="col-sm-6 col-md-4 col-lg-3 my-1"
                  >
                    <VehicleCard
                      callback={(value) => this.delete(value)}
                      key={car.licensePlate}
                      data={car}
                    />
                  </div>
                ))}
              </div>
            </div>
          );
      }else{
          return(<progress class="progress is-large is-info" max="100">60%</progress>)
      }
    
  }
}
