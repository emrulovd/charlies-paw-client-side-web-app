import React from 'react';

import NavGroupDynamicItem from './NavGroupDynamicItem/NavGroupDynamicItem';
import classes from './NavGroupDynamicItems.module.css';

const navGroupDynamicItems = (props) => {
    return(
        <div>
            { props.isAuth ? 
                <NavGroupDynamicItem link="/logout">Logout</NavGroupDynamicItem>
                :
            <ul className={classes.NavigationItems}>
                <NavGroupDynamicItem link="/auth/login" active={true}>Login</NavGroupDynamicItem>
                <NavGroupDynamicItem link="/auth/signup">Signup</NavGroupDynamicItem>
            </ul>
             }
       </div>
    )
}


export default navGroupDynamicItems;