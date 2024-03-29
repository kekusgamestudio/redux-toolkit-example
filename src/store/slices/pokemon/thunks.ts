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

    const resp = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${ records }&offset=${ page * records}`
    );
    const data = await resp.json();
    //console.log(data);

    const pokeResp : PokemonList = {
      count: data.count,
      page: page + 1,
      pokemons: data.results,
    };

    dispatch( setPokemnos( pokeResp ));
  }
}
