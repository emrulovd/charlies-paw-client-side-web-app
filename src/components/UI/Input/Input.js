import React from 'react';

import classes from './Input.module.css';

const input = (props) => {
    let inputElement = null;
    const inputClasses = [classes.InputElement];
    let validationError = null;
    if(props.invalid && props.shouldValidate && props.touched){
        inputClasses.push(classes.Invalid);
        validationError = <p>Please enter a valid value!</p>;
    }

    switch( props.elementType ){
        case ('input'):
            inputElement = <input
            className={inputClasses.join(' ')}
            {...props.elementConfig}
            value = {props.value}
            onChange = {props.changed}/>; //distribute the props in order easily to pass the attributes needed on the element
            break;
        case ('textarea'):
            inputElement = <textarea 
            {...props.elementConfig}
            value = {props.value}
            onChange = {props.changed}/>;
            break;
        default:
            inputElement = <input 
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value = {props.value}
                onChange = {props.changed}/>;
        
    }
    return(
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
            {validationError}
        </div>    
    )
}

export default input;