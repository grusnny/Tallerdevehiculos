import React, { Component } from 'react';
import {Card, Button, ListGroup} from 'react-bootstrap';
import Modal from '../owner/OwnerModal';

export default class CardVehicle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }

    setModalShow(value){
        this.setState({isOpen:value});
    }

    render() {
        return (
                
            <Card style={{margin: 10, flex:1, width: '20rem' }}>
                <Card.Header> Placa: {this.props.data.licensePlate}</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>Propietario: 
                        <Card.Link onClick={()=>this.setModalShow(true)}> {this.props.data.owner.name}</Card.Link>
                    </ListGroup.Item>
                    <ListGroup.Item>Color: {this.props.data.color}</ListGroup.Item>
                    <ListGroup.Item>Marca: {this.props.data.mark}</ListGroup.Item>
                    <ListGroup.Item>Tipo: {this.props.data.type}</ListGroup.Item>
                    <ListGroup.Item>Modelo: {this.props.data.modelNumber}</ListGroup.Item>
                    <ListGroup.Item>Fecha de admision: {this.props.data.admissionDate}</ListGroup.Item>
                    <ListGroup.Item>
                        Historial:
                        <Card.Link href=''> ver mas</Card.Link>
                    </ListGroup.Item>
                </ListGroup>
                <Modal data={this.props.data.owner} show={this.state.isOpen} onHide={()=>this.setModalShow(false)}/>
            </Card>
        );
    }
}