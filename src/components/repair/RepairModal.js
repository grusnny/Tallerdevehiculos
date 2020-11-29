import React from 'react';
import {Modal, Button} from 'react-bootstrap'; 
import RepairCard from './RepairCard';

export default function RepairModal(props) {
    return (
        <Modal
            {...props}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header style={{backgroundColor: '#BAE4FF'}} closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Reparaciones
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.data.map(repair =>
                    <RepairCard key={repair.rId} data={repair}/>
                )}
            </Modal.Body>
            <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
    
  }