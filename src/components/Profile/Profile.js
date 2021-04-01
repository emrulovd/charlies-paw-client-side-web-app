import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import Favouirites from '../../containers/User/Favourites/Favourites';
import Profile from '../../containers/User/Profile/Profile';
import Chat from '../../containers/Chat/Chat';
import ProfileBanner from '../Profile/ProfileBanner/ProfileBanner';
import ProfileController from './ProfileControllers/ProfileControllers';
import HomeContainer from '../Home/HomeContainer';

const profile  = (props) => {

    
    let routes = null;
    if(props.isAuthenticated){
        routes = (
            <Switch>
                    <Route path="/profile/chat" component={Chat}/>
                    <Route path="/profile/favourites" component={Favouirites}/>
                    <Route path="/profile" component={Profile}/>
            </Switch>
        )
    }else{
        routes = <Route path="/" component={HomeContainer}/>
    }


    return(
        <div>
            <ProfileBanner/>
            <ProfileController/>
            {routes}            
        </div>
    )
}

const mapStateToProps = state => {
    return{
        isAuthenticated: state.auth.token !== null
    };
};

export default connect(mapStateToProps)(profile);