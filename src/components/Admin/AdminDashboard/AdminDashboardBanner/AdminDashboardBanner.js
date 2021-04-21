import React from 'react';

import {Container} from 'react-bootstrap'; 
import classes from './AdminDashboardBanner.module.css';

const adminDashboardCards = (props) => {
    return(
        <div  className={classes.Container}>
            <Container>            
                <div className={classes.Card}>
                    <p className={classes.Amount}>{props.number}</p>
                    <p className={classes.City}>{props.city}</p>
                </div>
            </Container>
        </div>
    )
}


export default adminDashboardCards; 