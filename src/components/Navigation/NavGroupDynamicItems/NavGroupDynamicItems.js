import React from 'react';

import NavGroupDynamicItem from './NavGroupDynamicItem/NavGroupDynamicItem';
import classes from './NavGroupDynamicItems.module.css';

const navGroupDynamicItems = () => {
    return(
        <ul className={classes.NavigationItems}>
            <NavGroupDynamicItem link="/auth/login" active={true}>Login</NavGroupDynamicItem>
            <NavGroupDynamicItem link="/auth/signup">Signup</NavGroupDynamicItem>
        </ul>
    )
}


export default navGroupDynamicItems;