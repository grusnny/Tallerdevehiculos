import React from 'react';
import {Modal, Button} from 'react-bootstrap'; 

export default function OwnerModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.data.name} {props.data.lastName}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>User ID: {props.data.uId}</div>
          <div>ID: {props.data.id}</div>
          <div>Telephone: {props.data.telephone}</div>
          <div>Email: {props.data.email}</div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }