import React from 'react';

import { ListGroup, Row, Col } from 'react-bootstrap';
import Button from '../../../../UI/Button/Button';
import classes from './AdminDogsItem.module.css';

const adminDogsItem = (props) => {
    return(
        <div>
             <ListGroup.Item>
                <section className={classes.Container}>
                    <Row> 
                    <img src={props.image[0] !== "h"? `/uploads/${props.image}` : props.image} alt=""/>
                        <Col><h5>{props.name}</h5></Col>
                        <Col><p>{props.breed}</p></Col>
                        <Col><p>{props.location}</p></Col>
                        <Col><Button click = { () => props.updateExistingDogHandler(props.index)}>Update</Button></Col>
                        <Col><Button click = { () => props.deleteDogHandler(props._id)}>Delete</Button></Col>
                    </Row>
                </section>
            </ListGroup.Item>
        </div>
    )
}

export default adminDogsItem;