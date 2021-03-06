import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.min.css';
import authReducer from './store/reducers/auth';
import dogsReducer from './store/reducers/dogs';
import contactReducer from './store/reducers/contact'; 
import usrReducer from './store/reducers/user';
import adminReducer from './store/reducers/admin';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({ 
      auth: authReducer,
      dg: dogsReducer,
      cnt: contactReducer,
      user: usrReducer,
      admin: adminReducer
})

const store = createStore(rootReducer, composeEnhancers(
      applyMiddleware(thunk)
));

  
const app = ( // Check react doc for React.StrictMode
      <Provider store={store}>
            <BrowserRouter>
                  <App/>
            </BrowserRouter>
      </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
