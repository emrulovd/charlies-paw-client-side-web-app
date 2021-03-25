import React from 'react';

import { ListGroup } from 'react-bootstrap';
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
                </section>
            </ListGroup.Item>
        </div>
    )
}

export default adminDogsItem;