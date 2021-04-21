import React from 'react';

import { Row, Col } from 'react-bootstrap'; 
import classes from './AdminDashboardBannerGroup2.module.css';

const adminDashboardBannerGroup2 = (props) => {
    return(
        <div className={classes.LongCard}>
            <Row>
                    <div className={classes.InnerShortLongCard}>
                        <img className={classes.Icon} src={props.icon} alt=""/>
                    </div>
                    <div className={classes.Title}>
                        <p >{props.title}</p>
                    </div>
                    <div className={classes.InnerLongLongCard}>
                        <p>{props.number}</p>
                    </div>
            </Row>
        </div>
    )
} 

export default adminDashboardBannerGroup2;