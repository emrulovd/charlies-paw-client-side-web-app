import React from 'react';

import AdminDogsItems from './AdminDogsItems/AdminDogsItems'; 

const adminDogs = (props) => {
    return(
        <div>
            <AdminDogsItems 
            dogs={props.dogs} 
            history = {props.history}
            deleteDogHandler = {props.deleteDogHandler}
            updateExistingDogHandler = {props.updateExistingDogHandler}/>
        </div>  
    )
}

export default adminDogs;