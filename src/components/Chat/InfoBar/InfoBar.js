import React from 'react';

import classes from './InfoBar.module.css';
import closeIcon from '../../../icons/closeIcon.png';
import onlineIcon from '../../../icons/onlineIcon.png'


const infoBar = ({room}) => {

    return(
        <div className={classes.infoBar}>
            <div className={classes.leftInnerContainer}>
                <img className={classes.onlineIcon} src={onlineIcon} alt=""/>
                <h3>{room}</h3>
            </div>
            <div className={classes.rightInnerContainer}>
                <a href="/"><img src={closeIcon} alt=""/></a>
            </div>
        </div>
    )
}

export default infoBar;