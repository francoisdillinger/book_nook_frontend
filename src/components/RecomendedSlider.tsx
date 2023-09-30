import { useState, useEffect } from 'react'
import dracula from '../assets/dracula.jpg'

export default function RecomendedSlider(){
    const [ counter, setCount] = useState(0);
    
    useEffect(() => {
        console.log(counter)
    }, [counter])

    return(
        <div>
            <button onClick={() => setCount(counter + 1)} className=' bg-yellow-600 p-2 rounded m-2 hover:bg-yellow-500 duration-300 active:scale-95 '>Increment</button>
            <button onClick={() => setCount(counter - 1)} className=' bg-yellow-600 p-2 rounded m-2 hover:bg-yellow-500 duration-300 active:scale-95 '>Decrement</button>
            <div className='flex my-20 relative'>
            <div>
                <img className='scale-50 relative left-10' src={dracula} alt="" />
            </div>
            <div>
                <img className='scale-75' src={dracula} alt="" />
            </div>
            <div>
                <img className='scale-1' src={dracula} alt="" />
            </div>
            <div>
                <img className='scale-75' src={dracula} alt="" />
            </div>
            <div>
                <img className='scale-50 relative right-10' src={dracula} alt="" />
            </div>
        </div>
        </div>
    )
}