import { useEffect, useReducer, useRef } from "react"

interface State {
    hidden: boolean;
}

interface Action {
    type: 'menuOutOfFocus' | 'fullScreen' | 'toggleMenu';
}

function reducer(state: State, action: Action){
    const { type } = action;

    switch (type) {
        case 'fullScreen': {
            return { hidden: true }
        }
        case 'toggleMenu': {
            return { hidden: !state.hidden }
        }
        case 'menuOutOfFocus': {
            return { hidden: true }
        }
        default:
            return state;
    }
}

export default function Navbar() {
    const [state, dispatch] = useReducer(reducer, { hidden: true});
    const toggleButtonRef = useRef<HTMLButtonElement>(null);
    const navRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        const resizeListener = () => {
            let isFullScreenSize = window.innerWidth < 768;
            if (isFullScreenSize) dispatch({ type: 'fullScreen'})
        };

        const menuFocusListener = (event: MouseEvent) => {
            let menuButtonClicked = toggleButtonRef.current && toggleButtonRef.current.contains(event.target as Node);
            if (menuButtonClicked) {
                // If the toggle button is clicked, do not hide the menu here.
                // It will be handled by the onClick event of the button.
                // This is needed due to a bug where mobile menu button causes 2 events to run.
                return;
            }

            let menuInFocused = navRef.current && navRef.current.contains(event.target as Node)
            if (!menuInFocused) dispatch({ type: 'menuOutOfFocus'})
        }

        window.addEventListener("resize", resizeListener);
        document.addEventListener('mousedown', menuFocusListener);

        return () => {
            window.removeEventListener("resize", resizeListener);
            document.removeEventListener("mousedown", menuFocusListener);
        }

    }, []);
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
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className={`${state.hidden? 'hidden' : ''}`} ref={navRef}>
                    <a href="" className="block py-2 px-4 text-sm hover:bg-gray-200">Features</a>
                    <a href="" className="block py-2 px-4 text-sm hover:bg-gray-200">Pricing</a>
                </div>
            </div>
        </nav>
    )
}