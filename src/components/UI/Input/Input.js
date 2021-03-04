import React from 'react';

const input = (props) => {
    let inputElement = null;

    switch(props.inputType){
        case ('input'):
            inputElement = <input {...props}/>; //distribute the props in order easily to pass the attributes needed on the element
            break;
        case ('textarea'):
            inputElement = <textarea {...props}/>;
            break;
        default:
            inputElement = <input {...props}/>;
        
    }
    return(
        <div>
            <label>{props.label}</label>
            {inputElement}
        </div>    
    )
}

export default input;