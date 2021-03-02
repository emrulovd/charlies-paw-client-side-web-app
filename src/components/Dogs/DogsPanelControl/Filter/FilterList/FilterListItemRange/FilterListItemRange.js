import React from 'react';

import classes from './FilterListItemRange.module.css';

const filterListItemRange = (props) => {
    return(
        <div className={classes.Container}>
            <h6>{props.rangeValue}</h6>
            <section>
                <label>0</label>
                <input type="range" min="0" max="15" onChange={(event) => {props.filterInputHandler(event)}}/>
                <label>15</label>
            </section>
        </div>
    )
}

export default filterListItemRange;