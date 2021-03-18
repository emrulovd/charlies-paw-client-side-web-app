import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Favouirites from '../../containers/User/Favourites/Favourites';

const profile  = () => {
    return(
        <Switch>
            <Route path="/profile/favourites" component={Favouirites}/>
        </Switch>
    )
}

export default profile;