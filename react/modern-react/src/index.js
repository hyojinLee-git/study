import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import Counter from './component/start/2021-06-03/Counter';
//import './exercise.js';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './module/index';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools());
console.log(store.getState());
const listener = () => {
  const state = store.getState();
  console.log(state);
};

//구독 해제
const unsubscribe = store.subscribe(listener);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
