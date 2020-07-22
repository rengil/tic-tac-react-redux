import React from 'react';
import { Provider } from 'react-redux';
import TicTacToe from './containers/TicTacToe';
import { BrowserRouter, Route  } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import './styles/style.scss';
import './styles/bulma.scss';

/* eslint-disable no-underscore-dangle */
const store = createStore(
    reducers,
    applyMiddleware(thunk),

);


const App: React.FC = () => {
  return (
    <BrowserRouter><Provider store={store}>
       <Route path="/" component={TicTacToe}></Route>
    </Provider> </BrowserRouter>
  );
};

export default App;
