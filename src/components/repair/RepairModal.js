import React, {useState, useCallback, useEffect } from 'react';
import {Modal, Button} from 'react-bootstrap'; 
import RepairCard from './RepairCard';
import {deleteRepair, getRepairByLicensePlate} from '../../services/repairs';
import { faWindowRestore } from '@fortawesome/free-solid-svg-icons';

export default function RepairModal(props) {



    const deleteHistory = async (value) => {
        deleteRepair(JSON.stringify(value)).then(response => {
            window.location.reload();
        })
    }

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
                    <RepairCard callback={(value) => deleteHistory(value)} key={repair.rId} data={repair}/>
                )}
            </Modal.Body>
            <Modal.Footer>
            <Button variant='success'>Add</Button>
            <Button variant='secondary' onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );

    
    
  }