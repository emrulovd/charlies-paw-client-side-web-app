import React, {useState} from 'react';
import { connect } from 'react-redux';

import Aux from '../../hoc/Auxiliary';
import Toolbar from '../Navigation/Toolbars';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Footer from '../Footer/Footer';
import classes from './Layout.module.css';
import Notifications from '../../containers/Notifications/Notifications';

const Layout = (props) => {
    const [show, setShow] = useState(false);

    const getNotificationBlock = () => {
        if(!show){
            setShow(true);
        }else{
            setShow(false);
        }
    }

    return(
        <Aux>
            <Toolbar isAuth = {props.isAuthenticated} isAdmin = {props.isAdmin} getNotificationBlock = {getNotificationBlock}/>
            <SideDrawer/>
            { show ? 
                <Notifications/>
                : null
            }
            <main className={classes.Layout}>
                {props.children}
            </main>
            <Footer/>
        </Aux>
        )
}

const mapStateToProps = state => {
    return{
        isAuthenticated: state.auth.token !== null,
        isAdmin: state.auth.role !== 'user' || null,
    };
};

export default connect(mapStateToProps)(Layout);