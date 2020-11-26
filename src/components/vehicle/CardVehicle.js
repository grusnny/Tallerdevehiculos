import React, { Component } from 'react';
import {Card, Button, ListGroup} from 'react-bootstrap';

export default class CardVehicle extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        console.log(this.props.data);
        return (
            <Card style={{ margin: 10, flex:1, width: '20rem' }}>
                <Card.Header> PLACA: {this.props.data.placa}</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>Propietario: 
                        <Card.Link href=''> {this.props.data.propietario.nombre}</Card.Link>
                    </ListGroup.Item>
                    <ListGroup.Item>Color: {this.props.data.Color}</ListGroup.Item>
                    <ListGroup.Item>Marca: {this.props.data.marca}</ListGroup.Item>
                    <ListGroup.Item>Tipo: {this.props.data.tipo}</ListGroup.Item>
                    <ListGroup.Item>Modelo: {this.props.data.modelo}</ListGroup.Item>
                    <ListGroup.Item>
                        Historial: 
                        <Card.Link href=''> ver mas</Card.Link>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        );
    }
}