import React from 'react';
import './App.css';
import { createStore } from 'redux';

function App() {
  return <div className="App">Hello</div>;
}

export default App;

// Store

// Action Increment
const Increment = () => {
  return {
    type: 'INCREMENT'
  };
};

const decrement = () => {
  return {
    type: 'DECREMENT'
  };
};

//Reducer
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;

    case 'DECREMENT':
      return state - 1;

    case 'default':
      return state;
  }
};

let store = createStore(counter);

store.subscribe(() => console.log(store.getState()));
//Dispatch

store.dispatch(Increment());
store.dispatch(decrement());
