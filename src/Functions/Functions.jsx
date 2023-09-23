import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useForm } from '../Hooks/UseForm'

export const FunctionsContext = createContext();


export function Functions({ children }) {



    const [getPokemons, setgetPokemons] = useState([])
    const [globalPokemons, setglobalPokemons] = useState([])
    const [offset, setoffset] = useState(0)
    const [load, setload] = useState(false)

    // Utilizar CustomHook - useForm
    const { valueSearch, onInputChange, onResetForm } = useForm({
        valueSearch: '',
    });

    // Obtener los 10 primeros
    const getAllPokemons = async (limit = 10) => {

        try {

            setload(true)

            const UrlBase = 'https://pokeapi.co/api/v2/'

            const response = await axios.get(`${UrlBase}pokemon?offset=${offset}&limit=${limit}`)

            const data = response.data;

            const getInfoPokemon = data.results.map(async (pokemon) => {

                const res = await axios.get(pokemon.url);
                const pokemonData = res.data;
                return pokemonData;
            });

            const results = await Promise.all(getInfoPokemon)

            setgetPokemons([...getPokemons, ...results]);

        } catch (error) {
            console.error(error)
        }

        finally {
            setload(false)
        }

    }

    const getAllGlobalPokemons = async () => {

        try {
            const UrlBase = 'https://pokeapi.co/api/v2/'

            const response = await axios.get(`${UrlBase}pokemon?limit=100000&offset=0`)

            const data = response.data;

            const getInfoPokemon = data.results.map(async (pokemon) => {

                const res = await axios.get(pokemon.url);
                const pokemonData = res.data;

                return pokemonData;
            })
            const results = await Promise.all(getInfoPokemon)

            setglobalPokemons(results)

        } catch (error) {
            console.error(error)
        }

    }

    const deletePokemon = (idPokemon) => {
        try {
            setload(true)
            const updatedPokemons = getPokemons.filter((pokemon) => pokemon.id !== idPokemon);
            setgetPokemons(updatedPokemons);
        } catch (error) {
            console.error(error)
        } finally {
            setload(false)
        }
    }


    const onClickLoadMore = () => {
        setoffset(offset + 10)
    }

    useEffect(() => {
        getAllPokemons()
    }, [offset])

    useEffect(() => {
        getAllGlobalPokemons();
    }, []);

    return (
        <FunctionsContext.Provider
            value={{
                getPokemons,
                globalPokemons,
                onClickLoadMore,
                deletePokemon,
                load,
                valueSearch,
                onInputChange,
                onResetForm
            }}
        >
            {children}
        </FunctionsContext.Provider>
    );
}

export const useFunctions = () => useContext(FunctionsContext); 