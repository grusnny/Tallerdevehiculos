import React, {Component, useState} from 'react';
import {Modal, Button, Form, Row, Col} from 'react-bootstrap'; 
import { render } from 'react-dom';

export default function AddNewVehicle(props) {

    const [license, setLicense] = new useState('');


    const submit = e => {
        e.preventDefault();
        console.log(license);
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add new car
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Modal.Title>
                        Car information
                    </Modal.Title>
                    <br/>
                    <Row>
                        <Col>
                            <Form.Control id="licensePlate" placeholder="License plate" value={license} onChange={e => setLicense(e.target.value)}/>
                        </Col>
                        <Col>
                            <Form.Control id="type" placeholder="Type of vehicle"/>
                        </Col>
                        <Col>
                            <Form.Control id="mark" placeholder="Mark"/>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col>
                            <Form.Control id="model" placeholder="Model number"/>
                        </Col>
                        <Col>
                            <Form.Control id="color" placeholder="Color"/>
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                    <br/>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Owner information
                    </Modal.Title>
                    <br/>
                    <Row>
                        <Col>
                            <Form.Control id="uId" placeholder="Username"/>
                        </Col>
                        <Col>
                            <Form.Control id="id" placeholder="ID"/>
                        </Col>
                        <Col>
                            <Form.Control id="email" placeholder="Email"/>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col>
                            <Form.Control id="name" placeholder="Name"/>
                        </Col>
                        <Col>
                            <Form.Control id="lastname" placeholder="Lastname"/>
                        </Col>
                        <Col>
                            <Form.Control id="telephone" placeholder="Telephone"/>
                        </Col>
                    </Row>
                </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant='danger' onClick={props.onHide}>Cancel</Button>
            <Button type='submit' variant='success' onClick={submit}>Save</Button>
            </Modal.Footer>
        </Modal>
    );
}
