import React from 'react';
import ReactDOM from 'react-dom';
import {fetchAllPokemon } from './util/api_util';
import {receiveAllPokemon, receiveOnePokemon, requestAllPokemon, fetchOnePokemon} from './actions/pokemon_action';
import configureStore from './store/store';
import {selectAllPokemon, selectAllItems, selectPokemonItems} from './reducers/selectors';
import Root from './components/root';


document.addEventListener('DOMContentLoaded', () => {

  // window.fetchAllPokemon = fetchAllPokemon;
  // window.receiveAllPokemon = receiveAllPokemon;
  // window.requestAllPokemon = requestAllPokemon;
  window.selectAllPokemon = selectAllPokemon;
  // window.receiveOnePokemon = receiveOnePokemon;
  window.fetchOnePokemon = fetchOnePokemon;
  window.selectPokemonItems = selectPokemonItems;

  const store = configureStore();

  window.getState = store.getState;
  window.dispatch = store.dispatch;

  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
