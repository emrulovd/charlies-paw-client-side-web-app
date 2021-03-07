import React from 'react';

import {Route, Switch} from 'react-router-dom';

import AuthSignup from '../../containers/Authentication/AuthSignup/AuthSignup';

const signup = () => {
    return(
        <div>
           <Switch>
               <Route path="/auth/signup" component = {AuthSignup}/>
           </Switch>
        </div>
    )
}


export default signup;