import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PokemonData, getPokemons } from './store/slices/pokemon';
import { RootState } from './store/store';
import './PokemonApp.css';

export const PokemonApp = () => {

  const { pokemons = [], isLoading, page } = useSelector((state: RootState) => state.pokemons)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch( getPokemons() );
  }, []);
  
  return (
    <>
      <h1>
        Pokemon App
      </h1>
      <hr />
      <span>Loading: { isLoading ? 'True' : 'False' }</span>
      <div>
        <ul>
          {
            pokemons.map((pokemon: PokemonData) => {
              return <li key={pokemon.name}>{pokemon.name}</li>
            })
          }
        </ul>
      </div>
      <h3>Página: {page}</h3>
      <div className="card">
        <button 
          onClick={() => dispatch( getPokemons(page-2) )}
        >
          Previous Page
        </button>
        <button onClick={() => dispatch( getPokemons(page) )}>
          Next Page
        </button>
      </div>
    </>
  )
}

