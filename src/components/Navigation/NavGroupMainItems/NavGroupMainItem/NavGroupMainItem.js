import React from 'react';

import classes from './NavGroupMainItem.module.css';

const navGroupMainItem = (props) => {
    return(
        <li className={classes.NavigationItem}>
            <a
             href = {props.link}
             className={props.active ? classes.active : null}> {props.children} </a>
        </li>
    )
}

export default navGroupMainItem;