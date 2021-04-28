import React from 'react';

import classes from './Input.module.css';

const input = (props) => {
    let inputElement = null;
    const inputClasses = [classes.InputElement];
    let validationError = null;

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
            className={ classes.TextElement }
            {...props.elementConfig}
            value = {props.value}
            onChange = {props.changed}/>;
            break;
        case ('select'):
            inputElement = (<select 
                className={ classes.SelectElement }
                value = {props.value}
                onChange = {props.changed}>
                    {props.elementConfig.options.map(opt => {
                        return(
                            <option key={opt.value} value={opt.value}>
                                {opt.displayValue}
                            </option>
                        )
                    })}
                </select>
            );
            break;
        case ('file'):
            inputElement =(
                <input type="file" value = {props.value} onChange = {props.changed}/>
            )
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
        </div>    
    )
}

export default input;