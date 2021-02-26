import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider } from "react-redux";

import Title from './components/Title';
import DragonList from './components/DragonList';
import './styles.css';
import { titleReducer } from './reducers/titleReducer';

// Step 1: create the Redux store
const store = createStore(titleReducer);

function App() {
  return (
    <div className="App">
      <Title />
      <DragonList />
    </div>
  );
}

// Step 2: Provide the store
const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);
