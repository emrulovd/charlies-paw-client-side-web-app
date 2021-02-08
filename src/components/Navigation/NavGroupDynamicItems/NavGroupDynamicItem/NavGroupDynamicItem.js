import React from 'react';

import classes from './NavGroupDynamicItem.module.css';

const navGroupDynamicItem = (props) => {
    return(
        <li className={classes.NavigationItem}>
            <a
             href = {props.link}> {props.children} </a>
        </li>
    )
}

export default navGroupDynamicItem;