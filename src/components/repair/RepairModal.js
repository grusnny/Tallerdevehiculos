import React, { useState } from 'react';
import {Modal, Button} from 'react-bootstrap'; 
import RepairCard from './RepairCard';
import {deleteRepair} from '../../services/repairs';
import AddNewRepair from './AddNewRepair';

export default function RepairModal(props) {
    const [isOpenEdit, setIsOpenEdit] = new useState(false);


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
                {props.data.map((repair, index) =>
                    <div key={index}>
                        <RepairCard callback={(value) => deleteHistory(value)} key={repair.id} data={repair}/>
                    </div>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={()=>setIsOpenEdit(true)} variant='success'>Add</Button>
                <Button variant='secondary' onClick={props.onHide}>Close</Button>
            </Modal.Footer>
            <AddNewRepair licenseplatevehicle={props.licenseplatevehicle} show={isOpenEdit} onHide={() => setIsOpenEdit(false)} />
        </Modal>
    );

    
    
  } 