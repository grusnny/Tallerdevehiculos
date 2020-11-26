import React, { Component } from 'react';
import {Card, Button, ListGroup} from 'react-bootstrap';

export default class CardVehicle extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div align='center'>
                <Card style={{ width: '20rem' }}>
                    <Card.Header> PLACA: </Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Propietario: </ListGroup.Item>
                        <ListGroup.Item>Color: </ListGroup.Item>
                        <ListGroup.Item>Marca: </ListGroup.Item>
                        <ListGroup.Item>
                            Historial: 
                            <Card.Link href=''> ver mas</Card.Link>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </div>
        );
    }
}