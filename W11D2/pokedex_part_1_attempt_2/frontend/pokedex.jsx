import React from 'react';
import ReactDOM from 'react-dom';
import {fetchAllPokemon} from './util/api_util';
import {configureStore} from './store/store';
import {selectAllPokemon} from './reducers/selectors';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", ()=>{

  const store = configureStore(); 
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  window.fetchAllPokemon = fetchAllPokemon;
  window.selectAllPokemon = selectAllPokemon;


  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root);
});