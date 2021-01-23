import React, {useEffect, useState} from 'react';
import {Modal, Button, Form, Row, Col} from 'react-bootstrap'; 
import {postVehicle, updateVehicle} from '../../services/vehicles';
import Select from '@material-ui/core/Select';


export default function addNewUser(props) {

    
    
    const [uId, setUId] = new useState('');
    const [id, setId] = new useState('');
    const [name, setName] = new useState('');
    const [lastName, setLastName] = new useState('');
    const [telephone, setTelephone] = new useState('');
    const [email, setEmail] = new useState('');
    const [role, setRole] = new useState('Owner');
    const [isEditing , setIsEditing] = new useState(false);
    const [isBuilding , setIsBuilding] = new useState(true);
    //const [creationDate, setCreationDate] = new useState('');



    const submit = e => {
        // e.preventDefault();
        // if(uId==='' && id ==='' && name ==='' && lastName==='' && telephone==='' && email ===''){
        //     alert('Missing fields to fill');
        // }else{
        //     const createUser = {
        //             uId,
        //             id,
        //             name,
        //             lastName,
        //             telephone,
        //             email,
        //             role,
        //             creationDate: '11/12/2020 10:30'
                
        //     }
        //     if(isEditing){
               
        
        //     }else{
        //          console.log("create");
        //     }
        // }
    }

    useEffect(() => {
        if(props.data && isBuilding){
            setUser();
            setIsBuilding(false);
        }
    })

    const setUser = async () => {
        setUId(props.data.user.uId);
        setId(props.data.user.id);
        setName(props.data.user.name);
        setLastName(props.data.user.lastName);
        setTelephone(props.data.user.telephone);
        setEmail(props.data.user.email);
        setRole(props.data.user.role)
        setIsEditing(true);
    };

    const handleChange = (event) => {
        const value = event.target.value;
        setRole(value);
    };

    return (
        
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            
            <Modal.Body>
                <Form>
                    <br/>
                    <Modal.Title id="contained-modal-title-vcenter">
                        User information
                    </Modal.Title>
                    <br/>
                    <Row>
                        <Col>
                            <Form.Control id="uId" placeholder="Username" value={uId} onChange={e => setUId(e.target.value)}/>
                        </Col>
                        <Col>
                            <Form.Control id="id" placeholder="ID"  value={id} onChange={e => setId(e.target.value)}/>
                        </Col>
                        <Col>
                            <Form.Control id="email" placeholder="Email"  value={email} onChange={e => setEmail(e.target.setEmail)}/>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col>
                            <Form.Control id="name" placeholder="Name"  value={name} onChange={e => setName(e.target.value)}/>
                        </Col>
                        <Col>
                            <Form.Control id="lastname" placeholder="Lastname"  value={lastName} onChange={e => setLastName(e.target.value)}/>
                        </Col>
                        <Col>
                            <Form.Control id="telephone" placeholder="Telephone"  value={telephone} onChange={e => setTelephone(e.target.value)}/>
                        </Col>
                        <Col>
                            <Select
                                native
                                value={role}
                                onChange={handleChange}
                                inputProps={{
                                    name: 'role',
                                    id: 'role-native-simple',
                                }}
                                >
                                <option value={'Owner'}>Owner</option>
                                <option value={'Mechanic'}>Mechanic</option>
                            </Select>
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