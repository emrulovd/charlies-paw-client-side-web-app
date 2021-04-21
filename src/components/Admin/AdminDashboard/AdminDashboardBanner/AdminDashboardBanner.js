import React from 'react';

import {Container, Row, Col } from 'react-bootstrap'; 
import Card from '../../../UI/Card/Card';
import classes from './AdminDashboardBanner.module.css';

const adminDashboardCards = (props) => {
    return(
        <div  className={classes.Container}>
            <Container>            
                <div className={classes.Card}>
                    <p className={classes.Amount}>{props.number}</p>
                    <p className={classes.City}>London</p>
                </div>
            </Container>
        </div>
    )
}


export default adminDashboardCards; 