import React from 'react';
import { Link } from 'react-router-dom';

import classes from './InfoBar.module.css';
import closeIcon from '../../../icons/closeIcon.png';
import onlineIcon from '../../../icons/onlineIcon.png'


const infoBar = ({room, onDisconnectHandler}) => {

    return(
        <div className={classes.infoBar}>
            <div className={classes.leftInnerContainer}>
                <img className={classes.onlineIcon} src={onlineIcon} alt=""/>
                <h3>{room}</h3>
            </div>
            <div className={classes.rightInnerContainer}>
                <Link to="/profile/messages" ><img src={closeIcon} alt="" onClick={onDisconnectHandler}/></Link>
            </div>
        </div>
    )
}

export default infoBar;