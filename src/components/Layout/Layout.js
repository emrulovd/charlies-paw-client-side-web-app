import React from 'react';


import Aux from '../../hoc/Auxiliary';
import Toolbar from '../Navigation/Toolbars';
import classes from './Layout.module.css';

const layout = (props) => {
    return(
        <Aux>
            <Toolbar/>
            <main className={classes.Layout}>
                {props.children}
            </main>
        </Aux>
        )
}


export default layout;