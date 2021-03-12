import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import HomeContainer from './components/Home/HomeContainer';
import DogsPanel from './containers/DogsPanel/DogsPanel';
import About from './components/About/About';
import Auth from './components/Auth/Authentication';
import AuthLogout from './containers/Authentication/AuthLogout/AuthLogout';
import Contact from './containers/Contact/Contact';
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
                  <Route path="/contact" component={Contact}/>
                  <Route path="/dogs-list" component={DogsPanel} />
                  <Route path="/auth" component={Auth} />
                  <Route path="/logout" component={AuthLogout} />
                  <Route path="/about" component={() => <About history={this.props.history}/>} />
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
