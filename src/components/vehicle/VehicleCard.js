import React, { Component } from 'react';
import {Button, Card, ListGroup} from 'react-bootstrap';
import OwnerModal from '../owner/OwnerModal';
import { getRepairByLicensePlate } from '../../services/repairs';
import RepairModal from '../repair/RepairModal';
import DeleteAsk from '../DeleteAsk';

export default class CardVehicle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpenUser: false,
            isOpenHistory: false,
            isOpenDelete: false,
            repairs: []
        }
    }

    render() {
        return (
            <Card border={'dark'} style={{margin: 10, width: '20rem'}}>
                <Card.Header as="h6" style={{backgroundColor: '#BAE4FF', color: 'black'}}> Placa: {this.props.data.licensePlate}</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <div>
                            <b>Propietario:</b> 
                            <Card.Link onClick={()=>this.setModalUserShow(true)}> {this.props.data.owner.name}</Card.Link>
                        </div>
                        <div><b>Color:</b> {this.props.data.color}</div>
                        <div><b>Marca:</b> {this.props.data.mark}</div>
                    
                        <div><b>Tipo:</b> {this.props.data.type}</div>
                        <div><b>Modelo:</b> {this.props.data.modelNumber}</div>
                        <div><b>Fecha de admision:</b> {this.props.data.admissionDate}</div>
                    
                        <div><b>Historial:</b>
                            <Card.Link onClick={() => this.getRepairHistory(this.props.data.licensePlate)}> Ver</Card.Link>
                        </div>
                    </ListGroup.Item>
                    <Card.Footer>
                        <Button variant="primary" style={{marginRight: '10px'}} size="sm" >Edit</Button>
                        <Button onClick={()=>this.setModalDeleteShow(true)} variant="danger" size="sm" >Delete</Button>
                    </Card.Footer>
                </ListGroup>
                <DeleteAsk delete={()=>this.deleteVehicle()} show={this.state.isOpenDelete} onHide={()=>this.setModalDeleteShow(false)} />
                <OwnerModal data={this.props.data.owner} show={this.state.isOpenUser} onHide={()=>this.setModalUserShow(false)}/>
                <RepairModal data={this.state.repairs} show={this.state.isOpenHistory} onHide={() => this.setModalRepairShow(false)}/>
            </Card>
        );
    }

    setModalUserShow(value){
        this.setState({isOpenUser:value});
    }

    setModalRepairShow(value){
        this.setState({
            isOpenHistory:value
        });
    }

    setModalDeleteShow(value){
        this.setState({
            isOpenDelete:value
        });
        
    }

    deleteVehicle(){
        this.setState({
            isOpenDelete:false,
        })
        this.props.callback(this.props.data);
    }

    getRepairHistory(id=""){
        getRepairByLicensePlate(id).then((responseJson)=> {
            this.setState({
                repairs: responseJson
            })
        });
        this.setModalRepairShow(true);
    }
}