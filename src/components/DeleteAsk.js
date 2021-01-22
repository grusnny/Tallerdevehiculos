import React from 'react';
import {Modal, Button} from 'react-bootstrap';

export default function DeleteAsk(props) {
    return (
        <Modal
            {...props}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            delete=''
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>Delete</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Are you sure?
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={props.onHide}>No</Button>
                <Button variant="danger" onClick={props.delete}>Yes</Button>
            </Modal.Footer>
        </Modal>
    );
}

