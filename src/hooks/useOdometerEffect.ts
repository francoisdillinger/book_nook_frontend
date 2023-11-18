import { useState ,useEffect } from "react";

function useOdometerEffect(startValue:number, endValue:number, elementIsVisible:boolean){
    const [value, setValue] = useState<number>(startValue);

    useEffect(() => {
        if(elementIsVisible){
            const timeoutId = setTimeout(() => setValue(endValue), 1000);
            return () => {
                clearTimeout(timeoutId);
            };
        }
    }, [elementIsVisible])

    return value;
}

export default useOdometerEffect;