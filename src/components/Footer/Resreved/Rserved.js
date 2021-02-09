import React from 'react';

import classes from './Reserved.module.css';
import logo from '../../../assets/logo2.png';

const reserved = () => {
    return(
        <div className={classes.Reserved}>
            <img src={logo} alt="logo" width="64px" />
            <p>&copy; 2021 Denis Emrulov, All rights reserved<br/>Designed by Ralitsa Stefanova</p>
        </div>
    )   
}

export default reserved;