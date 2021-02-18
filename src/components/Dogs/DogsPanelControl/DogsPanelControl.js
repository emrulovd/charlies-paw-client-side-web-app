import React from 'react';

import {Container, Row, Col} from 'react-bootstrap';
import classes from './DogsPanelControl.module.css'

import DogsList from './Dogs-list/Dogs-List';
import Filter from './Filter/Filter';

const dogsPanel = (props) => {
    return(
        <Container fluid className={classes.DogsPanelControl}>
            <Row>
                <Col sm={2}>
                    <Filter dogs={props.dogs}/>
                </Col>
                <Col>
                    <DogsList dogs={props.dogs}/>
                </Col>
            </Row>
        </Container>
    )
}


export default dogsPanel;