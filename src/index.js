import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";


import Title from './components/Title';
import DragonList from './components/DragonList';
import './styles.css';

const store = createStore

function App() {
  return (
    <div className="App">
      <Title />
      <DragonList />
    </div>
  );
}

// Step 1: create the Redux store

// Step 2: Provide the store

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
