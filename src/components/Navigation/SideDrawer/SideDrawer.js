import React from 'react';

import Logo from '../../Logo/Logo';
import NavGroupMainItems from '../NavGroupMainItems/NavGroupMainItems';
import NavGroupDynamicItems from '../NavGroupDynamicItems/NavGroupDynamicItems'
import classes from './SideDrawer.module.css';

const sideDrawer = (props) => {
    return(
        <div className={classes.SideDrawer}>
            <Logo/>  
            <nav>
                <NavGroupMainItems/>
                <NavGroupDynamicItems/>
            </nav>  
        </div>
    )
}

export default sideDrawer;