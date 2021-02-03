import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
import HomeContainer from './components/Home/HomeContainer';

class App extends Component {
  render(){
    return(
      <div>
          <Layout>
              <HomeContainer/>
          </Layout>
      </div>
    )
  }
}

export default App;
