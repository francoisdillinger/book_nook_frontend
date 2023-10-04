import { useState } from 'react'

export default function HomeSection(){
    const [toggleForm, setToggleForm] = useState(true);
    return(
        <div onClick={() => setToggleForm(!toggleForm)} className="relative md:h-screen   xl:bg-bottom bg-no-repeat flex justify-center px-6 mx-auto lg:py-2">
            <div className='absolute inset-0 brightness-50 bg-bookNook bg-cover bg-center'></div>
            <div className='relative w-3/5 p-8 md:p-0 md:w-3/5 lg:w-2/5 md:mt-20'>
                <h1 className='text-3xl md:text-6xl font-semibold text-white leading-snug'>Explore, Discover, Read: Your Journey Begins at BookNook.</h1>
                <p className='text-slate-200 py-8 lg:py-10 text-sm md:text-base'>Immerse yourself in a rich tapestry of narratives, where every book is a new world waiting to be explored. At BookNook, we bring you a meticulously curated collection of literary gems, catering to diverse tastes and preferences. Whether you're a seasoned bibliophile or a casual reader, find your perfect read and embark on a literary journey like no other.</p>
                <button className='text-base md:text-xl text-white font-semibold bg-yellow-600 p-3 rounded-md hover:bg-yellow-500 transition duration-300'>
                    Discover Your Next Read
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 inline-block ml-8">
                        <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clipRule="evenodd" />
                    </svg>

                </button>
            </div>
        </div>
    )
}