import React from 'react';

import NavGroupMainItems from './NavGroupMainItems/NavGroupMainItems';
import classes from './Toolbars.module.css'

const toolbar = () => {
    return(
        <header className={classes.Toolbar}>
            <nav>
                <NavGroupMainItems/>
            </nav>
            <div>LOGO</div>
            <nav>Items Group 2</nav>
        </header>
    )
}

export default toolbar;