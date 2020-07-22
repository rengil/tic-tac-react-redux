import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import TicTacToe from './containers/TicTacToe';
import { BrowserRouter, Route, IndexRoute  } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import './styles/style.scss';
import './styles/bulma.scss';
import { loadCSS } from 'fg-loadcss';

/* eslint-disable no-underscore-dangle */
const store = createStore(
    reducers,
    applyMiddleware(thunk),

);


const App: React.FC = () => {

  React.useEffect(() => {
    const node = loadCSS(
      'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );

    return () => {
      node.parentNode && node.parentNode.removeChild(node);
    };
  }, []);

  return (
    <BrowserRouter><Provider store={store}>
       <Route path="/" component={TicTacToe}></Route>
    </Provider> </BrowserRouter>
  );
};

export default App;
