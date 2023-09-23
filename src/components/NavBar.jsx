import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

const NavBar = () => {
    return (
        <>
            <nav>
                <div className=' bg-red-200 flex justify-center items-center py-10 '>
                    <div className="relative w-1/2 text-[20px] ">
                        <input
                            className='w-full bg-white/90 focus:outline-none rounded-sm pr-1 pl-8'
                            type="search" />
                        <FontAwesomeIcon className="absolute left-1 top-1" icon={faSearch} />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar