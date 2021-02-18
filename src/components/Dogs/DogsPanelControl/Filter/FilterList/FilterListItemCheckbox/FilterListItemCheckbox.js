import React from 'react';



const filterListItemCheckbox = (props) => {
    return(
        <div>
            <label>{props.data}</label>
            <input type="checkbox" value={props.data} onChange={(event) => props.filterInputHandler(event)}/>
        </div>
    )
}


export default filterListItemCheckbox;