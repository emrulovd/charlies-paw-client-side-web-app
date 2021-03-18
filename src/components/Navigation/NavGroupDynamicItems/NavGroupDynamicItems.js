import React from 'react';

import NavGroupDynamicItem from './NavGroupDynamicItem/NavGroupDynamicItem';
import classes from './NavGroupDynamicItems.module.css';

const navGroupDynamicItems = (props) => {
    return(
        <div>
            { props.isAuth ? 
                <ul className={classes.NavigationItems}>
                     {/* <NavGroupDynamicItem link="/contact">Contact</NavGroupDynamicItem> */}
                     <NavGroupDynamicItem link="/profile/favourites">Favouirites</NavGroupDynamicItem>
                     <NavGroupDynamicItem link="/logout">Logout</NavGroupDynamicItem>

                </ul>
                :
            <ul className={classes.NavigationItems}>
                <NavGroupDynamicItem link="/contact">Contact</NavGroupDynamicItem>
                <NavGroupDynamicItem link="/auth/login" active={true}>Login</NavGroupDynamicItem>
                <NavGroupDynamicItem link="/auth/signup">Signup</NavGroupDynamicItem>
            </ul>
             }
       </div>
    )
}


export default navGroupDynamicItems;