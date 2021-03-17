import React from 'react';

import {Col} from 'react-bootstrap';
import classes from './ContactLocationInfo.module.css';

const contactLocationInfo = (props) => {
    return(
        <Col>
        <section className={classes.Paragraph}>
            <h6>{props.location}</h6>
            <p>{props.address}</p>
            <p>{props.phone}</p>
            <p>{props.email}</p>
        </section>
        </Col>
    )
}

export default contactLocationInfo;