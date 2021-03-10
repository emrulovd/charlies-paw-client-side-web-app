import React from 'react';
import { connect } from 'react-redux';

import Aux from '../../hoc/Auxiliary';
import Toolbar from '../Navigation/Toolbars';
import Footer from '../Footer/Footer';
import classes from './Layout.module.css';

const layout = (props) => {
    return(
        <Aux>
            <Toolbar isAuth = {props.isAuthenticated}/>
            <main className={classes.Layout}>
                {props.children}
            </main>
            <Footer/>
        </Aux>
        )
}

const mapStateToProps = state => {
    return{
        isAuthenticated: state.auth.token !== null
    };
};

export default connect(mapStateToProps)(layout);