import React,{ useState, useEffect, useRef, useMemo } from 'react'
import useGetWindowSize from '../hooks/useGetWindowSize';
import RecommendedBookDetails from './RecommendedBookDetails';
import { books } from '../data/books';

export default function RecomendedSlider(){
    const [ counter, setCount] = useState(0);
    const windowSize  = useGetWindowSize();
    const [visibleBooks, setVisibleBooks] = useState(5);
    const [centerBookOffset, setCenterBookOffset] = useState(2);
    const centerBookOffsetRef = useRef(centerBookOffset);
    const translationValue = -100 / visibleBooks;


    useEffect(() =>{
        const oldCenterBook = counter + centerBookOffsetRef.current; 

        switch (windowSize) {
            case 'small':
                setVisibleBooks(1);
                setCenterBookOffset(0);
                console.log('small')
                break;
            case 'medium':
                setVisibleBooks(3);
                setCenterBookOffset(1);
                console.log('medium')
                break;
            case 'large':
                setVisibleBooks(5);
                setCenterBookOffset(2);
                console.log('large')
                break;
            default:
                console.warn("Unexpected window size:", windowSize);
                break;
        }

        setCount(oldCenterBook - centerBookOffset);
    }, [windowSize, counter, centerBookOffset]);

    useEffect(() => {
        centerBookOffsetRef.current = centerBookOffset;
    }, [centerBookOffset]);
  
    const handleIncrement = () => {
      if (counter < books.length - visibleBooks + centerBookOffset) setCount(counter + 1);
    //   console.log(`Counder: ${counter}`)
    //   console.log(`center Book offset: ${centerBookOffset}`)
    };
    
    const handleDecrement = () => {
      if (counter > -centerBookOffset) setCount(counter - 1);
    //   console.log(`Counder: ${counter}`)
    //   console.log(`center Book offset: ${centerBookOffset}`)
    };

    const getTransitionStyles = (index: number): string => {
        let leftTertiaryBook: number;
        let leftSecondayBook: number;
        let centerBook: number;
        let rightSecondaryBook: number;
        let rightTertiaryBook: number;
      
        switch (windowSize) {
          case 'small':
            return 'scale-100'
            break;
          case 'medium':
            centerBook = counter + centerBookOffset;
            console.log(`Centerbook: ${centerBook}`)
            return (index === centerBook) ? "scale-100" : "scale-75";
            break;
          case 'large':
          case 'xLarge':
            leftTertiaryBook = counter;
            leftSecondayBook = counter + 1;
            centerBook = counter + centerBookOffset;
            rightSecondaryBook = counter + 3;
            rightTertiaryBook = counter + 4;
        
            if(index === leftTertiaryBook || index === rightTertiaryBook) return "scale-50";
            if(index === leftSecondayBook || index === rightSecondaryBook) return "scale-75";
            if(index === centerBook) return "scale-100";
            if(index < leftTertiaryBook || index > rightTertiaryBook) return "scale-50";
            break;
            
          default:
            console.warn(`Unexpected windowSize: ${windowSize}`);
            return "";
        }
        return "";
      }
      

    const transitionStyles = useMemo(() => books.map((_, index) => getTransitionStyles(index)), [counter, windowSize]);

    return(
            <div className='bg-red-50 pt-4 pb-8 box-border'>
                <div className='flex flex-col text-center'>
                    <h1 className='text-2xl md:text-5xl font-semibold text-slate-900 mt-2 md:mt-10'>Recomended For You</h1>
                    <p className='w-2/3 my-6 md:my-10 m-auto text-slate-500'>Unearth a world of books specifically curated to match your unique tastes and preferences! Dive into compelling narratives and discover hidden gems, meticulously selected to resonate with your literary appetite.</p>
                </div>
                <div className='min-w-full lg:w-11/12 flex relative md:m-auto md:py-4'>
                <button onClick={handleIncrement} className='absolute z-10 left-2 md:left-4 lg:left-8 xl:left-12 bg-white shadow-md p-2 rounded m-2 top-1/3 transform -translate-y-1/2 hover:scale-110 active:scale-95 duration-300'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-amber-600 hover:text-amber-800 duration-200">
                        <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z" clipRule="evenodd" />
                    </svg>
                </button>
                 <div className='overflow-hidden'> {/* Keep track of overflow! This took two days to debug! */}
                    <div className='flex' style={{ transform: `translateX(${counter * translationValue}%)`, transition: 'transform 0.5s ease-in-out' }}>
                        {books.map((book, index) => (
                        <div key={index} className={`min-w-full md:min-w-1/3 lg:min-w-1/5`}>
                            <img className={`m-auto w-1/2 md:m-0 md:w-full h-auto shadow-md rounded-md relative duration-500 ease-in-out ${transitionStyles[index]} `} src={book.image} alt="" />
                            <RecommendedBookDetails index={index} counter={counter} centerBookOffset={centerBookOffset} book={{
                                    title: book.title,
                                    price: book.price
                                }} />
                        </div>
                        ))}
                    </div>
                </div>
                <button onClick={handleDecrement} className='absolute z-10 right-2 md:right-4 lg:right-8 xl:right-12 bg-white shadow-md p-2 rounded m-2 top-1/3 transform -translate-y-1/2 hover:scale-110 active:scale-95 duration-300'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-amber-600 hover:text-amber-800 duration-200">
                        <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clipRule="evenodd" />
                    </svg>
                </button>
                </div>
            </div>
    )
}

