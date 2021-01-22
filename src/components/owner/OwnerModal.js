import React from 'react';
import {Modal, Button} from 'react-bootstrap'; 

export default function OwnerModal(props) {
    return (
      <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header style={{backgroundColor: '#BAE4FF'}} closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.data.name} {props.data.lastName}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div><b>User ID:</b> {props.data.uId}</div>
          <div><b>ID:</b> {props.data.id}</div>
          <div><b>Telephone:</b> {props.data.telephone}</div>
          <div><b>Email:</b> {props.data.email}</div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }