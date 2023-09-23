import { useEffect } from 'react'
import { useFunctions } from '../Functions/Functions.jsx'
import NavBar from './NavBar.jsx'
import { PokemonCard } from './PokemonCard.jsx'

export const Home = () => {

    const { getPokemons, onClickLoadMore, deletePokemon, load } = useFunctions()



    return (
        <>

            {load ? (<div className='w-screen h-screen bg-black/50'>

            </div>) : ''}

            <div className='bg-red-100 flex justify-center items-center'>
                <div className='flex flex-wrap justify-center gap-[50px] w-full  mx-5 py-5 '>

                    {getPokemons.map((pokemon) => {
                        return (
                            <PokemonCard pokemon={pokemon} key={pokemon.id}/>

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
