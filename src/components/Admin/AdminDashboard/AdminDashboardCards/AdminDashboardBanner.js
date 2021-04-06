import React from 'react';

import {Container, Row, Col } from 'react-bootstrap'; 
import Card from '../../../UI/Card/Card';
import classes from './AdminDashboardBanner.module.css';

const adminDashboardCards = (props) => {
    return(
        <div>
            <Container>
                <Card dogs_number = {props.dogs_number}/>
            </Container>
        </div>
    )
}


export default adminDashboardCards; 