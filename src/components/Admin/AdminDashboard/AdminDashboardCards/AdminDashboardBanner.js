import React from 'react';

import {Container, Row, Col } from 'react-bootstrap'; 
import Card from '../../../UI/Card/Card';
import classes from './AdminDashboardBanner.module.css';

const adminDashboardCards = (props) => {
    return(
        <div>
            <Container>
                <Card number = {props.number}/>
            </Container>
        </div>
    )
}


export default adminDashboardCards; 