import React from 'react'; 
import { NavLink } from 'react-router-dom';

import classes from './AdminSidebar.module.css';

const adminSidebar = () => {
    return(
        <div className={classes.SideBar}>
                <ul>
                    <NavLink to="/admin/dashboard">Dahsboard</NavLink>
                    <NavLink to="/admin/users">Users</NavLink>
                    <NavLink to="/admin/dogs">Dogs</NavLink>
                    <NavLink to="/admin/messages">Messages</NavLink>
                    <NavLink to="/">back to home</NavLink>
                </ul>
        </div>
    )
}


export default adminSidebar;