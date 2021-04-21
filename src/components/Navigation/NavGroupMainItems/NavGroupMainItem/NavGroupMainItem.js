import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavGroupMainItem.module.css';


const NavGroupMainItem = (props) => {
    const [navItems, setNavItems] = useState(false);

    useEffect(() => {
        changeItemsColor();
        return () => {
          setNavItems({}); 
        };
      }, []);

    const changeItemsColor = () => {
        if(window.scrollY >=80){
            setNavItems(true);
        }else{
            setNavItems(false);
        }
    }

    window.addEventListener('scroll', changeItemsColor);

    return(
        <li className={navItems ? classes.ActiveNavigationItem : classes.NavigationItem}>
            <NavLink 
            to = {props.link}
            exact={props.exact}
            activeClassName={classes.active }> 
            {props.children}
             </NavLink>
        </li>
    )
}

export default NavGroupMainItem;