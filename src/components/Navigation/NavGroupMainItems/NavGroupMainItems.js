import React from 'react';

import NavGroupMainItem from './NavGroupMainItem/NavGroupMainItem';
import classes from './NavGroupMainItems.module.css';

const navGroupMainItems = () => {
    return(
        <ul className={classes.NavigationItems}>
            <NavGroupMainItem link="/" exact>Home</NavGroupMainItem>
            <NavGroupMainItem link="/dogs-list">Dogs List</NavGroupMainItem>
            <NavGroupMainItem link="/about">About</NavGroupMainItem>
            <NavGroupMainItem link="/contact">Contact</NavGroupMainItem>
        </ul>
    )
}


export default navGroupMainItems;