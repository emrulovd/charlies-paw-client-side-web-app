import React from 'react';

import AdminUserItems from './AdminUserItems/AdminUserItems'; 

const adminUsers = (props) => {
    return(
        <div>
            <AdminUserItems 
            users={props.users}
            role = {props.role} 
            roleConfig = {props.roleConfig} 
            roleInputHandler = {props.roleInputHandler}
            roleRequestSubmitHandler = {props.roleRequestSubmitHandler}/>
        </div>
    )
}

export default adminUsers;