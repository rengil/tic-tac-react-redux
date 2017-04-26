import 'babel-polyfill';
import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import TicTacToe from './containers/TicTacToe';
import { Router, Route, IndexRoute  } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import './styles/style.less';
import 'webpack-material-design-icons';

/* eslint-disable no-underscore-dangle */
const store = createStore(
    reducers,
    applyMiddleware(thunk),

);

const history = syncHistoryWithStore(browserHistory, store);

const routes =  <Route path="/" component={TicTacToe}></Route>;

render(<Provider store={store}>
        <Router history={history} routes={routes} />
    </Provider>,
    document.getElementById('here-is-page')
);
