import React, {useEffect, useState} from 'react';
import {Modal, Button, Form, Row, Col} from 'react-bootstrap'; 
import {postVehicle, updateVehicle} from '../../services/vehicles';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';


export default function AddNewVehicle(props) {
    const [licensePlate, setLicensePlate] = new useState('');
    const [type, setType] = new useState('');
    const [mark, setMark] = new useState('');
    const [color, setColor] = new useState('');
    const [modelNumber, setModelNumber] = new useState('');
    const [uId, setUId] = new useState('');
    const [id, setId] = new useState('');
    const [name, setName] = new useState('');
    const [lastName, setLastName] = new useState('');
    const [telephone, setTelephone] = new useState('');
    const [email, setEmail] = new useState('');
    const [isEditing , setIsEditing] = new useState(false);
    const [isBuilding , setIsBuilding] = new useState(true);
    const [creationDate, setCreationDate] = new useState('');
    



    const submit = e => {
        e.preventDefault();
        var date = (new Date()).toLocaleString();

        if(licensePlate === '' && type ==='' && mark ==='' && color ==='' && modelNumber==='' &&
            id ==='' && name ==='' && lastName==='' && telephone==='' && email ==='' ){

            alert('Missing fields to fill');
        }else{
            const createVehicle = {
                licensePlate,
                owner: {
                    uId,
                    id,
                    name,
                    lastName,
                    telephone,
                    email,
                    creationDate
                },
                type,
                mark,
                modelNumber,
                color,
                admissionDate: date
            }
            if(isEditing){
                updateVehicle(JSON.stringify(createVehicle)).then(response => {
                    window.location.reload();
                })
            }else{
                postVehicle(JSON.stringify(createVehicle)).then(response => {
                    window.location.reload();
                    
                })
            }
            
        }
    }

    useEffect(() => {
        if(props.data && isBuilding){
            setVehicles();
            setIsBuilding(false);
        }
    })

    const setVehicles = async () => {
        setLicensePlate(props.data.licensePlate);
        setType(props.data.type);
        setMark(props.data.mark);
        setModelNumber(props.data.modelNumber);
        setColor(props.data.color);
        setUId(props.data.owner.uId);
        setId(props.data.owner.id);
        setName(props.data.owner.name);
        setLastName(props.data.owner.lastName);
        setTelephone(props.data.owner.telephone);
        setEmail(props.data.owner.email);
        setIsEditing(true);
    };

    const setOwner = (value) => {
        if(value != null){
            setUId(value.uId);
            setId(value.id);
            setName(value.name);
            setLastName(value.lastName);
            setTelephone(value.telephone);
            setEmail(value.email);
            setCreationDate(value.creationDate);
        }
        
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
                            {isEditing
                                ? <Form.Control disabled={true} id="licensePlate" placeholder="License plate" value={licensePlate} onChange={e => setLicensePlate(e.target.value)}/>
                                : <Form.Control id="licensePlate" placeholder="License plate" value={licensePlate} onChange={e => setLicensePlate(e.target.value)}/>
                            }
                        </Col>
                        <Col>
                            <Form.Control id="type" placeholder="Type of vehicle" value={type} onChange={e => setType(e.target.value)} />
                        </Col>
                        <Col>
                            <Form.Control id="mark" placeholder="Mark" value={mark} onChange={e => setMark(e.target.value)}/>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col>
                            <Form.Control id="model" placeholder="Model number" value={modelNumber} onChange={e => setModelNumber(e.target.value)}/>
                        </Col>
                        <Col>
                            <Form.Control id="color" placeholder="Color" value={color} onChange={e => setColor(e.target.value)}/>
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
                        {!isEditing && 
                            <Autocomplete
                                id="combo-box-owners"
                                onChange={(event, value) => setOwner(value)}
                                options={props.owners}
                                getOptionLabel={(option) => option.email}
                                renderInput={(params) => <TextField {...params} label="Select an owner" variant="outlined" />}
                            />
                        }
                        </Col>
                        <Col>
                            <Form.Control disabled={true} id="id" placeholder="ID"  value={id} onChange={e => setId(e.target.value)}/>
                        </Col>
                        <Col>
                            <Form.Control disabled={true} id="email" placeholder="Email"  value={email} onChange={e => setEmail(e.target.setEmail)}/>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col>
                            <Form.Control disabled={true} id="name" placeholder="Name"  value={name} onChange={e => setName(e.target.value)}/>
                        </Col>
                        <Col>
                            <Form.Control disabled={true} id="lastname" placeholder="Lastname"  value={lastName} onChange={e => setLastName(e.target.value)}/>
                        </Col>
                        <Col>
                            <Form.Control disabled={true} id="telephone" placeholder="Telephone"  value={telephone} onChange={e => setTelephone(e.target.value)}/>
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
