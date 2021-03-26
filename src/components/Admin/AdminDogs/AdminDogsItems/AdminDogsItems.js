import React from 'react';

import { ListGroup } from 'react-bootstrap';
import AdminDogsItem from './AdminDogsItem/AdminDogsItem';
import Button from '../../../UI/Button/Button';

const adminDogsItems = (props) => {
    const addDogHandler = () => { // Need to pass the history 
        props.history.replace('/admin/dogs/edit-dog');
        // console.log(props.history)
    }
    return(
        <div>
            <Button click={addDogHandler} >Add new dog</Button>
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
        </div>
    )
}

export default adminDogsItems;