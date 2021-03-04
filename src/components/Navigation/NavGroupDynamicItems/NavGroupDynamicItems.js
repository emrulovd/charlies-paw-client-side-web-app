import React from 'react';

import NavGroupDynamicItem from './NavGroupDynamicItem/NavGroupDynamicItem';
import classes from './NavGroupDynamicItems.module.css';

const navGroupDynamicItems = () => {
    return(
        <ul className={classes.NavigationItems}>
            <NavGroupDynamicItem link="/auth" active={true}>Login</NavGroupDynamicItem>
            <NavGroupDynamicItem link="/singup">Signup</NavGroupDynamicItem>
        </ul>
    )
}


export default navGroupDynamicItems;