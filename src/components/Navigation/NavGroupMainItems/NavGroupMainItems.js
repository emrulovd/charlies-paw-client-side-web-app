import React from 'react';

import NavGroupMainItem from './NavGroupMainItem/NavGroupMainItem';
import classes from './NavGroupMainItems.module.css';

const navGroupMainItems = () => {
    return(
        <ul className={classes.NavigationItems}>
            <NavGroupMainItem link="/" active={true}>Home</NavGroupMainItem>
            <NavGroupMainItem link="/dogs">Dogs List</NavGroupMainItem>
            <NavGroupMainItem link="/about">About</NavGroupMainItem>
        </ul>
    )
}


export default navGroupMainItems;