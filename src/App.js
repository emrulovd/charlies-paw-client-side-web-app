import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import HomeContainer from './components/Home/HomeContainer';
import DogsPanel from './containers/DogsPanel/DogsPanel';
import About from './components/About/About';
import Auth from './components/Auth/Authentication';
import AuthLogout from './containers/Authentication/AuthLogout/AuthLogout';
import ContactContainer from './components/Contact/ContactContainer';
import Profile from './components/Profile/Profile';
import * as actions from './store/actions/index';


class App extends Component {
  componentDidMount(){
    this.props.onTryAutoSignup();
  }



  render(){
    return(
      <div>
          <Layout>
              <Switch >
                  <Route path="/profile" component={Profile}/>
                  <Route path="/contact" component={ContactContainer}/>
                  <Route path="/dogs-list" component={DogsPanel} />
                  <Route path="/auth" component={Auth} />
                  <Route path="/logout" component={AuthLogout} />
                  <Route path="/about" component={About}/>
                  <Route path="/" exact component={HomeContainer} />
               </Switch>
          </Layout>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return{
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
  }
}

export default connect(null, mapDispatchToProps)(App);
