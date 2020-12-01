import React, {useEffect, useState} from 'react';
import {Modal, Button, Form, Row, Col} from 'react-bootstrap'; 
import {postRepair, updateRepair} from '../../services/repairs';


export default function AddNewRepair(props) {

    
    const [repairBy, setRepairBy] = new useState('');
    const [repairDate, setRepairDate] = new useState('');
    const [state, setState] = new useState('');
    //const [listStates, setListStates] = new useState([]);
    //const [spareParts, setSpareParts] = new useState([]);
    const [cost, setCost] = new useState('');
    //const [partsCost, setPartsCost] = new useState([]);
    const [otherCosts, setOtherCosts] = new useState('');
    const [inCharge, setInCharge] = new useState('');
    const [isEditing, setIsEditing] = new useState(false);
    const [isBuilding, setIsBuilding] = new useState(true);
    const [rId, setRId] = new useState('');
    const licensePlateVehicle = props.licenseplatevehicle;
    



    const submit = e => {
        e.preventDefault();
        if(repairBy ==='' && state ==='' && cost==='' && otherCosts ==='' && inCharge===''){
            alert('Missing fields to fill');
        }else{
            
            if(isEditing){
                const createRepair = {
                    rId,
                    repairDate,
                    repairBy,
                    licensePlateVehicle,
                    state,
                    listStates: [0],
                    spareParts: [0],
                    cost,
                    partsCost: [0],
                    otherCosts,
                    inCharge
                }
                console.log(createRepair);
                updateRepair(JSON.stringify(createRepair)).then(response => {
                    window.location.reload();
                })
            }else{
                const createRepair = {
                    repairDate,
                    repairBy,
                    licensePlateVehicle,
                    state,
                    listStates: [0],
                    spareParts: [0],
                    cost,
                    partsCost: [0],
                    otherCosts,
                    inCharge
                }
                console.log(createRepair);
                postRepair(JSON.stringify(createRepair)).then(response => {
                    window.location.reload();
                })
            }
            
        }
    }

    useEffect(() => {
        if(props.data && isBuilding){
            setRepair();
            setIsBuilding(false);
        }
    })

    const setRepair = async () => {
        setRepairDate(props.data.repairDate);
        setRepairBy(props.data.repairBy);
        setState(props.data.state);
        setCost(props.data.cost);
        setOtherCosts(props.data.otherCosts);
        setInCharge(props.data.inCharge);
        setIsEditing(true);
        setRId(props.data.rId);
    };

    return (
        
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add new Repair for {licensePlateVehicle}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <br/>
                    <Row>
                        <Col>
                            <Form.Control id="repairDate" placeholder="Repair Date" value={repairDate} onChange={e => setRepairDate(e.target.value)}/>
                        </Col>
                        <Col>
                            <Form.Control id="repairBy" placeholder="Repair By" value={repairBy} onChange={e => setRepairBy(e.target.value)}/>
                        </Col>
                        <Col>
                            <Form.Control id="state" placeholder="Current State" value={state} onChange={e => setState(e.target.value)}/>
                        </Col>
                        
                    </Row>
                    <br/>
                    <Row>
                        <Col>
                            <Form.Control id="cost" placeholder="Cost" value={cost} onChange={e => setCost(e.target.value)}/>
                        </Col>
                        <Col>
                            <Form.Control id="otherCost" placeholder="Other Cost" value={otherCosts} onChange={e => setOtherCosts(e.target.value)}/>
                        </Col>
                        <Col>
                            <Form.Control id="inCharge" placeholder="In Charge" value={inCharge} onChange={e => setInCharge(e.target.value)}/>
                        </Col>
                    </Row>
                    <br/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant='danger' onClick={props.onHide}>Cancel</Button>
            <Button type='submit' variant='success' onClick={submit}>Save</Button>
            </Modal.Footer>
        </Modal>
    );
}