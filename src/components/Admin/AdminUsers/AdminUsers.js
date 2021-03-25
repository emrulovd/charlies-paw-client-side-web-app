import React from 'react';

import AdminUserItems from './AdminUserItems/AdminUserItems'; 

const adminUsers = (props) => {
    return(
        <div>
            <AdminUserItems 
            users={props.users} 
            roleConfig = {props.roleConfig} 
            roleInputHandler = {props.roleInputHandler}
            roleRequestSubmitHandler = {props.roleRequestSubmitHandler}/>
        </div>
    )
}

export default adminUsers;