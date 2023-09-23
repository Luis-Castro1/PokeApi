import { useEffect } from 'react'
import { useFunctions } from '../Functions/Functions.jsx'
import NavBar from './NavBar.jsx'

export const Home = () => {

    const { getPokemons, onClickLoadMore, deletePokemon, load } = useFunctions()



    return (
        <>

            {load ? (<div className='w-screen h-screen bg-black/50'>

            </div>) : ''}
            <NavBar />

            <div className='bg-red-100 flex justify-center items-center'>
                <div className='flex flex-wrap justify-center gap-[50px] w-full  mx-5 py-5 '>

                    {getPokemons.map((pokemon) => {
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
                    })}

                    <div className='w-full flex justify-center items-center'>
                        <button className='bg-red-200' onClick={onClickLoadMore}>
                            Cargar más...
                        </button>
                    </div>
                </div>


            </div>
        </>
    )
}
