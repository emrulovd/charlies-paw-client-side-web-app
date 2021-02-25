import React from 'react';



const filterListItemCheckbox = (props) => {
    return(
        <div>
            {/* <label>{props.data}</label>
            <input type="checkbox" value={props.data} onChange={(event) => props.filterInputHandler(event)}/> */}
            <ul>
                <li>
                    <label>Coventry</label>
                    <input type="checkbox" value="Coventry" onClick={(event) => props.filterInputHandler(event)}/>
                </li>
                <li>
                    <label>Liverpool</label>
                    <input type="checkbox" value="Liverpool" onClick={(event) => props.filterInputHandler(event)}/>
                </li>
                <li>
                    <label>London</label>
                    <input type="checkbox" value="London" onClick={(event) => props.filterInputHandler(event)}/>
                </li>
                <li>
                    <label>York</label>
                    <input type="checkbox" value="York" onClick={(event) => props.filterInputHandler(event)}/>
                </li>
            </ul>
        </div>
    )
}


export default filterListItemCheckbox;