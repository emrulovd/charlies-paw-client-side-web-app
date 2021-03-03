import React from 'react';

import classes from './FilterListItemCheckbox.module.css'

const filterListItemCheckbox = (props) => {
    return(
        <div className={classes.Container}>
            <ul>
                <li>
                    {
                        props.value.map((v, _) => {
                            return(
                                <div key={v}>
                                    <input  type="checkbox" value={v} onChange={(event) => props.filterInputHandler(event)}/>
                                    <label>{v}</label>
                                </div>
                            )
                        })
                    }
                </li>
            </ul>
        </div>
    )
}


export default filterListItemCheckbox;