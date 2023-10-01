import { useState, useEffect, useMemo } from 'react'
import dracula from '../assets/dracula.jpg'
import frankenstein from '../assets/frankenstein.jpg'
import norseGods from '../assets/norse_mythology.jpg'

export default function RecomendedSlider(){
    const [ counter, setCount] = useState(0);
    

    const books = [
        {image: dracula, price: "$5.99"},
        {image: frankenstein, price: "$7.99"},
        {image: norseGods, price: "$8.99"},
        {image: dracula, price: "$5.99"},
        {image: frankenstein, price: "$7.99"},
        {image: norseGods, price: "$8.99"},
        {image: dracula, price: "$5.99"},
        {image: frankenstein, price: "$7.99"},
        {image: norseGods, price: "$8.99"},
        {image: dracula, price: "$5.99"},
    ]

    const visibleBooks = 5;
  
    const handleIncrement = () => {
      if (counter < books.length - visibleBooks + 2) setCount(counter + 1);
    };
    
    const handleDecrement = () => {
      if (counter > -2) setCount(counter - 1);
    };

    const getTransitionStyles = (index: number) => {
        const leftTertiaryBook = counter;
        const leftSecondayBook = counter + 1;
        const centerBook = counter + 2;
        const rightSecondaryBook = counter + 3;
        const rightTertiaryBook = counter + 4;

        if(index === leftTertiaryBook) return "scale-50";
        if(index === rightTertiaryBook) return "scale-50";
        if(index === leftSecondayBook || index === rightSecondaryBook) return "scale-75";
        if(index === centerBook) return "scale-100";
        if(index < leftTertiaryBook) return "scale-0";
        if(index > rightTertiaryBook) return "scale-0";
    }

    const transitionStyles = useMemo(() => books.map((_, index) => getTransitionStyles(index)), [counter]);
    
    // useEffect(() => {
    //     console.log(counter)
    //     console.log(books[counter + 10])
    // }, [counter])

    return(
        <div className='overflow-hidden mt-4 mb-8 w-5/6 m-auto'>
            <button onClick={handleIncrement} className=' bg-yellow-600 p-2 rounded m-2 hover:bg-yellow-500 duration-300 active:scale-95 '>Increment</button>
            <button onClick={handleDecrement} className=' bg-yellow-600 p-2 rounded m-2 hover:bg-yellow-500 duration-300 active:scale-95 '>Decrement</button>
            <div className='flex transition-container' style={{ transform: `translateX(${counter * -20}%)`, transition: 'transform 0.5s ease-in-out' }}>
                {books.map((book, index) => (
                    <div key={index} className='book-container' style={{minWidth: '20%'}}>
                        <img className={`relative duration-500 ease-in-out ${transitionStyles[index]} `} src={book.image} alt="" />
                    </div>
                ))}
            </div>
        </div>
    )
}

