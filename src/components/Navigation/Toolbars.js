import React, {useState} from 'react';

import NavGroupMainItems from './NavGroupMainItems/NavGroupMainItems';
import NavGroupDynamicItems from './NavGroupDynamicItems/NavGroupDynamicItems';
import Logo from '../Logo/Logo';
import classes from './Toolbars.module.css'

const Toolbar = (props) => {
    const [navbar, setNavbar] = useState(false);


    const changeBackground = () => {
        if(window.scrollY >= 80){
            setNavbar(true);
        }else{
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    return(
        <header className={navbar ? classes.Active : classes.Toolbar}>
            <nav>
                <NavGroupMainItems/>
            </nav>
            <Logo className={classes.Logo}/>
            <nav>
                <NavGroupDynamicItems isAuth={props.isAuth} isAdmin = {props.isAdmin}/>
            </nav>
        </header>
    )
}

export default Toolbar;