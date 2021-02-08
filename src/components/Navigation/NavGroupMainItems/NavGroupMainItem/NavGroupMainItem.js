import React, {useState} from 'react';

import classes from './NavGroupMainItem.module.css';


const NavGroupMainItem = (props) => {
    const [navItems, setNavItems] = useState(false);

    const changeItemsColor = () => {
        if(window.scrollY >=500){
            setNavItems(true);
        }else{
            setNavItems(false);
        }
    }

    window.addEventListener('scroll', changeItemsColor);

    return(
        <li className={navItems ? classes.ActiveNavigationItem : classes.NavigationItem}>
            <a
             href = {props.link}
             className={props.active ? classes.active : null}> {props.children} </a>
        </li>
    )
}

export default NavGroupMainItem;