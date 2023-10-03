import { useState ,useEffect } from "react";

function useGetWindowSize(){
    const [windowSize, setWindowSize] = useState('');

    useEffect(()=> {
        const resizeListener = () => {
            let windowWidth = window.innerWidth;

            if(windowWidth < 768){
                setWindowSize("small");
            }
            else if(windowWidth < 1024){
                setWindowSize("medium")
            }
            else if(windowWidth >= 1024){
                setWindowSize("large")
            }
        };

        resizeListener();
        
        window.addEventListener("resize", resizeListener);

        return () => {window.removeEventListener("resize", resizeListener);}
    }, [])

    return windowSize
}

export default useGetWindowSize