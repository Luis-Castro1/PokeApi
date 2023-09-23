import React from 'react'
import { useFunctions } from '../Functions/Functions.jsx'

export const PokemonCard = ({pokemon}) => {

    const { getPokemons, onClickLoadMore, deletePokemon, load } = useFunctions()
    return (
        <div key={pokemon.id} className='Pokemon-Card grid bg-white rounded-[10px] border border-gray-800 px-4 w-[280px]'>
            <div className='flex justify-center w-full'>
                <img
                    className='w-[100%] h-[200px] p-4'
                    src={pokemon.sprites.other.dream_world.front_default} alt="" />
            </div>
            <hr />

            <div className='bg-white grid w-full'>
                <strong className='text-center'>
                    {pokemon.name}
                </strong>

                <hr />

                <div className='flex gap-x-2 '>
                    <p>Habilidades:</p>
                    {pokemon.abilities.map((abilities) => {
                        return (
                            <div className='bg-green-500' key={abilities.ability.name}>
                                <p >
                                    {abilities.ability.name}
                                </p>
                            </div>
                        )
                    })}

                </div>

                <div className='grid'>
                    <p>
                        Hp: {pokemon.stats[0].base_stat}
                    </p>
                    <p>
                        Ataque: {pokemon.stats[1].base_stat}
                    </p>
                    <p>
                        Defensa: {pokemon.stats[2].base_stat}

                    </p>
                    <p>
                        Ataque Especial: {pokemon.stats[3].base_stat}

                    </p>
                    Defensa Especial: {pokemon.stats[4].base_stat}
                    <p>

                    </p>
                    <p>
                        Velocidad: {pokemon.stats[5].base_stat}

                    </p>

                </div>
            </div>

            <div className='bg-red-800 w-full text-white text-center my-3 rounded-sm cursor-pointer'>
                <button
                    onClick={() => deletePokemon(pokemon.id)}
                >Delete</button>
            </div>
        </div>
    )
}
