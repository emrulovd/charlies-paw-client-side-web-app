import React from 'react';

import classes from './Input.module.css';

const input = (props) => {
    let inputElement = null;

    switch(props.inputtype){
        case ('input'):
            inputElement = <input className={classes.InputElement} {...props}/>; //distribute the props in order easily to pass the attributes needed on the element
            break;
        case ('textarea'):
            inputElement = <textarea {...props}/>;
            break;
        default:
            inputElement = <input className={classes.InputElement} {...props}/>;
        
    }
    return(
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>    
    )
}

export default input;