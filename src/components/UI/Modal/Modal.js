import React, {useState} from 'react'; 

import {Modal} from 'react-bootstrap';
import Button from '../Button/Button';

const ModalUI = (props) => {

    return(
        <Modal
            show={props.show}
            backdrop="static"
            onHide={props.onContinueHandler}
            keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.children}
            </Modal.Body>
            <Modal.Footer>
                    <Button click={props.onContinueHandler}>Close</Button>
                    <Button click={props.onContinueHandler}>Continue</Button>
            </Modal.Footer>
      </Modal>

    ) 
} 

export default ModalUI; 