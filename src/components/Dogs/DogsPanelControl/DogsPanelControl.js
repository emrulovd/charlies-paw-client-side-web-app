import React from 'react';

import {Container, Row, Col} from 'react-bootstrap';
import classes from './DogsPanelControl.module.css'

import DogsList from './Dogs-list/Dogs-List';
import Filter from './Filter/Filter';
import SearchBar from '../SearcBar/SearchBar';

const dogsPanel = (props) => {
    return(
        <Container fluid className={classes.DogsPanelControl}>
            <Row>
                <Col sm={2}>
                    <Filter dogs={props.dogsMain} filterInputHandler={props.filterInputHandler} rangeValue={props.rangeValue}/>
                </Col>
                <Col>
                    <Row>
                    <SearchBar searchValue = {props.searchDogHandler}/>
                    </Row>
                    <DogsList dogs={props.dogs} newDogHandler = {props.newDogHandler}/>
                </Col>
            </Row>
        </Container>
    )
}


export default dogsPanel;