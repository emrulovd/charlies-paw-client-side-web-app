import React from 'react';

import classes from './FooterNavigation.module.css';


const footerNavigation = () => {
    return(
        <div className={classes.FooterNavigation}>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/dogs-list">Dogs List</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </div>
    )
}

export default footerNavigation;