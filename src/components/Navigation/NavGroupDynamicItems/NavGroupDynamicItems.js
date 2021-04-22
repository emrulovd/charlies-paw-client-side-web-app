import React, {useState} from 'react';
import { connect } from 'react-redux';

import NavGroupDynamicItem from './NavGroupDynamicItem/NavGroupDynamicItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faPaw, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { Dropdown, Badge } from 'react-bootstrap';
import profile from '../../../assets/profile.png'
import classes from './NavGroupDynamicItems.module.css';

const NavGroupDynamicItems = (props) => {
    const [iconActive, setIconActive] = useState(false);

    const changeIconColor = () => {
        if(window.scrollY >=80){
            setIconActive(true);
        }else{
            setIconActive(false);
        }
    }

    window.addEventListener('scroll', changeIconColor);

    const dropdown = (
            <Dropdown >
                <Dropdown.Toggle  split variant="transparent" id="dropdown-custom" />
                <Dropdown.Menu className={classes.DropdownMenu} bsPrefix>
                    { props.isAdmin ? <NavGroupDynamicItem link="/admin/dashboard">Admin</NavGroupDynamicItem> : null}
                    <NavGroupDynamicItem link="/logout">Logout</NavGroupDynamicItem>
                </Dropdown.Menu>
            </Dropdown>
    )
    return(
        <div>
            { props.isAuth ? 
                <ul className={classes.NavigationItems}>
                     {/* <NavGroupDynamicItem link="/contact">Contact</NavGroupDynamicItem> */}
                     <NavGroupDynamicItem>
                         <span className={!iconActive ? classes.PawIcon : classes.PawIconActive}>
                             <FontAwesomeIcon icon={faPaw}  onClick = {props.getNotificationBlock}/>
                             {props.status ? <Badge variant="secondary">New</Badge> : null}
                        </span>
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
                         {dropdown}
                </ul>
                :
            <ul className={classes.NavigationItems}>
                <NavGroupDynamicItem link="/auth/login" active={true}>Login</NavGroupDynamicItem>
                <NavGroupDynamicItem link="/auth/signup">Signup</NavGroupDynamicItem>
            </ul>
             }
       </div>
    )
}


const mapStateToProps = state => {
    return{
        status: state.dg.notification_status
    }
}

export default connect(mapStateToProps)(NavGroupDynamicItems);