import React, { Component } from 'react';
import {Modal, Button} from 'react-bootstrap'; 
export default function MyVerticallyCenteredModal(props) {


    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.data.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Demas datos.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }