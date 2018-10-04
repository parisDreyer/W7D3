import React from 'react';
import ReactDOM from 'react-dom';
import {fetchAllPokemon} from './util/api_util';
import {receiveAllPokemon, requestAllPokemon} from './actions/pokemon_action';
import configureStore from './store/store'; 
import {selectAllPokemon} from './reducers/selectors';

document.addEventListener('DOMContentLoaded', () => {

  window.fetchAllPokemon = fetchAllPokemon;
  window.receiveAllPokemon = receiveAllPokemon;
  window.requestAllPokemon = requestAllPokemon;
  window.selectAllPokemon = selectAllPokemon;
  const store = configureStore();

  window.getState = store.getState;
  window.dispatch = store.dispatch;


  const rootEl = document.getElementById('root');
  ReactDOM.render(<h1>Pokedex</h1>, rootEl);
});
