import React from 'react';

import NavGroupDynamicItem from './NavGroupDynamicItem/NavGroupDynamicItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faPaw, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Dropdown } from 'react-bootstrap';
import profile from '../../../assets/profile.png'
import classes from './NavGroupDynamicItems.module.css';

const navGroupDynamicItems = (props) => {
    const dropdown = (
            <Dropdown >
                <Dropdown.Toggle  split variant="transparent" id="dropdown-custom" />

                <Dropdown.Menu className={classes.DropdownMenu} bsPrefix>
                    <NavGroupDynamicItem link="/logout">Option</NavGroupDynamicItem>
                    <NavGroupDynamicItem link="/logout">Option</NavGroupDynamicItem>
                    <NavGroupDynamicItem link="/logout">Logout</NavGroupDynamicItem>
                </Dropdown.Menu>
            </Dropdown>
    )
    return(
        <div>
            { props.isAuth ? 
                <ul className={classes.NavigationItems}>
                     {/* <NavGroupDynamicItem link="/contact">Contact</NavGroupDynamicItem> */}
                     <NavGroupDynamicItem link="/profile/unknown">
                         <FontAwesomeIcon icon={faPaw}/>
                     </NavGroupDynamicItem> 
                     <NavGroupDynamicItem link="/profile/favourites">
                         <FontAwesomeIcon icon={faHeart}/>
                     </NavGroupDynamicItem> 
                     <NavGroupDynamicItem link="/profile/messages">
                         <FontAwesomeIcon icon={faEnvelope}/>
                     </NavGroupDynamicItem> 
                     <NavGroupDynamicItem link="/profile">
                            <img src={profile} alt=""/>
                     </NavGroupDynamicItem>
                     <NavGroupDynamicItem >
                         {dropdown}
                     </NavGroupDynamicItem> 
                   

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