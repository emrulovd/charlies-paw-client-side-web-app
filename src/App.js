import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import HomeContainer from './components/Home/HomeContainer';
import DogsPanel from './containers/DogsPanel/DogsPanel';
import About from './components/About/About';

class App extends Component {
  render(){
    return(
      <div>
          <Layout>
              <Switch>
                  <Route path="/dogs-list" component={DogsPanel} />
                  <Route path="/about" component={About} />
                  <Route path="/" exact component={HomeContainer} />
              </Switch>
          </Layout>
      </div>
    )
  }
}

export default App;
