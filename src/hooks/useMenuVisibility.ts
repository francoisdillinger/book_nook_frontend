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

function useMenuVisibility() {
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

    return {
        state,
        dispatch,
        toggleButtonRef,
        navRef,
      };
}

export default useMenuVisibility;