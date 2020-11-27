import React, { Component } from 'react';
import {Card, ListGroup} from 'react-bootstrap';
import OwnerModal from '../owner/OwnerModal';
import { getRepairByLicensePlate } from '../../services/repairs';
import RepairModal from '../repair/RepairModal';

export default class CardVehicle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpenUser: false,
            isOpenHistory: false,
            repairs: []
        }
    }

    setModalUserShow(value){
        this.setState({isOpenUser:value});
    }

    setModalRepairShow(value){
        this.setState({
            isOpenHistory:value
        });
    }

    getRepairHistory(id=""){
        getRepairByLicensePlate(id).then((responseJson)=> {
            this.setState({
                repairs: responseJson
            })
        });
        this.setModalRepairShow(true);
    }

    render() {
        return (
                
            <Card style={{margin: 10, width: '20rem'}}>
                <Card.Header> Placa: {this.props.data.licensePlate}</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <div>
                            Propietario: 
                            <Card.Link onClick={()=>this.setModalUserShow(true)}> {this.props.data.owner.name}</Card.Link>
                        </div>
                        <div>Color: {this.props.data.color}</div>
                        <div>Marca: {this.props.data.mark}</div>
                    
                        <div>Tipo: {this.props.data.type}</div>
                        <div>Modelo: {this.props.data.modelNumber}</div>
                        <div>Fecha de admision: {this.props.data.admissionDate}</div>
                    
                        <div>Historial:
                            <Card.Link onClick={() => this.getRepairHistory(this.props.data.licensePlate)}> ver mas</Card.Link>
                        </div>
                    </ListGroup.Item>
                </ListGroup>
                <OwnerModal data={this.props.data.owner} show={this.state.isOpenUser} onHide={()=>this.setModalUserShow(false)}/>
                <RepairModal data={this.state.repairs} show={this.state.isOpenHistory} onHide={() => this.setModalRepairShow(false)}/>
            </Card>
        );
    }
}