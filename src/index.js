// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// Our app will:
// Track Balance
// Increment balance when deposit
// Decrement balance when withdrawal

/*
  Setting up Redux
  1. Create object to represent the store
  2. List all ways that state can change
  3. Write function to update and return new state.
*/


//1. Create object to represent the store
const defaultState = {
  balance: 0
};

// 2. List all ways that state can change
const actionIncrement = {
  type: 'increment',  
}

const actionDecrement = {
  type: 'decrement',

}

// 3. Write function to update and return new state.
function account(state = defaultState, action) {
  switch (action.type) {
    case 'increment':
      return{
        balance: state.balance + 1
      }
    case 'decrement':
      return{
        balance: state.balance -1
      }
    default:
      return state;
  }
}

console.log("Starting banking app");

// set up store by passing a reducer
const store = createStore(account);
console.log(store.getState());

// subscribe to changes in the store
store.subscribe(() => {
  console.log('=== Store updated! ===');
  console.log(store.getState());
});


// this test in the browser dev tools by typing store.dispatch(actionIncrement or Decrement)
window.store = store;
window.actionIncrement = actionIncrement;
window.actionDecrement = actionDecrement;

