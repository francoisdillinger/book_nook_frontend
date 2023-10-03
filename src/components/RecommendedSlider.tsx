import { useState, useEffect, useMemo } from 'react'
import useGetWindowSize from '../hooks/useGetWindowSize';
import RecommendedBookDetails from './RecommendedBookDetails';
import { books } from '../data/books';

export default function RecomendedSlider(){
    const [ counter, setCount] = useState(0);
    const windowSize  = useGetWindowSize();
    
    useEffect(() =>{
        console.log(windowSize)
    }, [windowSize])

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
        if(index < leftTertiaryBook) return "scale-50";
        if(index > rightTertiaryBook) return "scale-50";
    }

    const transitionStyles = useMemo(() => books.map((_, index) => getTransitionStyles(index)), [counter]);

    return(
        <div className='w-full bg-amber-50 pt-4 pb-8'>
            <div className='flex flex-col text-center'>
                <h1 className='text-2xl md:text-5xl font-semibold text-slate-900 mt-10'>Recomended For You</h1>
                <p className='w-2/3 my-10 m-auto text-slate-500'>Unearth a world of books specifically curated to match your unique tastes and preferences! Dive into compelling narratives and discover hidden gems, meticulously selected to resonate with your literary appetite.</p>
            </div>
            <div className='overflow-hidden w-11/12 flex relative m-auto py-4'>
            <button onClick={handleIncrement} className='absolute z-10 md:left-4 lg:left-8 xl:left-12 bg-white shadow-md p-2 rounded m-2 top-1/3 transform -translate-y-1/2 hover:scale-110 active:scale-95 duration-300'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-amber-600 hover:text-amber-800 duration-200">
                    <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z" clipRule="evenodd" />
                </svg>
            </button>
            
            <div className='flex transition-container' style={{ transform: `translateX(${counter * -20}%)`, transition: 'transform 0.5s ease-in-out' }}>
                {books.map((book, index) => (
                <div key={index} className='book-container' style={{minWidth: '20%'}}>
                    <img className={`shadow-md relative duration-500 ease-in-out ${transitionStyles[index]} `} src={book.image} alt="" />
                    <RecommendedBookDetails index={index} counter={counter} book={{
                            title: book.title,
                            price: book.price
                        }} />
                </div>
                ))}
            </div>
            
            <button onClick={handleDecrement} className='absolute z-10 md:right-4 lg:right-8 xl:right-12 bg-white shadow-md p-2 rounded m-2 top-1/3 transform -translate-y-1/2 hover:scale-110 active:scale-95 duration-300'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-amber-600 hover:text-amber-800 duration-200">
                    <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clipRule="evenodd" />
                </svg>
            </button>
            </div>
        </div>
    )
}

