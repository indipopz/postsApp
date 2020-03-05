import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
// import { Router, browserHistory } from 'react-router';
import routes from './routes';
import promise from 'redux-promise';
import App from './components/app';
import { composeWithDevTools } from 'redux-devtools-extension';


const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(promise))(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
    {/* <Router history={browserHistory} routes={routes} /> */}
  </Provider>
  , document.querySelector('.container'));
