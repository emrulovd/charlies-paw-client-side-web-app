import React from 'react';



const filterListItem = (props) => {
    return(
        <div>
            <label>{props.data}</label>
            <input type="checkbox" value={props.data}/>
        </div>
    )
}


export default filterListItem;