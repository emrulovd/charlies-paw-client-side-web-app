import React from 'react';

import AdminDogsItems from './AdminDogsItems/AdminDogsItems'; 

const adminDogs = (props) => {
    return(
        <div>
            <AdminDogsItems dogs={props.dogs}/>
        </div>  
    )
}

export default adminDogs;