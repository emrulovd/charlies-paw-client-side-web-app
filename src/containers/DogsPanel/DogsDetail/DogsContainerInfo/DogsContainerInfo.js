import React from 'react';
import { connect } from 'react-redux'; 

import { Col, Row, Container, Button } from 'react-bootstrap';

import DogsInfo from './DogsInfo/DogsInfo';
import classes from './DogsContainerInfo.module.css';

const dogsContainerInfo = (props) => {
    return(
        <div className={classes.Container}>
            <Container fluid>
                <Row >
                    <img src={props.image} alt="dog"/>
                    <Col>
                        <DogsInfo
                        dogName = {props.dogName}
                        age = {props.age}
                        location = {props.location}
                        size = {props.size}
                        breed = {props.breed}
                        discription = {props.discription}
                        />
                       { props.isAuth?  
                            <div className={classes.ButtonContainer}>
                                <Button variant="success" onClick = {props.updateDogHandler}>Update</Button>
                                <Button variant="danger" onClick={props.deleteDogHandler}>Delete</Button>
                            </div>
                            : null
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        isAuth: state.auth.token
    }
}

export default connect(mapStateToProps)(dogsContainerInfo);