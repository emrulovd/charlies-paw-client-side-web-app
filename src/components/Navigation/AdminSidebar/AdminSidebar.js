import React from 'react'; 
import { NavLink } from 'react-router-dom';

import classes from './AdminSidebar.module.css';
import Logo from '../../Logo/Logo';


const adminSidebar = () => {
    return(
        <div className={classes.SideBar}>
                <div className={classes.Logo}><Logo/></div>
                <ul>
                    <NavLink to="/admin/dashboard">Dahsboard</NavLink>
                    <NavLink to="/admin/users">Users</NavLink>
                    <NavLink to="/admin/dogs">Dogs</NavLink>
                    <NavLink to="/admin/messages">Messages</NavLink>
                </ul>
                <div className={classes.Exit}>
                    <NavLink to="/">back to home</NavLink>
                </div>
        </div>
    )
}


export default adminSidebar;