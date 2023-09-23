import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { Link, useNavigate } from 'react-router-dom'
import { useFunctions } from "../Functions/Functions"


const NavBar = () => {

    const { globalPokemons, onInputChange, valueSearch, onResetForm } = useFunctions();

    const navigate = useNavigate();

    const onSearchSubmit = e => {
        e.preventDefault();
        navigate('/search', {
            state: valueSearch,
        });

        onResetForm();
    };

    return (
        <>
            <nav>
                <div className='relative bg-red-200 flex justify-center items-center py-10 '>
                    <div className="absolute left-[3rem] text-[20px] ">
                        <Link to='/'>
                            Home
                        </Link>
                    </div>
                    <div className="relative w-1/2 text-[20px] ">
                        <form action=""
                            onSubmit={onSearchSubmit}>
                            <input
                                name="valueSearch"
                                value={valueSearch}
                                onChange={onInputChange}
                                placeholder="Buscar Pokemón"
                                className='w-full bg-white/90 focus:outline-none rounded-sm pr-1 pl-8'
                                type="search" />
                            <FontAwesomeIcon className="absolute left-1 top-1" icon={faSearch} />
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar