import React, { Component } from 'react';
import {Card, ListGroup, Button} from 'react-bootstrap';

export default class RepairCard extends Component {
    constructor(props) {
        super(props)
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
                    </ListGroup.Item>
                    <Card.Footer>
                        <Button  variant="primary" style={{marginRight: '10px'}} size="sm" >Edit</Button>
                        <Button  onClick={() => this.deleteRepair()} variant="danger" size="sm" >Delete</Button>
                    </Card.Footer>
                        
                </ListGroup>
            </Card>
        );
    }
}