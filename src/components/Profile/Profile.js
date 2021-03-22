import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';

import Favouirites from '../../containers/User/Favourites/Favourites';
import Profile from '../../containers/User/Profile/Profile';

const profile  = (props) => {

    const routes = (
        <Switch>
                <Route path="/profile/favourites" component={Favouirites}/>
                <Route path="/profile" component={Profile}/>
        </Switch>
    )

    return(
        <div>
            { props.isAuth? routes : <Redirect to="/"/>}            
        </div>
    )
}

const mapStateToProps = state => {
    return{
        isAuth: state.auth.token !== null
    }
}

export default connect(mapStateToProps)(profile);