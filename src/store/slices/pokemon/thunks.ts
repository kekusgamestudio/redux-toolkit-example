import { pokemonApi } from '../../../api/pokemonApi';
import { setPokemnos, startLoandingPokemons } from './';

const records = 10;

export interface PokemonData {
  name: string;
  url: string;
}

export interface PokemonList {
  page: number
  count: number;
  pokemons: PokemonData[];
}

export const getPokemons = ( page = 0 ) => {
  return async ( dispatch, getState ) => {
    dispatch( startLoandingPokemons() );

    // const resp = await fetch(
    //   `https://pokeapi.co/api/v2/pokemon?limit=${ records }&offset=${ page * records}`
    // );
    // const data = await resp.json();
    
    const resp = await pokemonApi.get(`/pokemon?limit=${ records }&offset=${ page * records}`);
    console.log(resp);

    const pokeResp : PokemonList = {
      count: resp.data.count,
      page: page + 1,
      pokemons: resp.data.results,
    };

    dispatch( setPokemnos( pokeResp ));
  }
}
