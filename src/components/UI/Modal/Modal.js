import React from 'react'; 

import classes from './Modal.module.css';

const modal = (props) => {
    return(
        <div
        style={{
            transform: props.show ? "translateY(20)" : "translateY(-120vh)",
            // opacity: props.show ? "1" : "0"
        }}>
            <div className={classes.Modal}>
                {console.log("SHOW: " + props.show)}
                {props.children}
            </div>
        </div>
    ) 
} 

export default modal; 