import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import '../css/styles.css';

import store from './store/store';

import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router';

import App from './components/App';
import Chat from './components/Main/Chat/Chat';
import ChessField from './components/Main/ChessField/ChessField';

const routes = {
  path: '/',
  component: App,
  indexRoute: { component: ChessField },
  childRoutes: [
    { 
    	path: 'chess', 
    	component: ChessField 
    },
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

