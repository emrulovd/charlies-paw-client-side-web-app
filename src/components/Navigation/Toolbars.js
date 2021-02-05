import React from 'react';

import NavGroupMainItems from './NavGroupMainItems/NavGroupMainItems';
import NavGroupDynamicItems from './NavGroupDynamicItems/NavGroupDynamicItems';
import classes from './Toolbars.module.css'

const toolbar = () => {
    return(
        <header className={classes.Toolbar}>
            <nav>
                <NavGroupMainItems/>
            </nav>
            <div>LOGO</div>
            <nav>
                <NavGroupDynamicItems/>
            </nav>
        </header>
    )
}

export default toolbar;