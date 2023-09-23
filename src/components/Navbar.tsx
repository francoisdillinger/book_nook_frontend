import useMenuVisibility from '../hooks/useMenuVisibility'

export default function Navbar() {
    const { state, dispatch, toggleButtonRef, navRef } = useMenuVisibility();

    return (
        <nav className="bg-gray-100">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex items-center">
                        <a href="" className="px-2 py-2">
                            <img className="h-9 w-9" src="/booknook_logo2.svg" alt="" />
                        </a>
                        <span className="font-bold">BookNook</span>
                    </div>
                    <div className="hidden md:flex items-center space-x-3">
                        <a href="" className="py-5 px-3 text-gray-600 hover:text-gray-900">Features</a>
                        <a href="" className="py-5 px-3 text-gray-600 hover:text-gray-900">Pricing</a>
                    </div>
                    <div className="hidden md:flex items-center space-x-1">
                        <a href="" className="py-5 px-3 text-gray-600 hover:text-gray-900">Login</a>
                        <a href="" className="py-3 px-3 bg-yellow-400 text-yellow-900 rounded hover:bg-yellow-300 hover:text-yellow-800 transition duration-300">Signup</a>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button ref={toggleButtonRef} onClick={() => dispatch({ type: 'toggleMenu'})}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className={`${state.hidden ? 'max-h-0' : 'max-h-[500px]'} overflow-hidden transition-all ease-in-out duration-300`} ref={navRef}>
    <div className={``}>
        <a href="" className="block py-2 px-4 text-sm hover:bg-gray-200">Features</a>
        <a href="" className="block py-2 px-4 text-sm hover:bg-gray-200">Pricing</a>
    </div>
</div>


            </div>
        </nav>
    )
}