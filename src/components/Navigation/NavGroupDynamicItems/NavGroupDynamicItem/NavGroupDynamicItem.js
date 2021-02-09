import React, {useState} from 'react';

import classes from './NavGroupDynamicItem.module.css';

const NavGroupDynamicItem = (props) => {
    const [navItems, setNavItems] = useState(false);

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
            <a
             href = {props.link}> {props.children} </a>
        </li>
    )
}

export default NavGroupDynamicItem;