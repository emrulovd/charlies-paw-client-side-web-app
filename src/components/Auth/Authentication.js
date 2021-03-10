import React from 'react';

import {Route, Switch} from 'react-router-dom';

import AuthSignup from '../../containers/Authentication/AuthSignup/AuthSignup';
import AuthLogin from '../../containers/Authentication/AuthLogin/AuthLogin';

const signup = () => {
    return(
        <div>
           <Switch>
               <Route path="/auth/login" component={AuthLogin}/>
               <Route path="/auth/signup" component = {AuthSignup}/>
           </Switch>
        </div>
    )
}


export default signup;