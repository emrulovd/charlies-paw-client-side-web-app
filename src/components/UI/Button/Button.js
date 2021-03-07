import React from 'react';

import classes from './Button.module.css'

const button = (props) => (
    <button 
    disabled = {props.disabled}
    onClick={props.click} 
    className={classes.Button}>{props.children}</button>
)

export default button;