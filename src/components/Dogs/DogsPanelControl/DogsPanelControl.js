import React from 'react';

import {Container, Row, Col} from 'react-bootstrap';
import classes from './DogsPanelControl.module.css'

const dogsPanel = (props) => {
    return(
        <Container fluid className={classes.DogsPanelControl}>
            <Row>
                <Col sm={2}>
                    <h1>Filter</h1>
                </Col>
                <Col>
                    <h1>Dogs-list</h1>
                </Col>
            </Row>
        </Container>
    )
}


export default dogsPanel;