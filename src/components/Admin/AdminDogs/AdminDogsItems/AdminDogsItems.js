import React from 'react';

import { ListGroup, Row, Col } from 'react-bootstrap';
import AdminDogsItem from './AdminDogsItem/AdminDogsItem';
import Button from '../../../UI/Button/Button';
import classes from './AdminDogsItems.module.css';

const adminDogsItems = (props) => {
    const addDogHandler = () => { // Need to pass the history 
        props.history.replace('/admin/dogs/edit-dog');
        // console.log(props.history)
    }
    return(
        <div className={classes.Container}>
                <div className={classes.Headers}>
                    <Row>
                        <Col sm={3}>Name:</Col>
                        <Col sm={2}>Breed:</Col>
                        <Col >Location:</Col>
                        <Col/>
                        <Col/>
                    </Row>
                </div>
            <ListGroup variant="flush">
                {   
                    props.dogs.map((dog, index) => {
                        return(
                            <AdminDogsItem
                                key={index}
                                _id = {dog._id}
                                index = {index}
                                name={dog.dogName}
                                location={dog.location}
                                image = {dog.image}
                                breed={dog.breed}
                                deleteDogHandler = {props.deleteDogHandler}
                                updateExistingDogHandler = {props.updateExistingDogHandler}
                            />
                        )
                    })
                }
            </ListGroup>
            <Button click={addDogHandler} >Add new dog</Button>
        </div>
    )
}

export default adminDogsItems;