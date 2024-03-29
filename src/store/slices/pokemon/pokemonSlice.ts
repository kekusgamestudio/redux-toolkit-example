import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { PokemonData, PokemonList } from '.';

export interface CounterState {
  page: number;
  pokemons: PokemonData[];
  isLoading: boolean;
}

const initialState: CounterState = {
  page: 0,
  pokemons: [],
  isLoading: false,
}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    startLoandingPokemons: (state) => {
      state.isLoading = true;
    },
    setPokemnos: (state, action: PayloadAction<PokemonList>) => {
      state.isLoading = false;
      state.page = action.payload.page;
      state.pokemons = action.payload.pokemons;
      //console.log(action);
    },
  },
})

// Action creators are generated for each case reducer function
export const { startLoandingPokemons, setPokemnos } = pokemonSlice.actions;
