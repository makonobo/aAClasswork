import React from 'react';
import ReactDOM from 'react-dom';
import {fetchAllPokemon} from './util/api_util';
import {configureStore} from './store/store';

document.addEventListener("DOMContentLoaded", ()=>{

  const store = configureStore(); 
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  window.fetchAllPokemon = fetchAllPokemon;


  const root = document.getElementById("root");
  ReactDOM.render(<div>hello</div>, root);
});