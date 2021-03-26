import React from 'react';

import { ListGroup } from 'react-bootstrap';
import Button from '../../../../UI/Button/Button';
import classes from './AdminDogsItem.module.css';

const adminDogsItem = (props) => {
    return(
        <div>
             <ListGroup.Item>
                <section className={classes.Container}>
                    <img src={props.image} alt=""/>
                    <h5>{props.name}</h5>
                    <p>{props.breed}</p>
                    <p>{props.location}</p>
                    <Button click = { () => props.deleteDogHandler(props._id)}>Delete</Button>
                    <Button click = { () => props.updateExistingDogHandler(props.index)}>Update</Button>
                </section>
            </ListGroup.Item>
        </div>
    )
}

export default adminDogsItem;