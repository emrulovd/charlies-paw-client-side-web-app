import React from 'react';

import classes from './FooterNavigation.module.css';


const footerNavigation = () => {
    return(
        <div className={classes.FooterNavigation}>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">Dogs List</a></li>
                <li><a href="/">About</a></li>
            </ul>
        </div>
    )
}

export default footerNavigation;