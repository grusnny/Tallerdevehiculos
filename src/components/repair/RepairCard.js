import React, { Component } from 'react';
import {Card, ListGroup, Button} from 'react-bootstrap';
import AddNewRepair from './AddNewRepair';

export default class RepairCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpenEdit: false,
        }
    }

    deleteRepair(){
        this.props.callback(this.props.data);
    }

    render() {
        return (
            <Card border={'dark'} style={{margin: 'auto', marginBottom: 20, flex:1 , width: '20rem'}}>
                <Card.Header as="h6" style={{backgroundColor: '#BAE4FF', color: 'black'}}> ID de reparacion: {this.props.data.rId}</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <div><b>Repair date:</b> {this.props.data.repairDate}</div>
                        <div><b>Repair by:</b> {this.props.data.repairBy}</div>
                        <div><b>Status:</b> {this.props.data.state}</div>
                        <div><b>Cost:</b> {this.props.data.cost}</div>
                        <div><b>Other Costs:</b> {this.props.data.otherCosts}</div>
                        <div><b>inCharge:</b> {this.props.data.inCharge}</div>
                    </ListGroup.Item>
                    <Card.Footer>
                        <Button  onClick={() => this.setEditModal(true)} variant="primary" style={{marginRight: '10px'}} size="sm" >Edit</Button>
                        <Button  onClick={() => this.deleteRepair()} variant="danger" size="sm" >Delete</Button>
                    </Card.Footer>
                </ListGroup>
                <AddNewRepair licenseplatevehicle={this.props.data.licensePlateVehicle} data={this.props.data} show={this.state.isOpenEdit} onHide={()=>this.setEditModal(false)}/>
            </Card>
        );
    }

    setEditModal(value){
        this.setState({isOpenEdit:value});
    }
}