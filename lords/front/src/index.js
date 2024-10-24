import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/reducer';
import thunkMiddleware from 'redux-thunk'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const withMiddleware = applyMiddleware(thunkMiddleware);
const etat=createStore(rootReducer, undefined, compose(withMiddleware));

ReactDOM.render(
  <Provider store={etat}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
