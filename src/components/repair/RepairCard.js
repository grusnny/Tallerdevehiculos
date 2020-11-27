import React, { Component } from 'react';
import {Card, ListGroup} from 'react-bootstrap';

export default class RepairCard extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Card style={{margin: 10, flex:1 , width: '20rem'}}>
                <Card.Header> ID de reparacion: {this.props.data.rId}</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <div>Fecha de reparacion: {this.props.data.repairDate}</div>
                        <div>Reparado por: {this.props.data.repairBy}</div>
                        <div>Estado: {this.props.data.state}</div>
                        <div>Costo: {this.props.data.cost}</div>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        );
    }
}