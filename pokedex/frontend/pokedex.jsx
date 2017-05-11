import React from 'react';
import ReactDOM from 'react-dom';
import { fetchAllPokemon } from './util/api_util';
import { receiveAllPokemon } from './actions/pokemon_actions';
import { requestAllPokemon } from './actions/pokemon_actions';
import configureStore from './store/store';
import { selectAllPokemon } from './reducers/selectors';
import Root from './components/root';
import { HashRouter, Route } from 'react-router-dom';

document.addEventListener('DOMContentLoaded', () => {
  // window.fetchAllPokemon = fetchAllPokemon;
  // window.receiveAllPokemon = receiveAllPokemon;
  // window.requestAllPokemon = requestAllPokemon;
  // window.selectAllPokemon = selectAllPokemon;
  // window.store = store;
  const store = configureStore();

  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, rootEl);
});
