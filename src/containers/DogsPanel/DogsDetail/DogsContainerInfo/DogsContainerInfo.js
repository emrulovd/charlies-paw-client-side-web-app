import React from 'react';

import {Col} from 'react-bootstrap';

import classes from './DogsContainerInfo.module.css';

const dogsContainerInfo = (props) => {
    return(
        <div className={classes.Container}>
            <img src={props.image} alt="dog"/>
            <Col>
                
            </Col>
        </div>
    )
}

export default dogsContainerInfo;