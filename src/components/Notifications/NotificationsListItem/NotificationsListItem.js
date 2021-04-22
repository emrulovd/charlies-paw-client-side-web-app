import React from 'react';

import { Row, Col } from 'react-bootstrap';
import classes from './NotificationsListItem.module.css';

const notificationsListItem = (props) => {
    return(
        <div className={classes.NotificationItem}>
            <Row>
                <img src={props.image} alt=""/>
                <Col>
                    <h6>{props.dogName}</h6>
                </Col>
            </Row>
        </div>
    )
} 

export default notificationsListItem;