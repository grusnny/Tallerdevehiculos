import React, { Component } from 'react';
import {Card, ListGroup} from 'react-bootstrap';

export default class RepairCard extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Card border={'dark'} style={{margin: 'auto', marginBottom: 20, flex:1 , width: '20rem'}}>
                <Card.Header as="h6" style={{backgroundColor: '#BAE4FF', color: 'black'}}> ID de reparacion: {this.props.data.rId}</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <div><b>Fecha de reparacion:</b> {this.props.data.repairDate}</div>
                        <div><b>Reparado por:</b> {this.props.data.repairBy}</div>
                        <div><b>Estado:</b> {this.props.data.state}</div>
                        <div><b>Costo:</b> {this.props.data.cost}</div>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        );
    }
}