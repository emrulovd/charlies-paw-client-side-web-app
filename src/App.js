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
import AdminPanel from './containers/Admin/AdminPanel';
import Aux from './hoc/Auxiliary';


class App extends Component {
  componentDidMount(){
    this.props.onTryAutoSignup();
  }



  render(){
    return(
      <Aux>
        <div>
          <Switch>
            { this.props.isAdmin === 'admin' || this.props.isAdmin === 'employee' ? <Route path="/admin" component={AdminPanel} /> : null}
              <Layout>
                  <Switch >
                      <Route path="/profile" component={Profile}/>
                      <Route path="/contact" component={ContactContainer}/>
                      <Route path="/dogs-list" component={DogsPanel} />
                      <Route path="/auth" component={Auth} />
                      <Route path="/logout" component={AuthLogout} />
                      <Route path="/about" component={About}/>
                      <Route path="/" component={HomeContainer} />
                  </Switch>
              </Layout>
            </Switch>
        </div>
      </Aux>
    )
  }
}

const mapStateToProps = state => {
  return{
    isAdmin: state.auth.role,
  }
}

const mapDispatchToProps = dispatch => {
  return{
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
