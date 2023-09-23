import React from 'react'
import { useFunctions } from '../Functions/Functions';
import { useLocation } from 'react-router-dom'
import { PokemonCard } from './PokemonCard.jsx'

export const SearchPage = () => {

    const { globalPokemons } = useFunctions();

    const location = useLocation();
    console.log(location)

    const filteredPokemons = globalPokemons.filter(pokemon => pokemon.name.includes(location.state))

    return (
        <div className='container'>
            <p className='p-search'>
                Se encontraron <span>{filteredPokemons.length}</span>{' '}
                resultados:
            </p>

            <div className='bg-red-100 flex justify-center items-center'>
                <div className='flex flex-wrap justify-center gap-[50px] w-full  mx-5 py-5 '>

                    {filteredPokemons.map(pokemon => (
                        <PokemonCard pokemon={pokemon} key={pokemon.id} />
                    ))}

                </div>


            </div>
        </div>
    );
}

export default SearchPage