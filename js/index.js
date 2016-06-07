// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import '../css/styles.css';

import store from './store/store';

import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router';

import App from './components/App';
import Chat from './components/Chat/Chat';

// var str: number = 'hello world!';

const routes = {
  path: '/',
  component: App,
  indexRoute: { component: Chat },
  childRoutes: [
    {
    	path: 'chat',
      component: Chat
    }
  ]
};

ReactDOM.render((
	<Provider store={store}>	
	  <Router routes={routes} history={browserHistory} />
 	</Provider>
), document.getElementsByClassName('root')[0]);

