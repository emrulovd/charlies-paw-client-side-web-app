import React, {useState} from 'react';

import NavGroupMainItems from './NavGroupMainItems/NavGroupMainItems';
import NavGroupDynamicItems from './NavGroupDynamicItems/NavGroupDynamicItems';
import Logo from '../Logo/Logo';
import classes from './Toolbars.module.css'

const Toolbar = () => {
    const [navbar, setNavbar] = useState(false);


    const changeBackground = () => {
        if(window.scrollY >= 500){
            setNavbar(true);
        }else{
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    return(
        <header style = {{transition: "500ms"}}className={navbar ? classes.Active : classes.Toolbar}>
            <nav>
                <NavGroupMainItems/>
            </nav>
            <Logo/>
            <nav>
                <NavGroupDynamicItems/>
            </nav>
        </header>
    )
}

export default Toolbar;