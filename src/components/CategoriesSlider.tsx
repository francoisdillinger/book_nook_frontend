import { categories } from "../data/categories"
import bookstoreimageclip from '../assets/bookstoreimageclip.png'
import { useState, useEffect } from "react";
import useGetWindowSize from "../hooks/useGetWindowSize";
import React from "react";

export default function CategoriesSlider(){
    const [slideTransition, setSlideTransition] = useState<number>(0)
    const windowSize = useGetWindowSize();

    useEffect(() => {
        // This is so the slider is reset when window size is changed.
        setSlideTransition(0);
    }, [windowSize])

    const handleSlideTransition = (amount: number) => {
        setSlideTransition(-amount);
        console.log(slideTransition)
    }
    return(
        <div className="my-16">
            <div className='flex flex-col text-center'>
                <h1 className='text-2xl md:text-5xl font-semibold text-slate-900 mt-2 md:mt-10'>Categories</h1>
                <p className='w-2/3 my-6 md:my-10 m-auto text-slate-500'>Step into the world of BookNook’s genres, where tales of every hue and texture come to life. Whether you’re in the mood for thrilling mysteries, heartwarming romances, or awe-inspiring sci-fi, our diverse categories promise a perfect match for every reader’s appetite.</p>
            </div>
            <div className="overflow-hidden">
                <div className="flex" style={{ transform: `translateX(${slideTransition}%)`, transition: 'transform 0.5s ease-in-out' }}>
                    {categories.map((category, index) => (
                        <div key={index} className="w-1/2 md:w-1/3 xl:w-1/4 inline-block flex-shrink-0">
                            <div className="relative flex flex-col items-center justify-center bg-logo opacity-95 rounded-lg h-40  z-10 overflow-hidden w-11/12 m-auto">
                                <div className="">
                                    <h2 className="text-slate-50 font-bold text-lg">{category.category}</h2>
                                    <p className="text-slate-200 text-sm">{category.numOfBooks} Books</p>
                                </div>
                                <img className="absolute opacity-10 -inset-y-auto z-0 grayscale" src={category.image} alt="" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center my-8">
                {(() => {
                    switch (windowSize) {
                        case 'small':
                            return(
                                <React.Fragment>
                                    <div onClick={() => handleSlideTransition(0)} className={`${slideTransition == 0 ? 'bg-slate-900' :'bg-slate-400'} w-3 h-3 transition-all ease-in-out delay-150 rounded-full cursor-pointer m-2`}></div>
                                    <div onClick={() => handleSlideTransition(100)} className={`${slideTransition == -100 ? 'bg-slate-900' :'bg-slate-400'} w-3 h-3 transition-all ease-in-out delay-150 rounded-full cursor-pointer m-2`}></div>
                                    <div onClick={() => handleSlideTransition(200)} className={`${slideTransition == -200 ? 'bg-slate-900' :'bg-slate-400'} w-3 h-3 transition-all ease-in-out delay-150 rounded-full cursor-pointer m-2`}></div>
                                    <div onClick={() => handleSlideTransition(300)} className={`${slideTransition == -300 ? 'bg-slate-900' :'bg-slate-400'} w-3 h-3 transition-all ease-in-out delay-150 rounded-full cursor-pointer m-2`}></div>
                                    <div onClick={() => handleSlideTransition(400)} className={`${slideTransition == -400 ? 'bg-slate-900' :'bg-slate-400'} w-3 h-3 transition-all ease-in-out delay-150 rounded-full cursor-pointer m-2`}></div>
                                    <div onClick={() => handleSlideTransition(500)} className={`${slideTransition == -500 ? 'bg-slate-900' :'bg-slate-400'} w-3 h-3 transition-all ease-in-out delay-150 rounded-full cursor-pointer m-2`}></div>
                                </React.Fragment>
                            )
                        case "medium":
                        case "large":
                            return (
                                <React.Fragment>
                                    <div onClick={() => handleSlideTransition(0)} className={`${slideTransition == 0 ? 'bg-slate-900' :'bg-slate-400'} w-3 h-3 transition-all ease-in-out delay-150 rounded-full cursor-pointer m-2`}></div>
                                    <div onClick={() => handleSlideTransition(100)} className={`${slideTransition == -100 ? 'bg-slate-900' :'bg-slate-400'} w-3 h-3 transition-all ease-in-out delay-150 rounded-full cursor-pointer m-2`}></div>
                                    <div onClick={() => handleSlideTransition(200)} className={`${slideTransition == -200 ? 'bg-slate-900' :'bg-slate-400'} w-3 h-3 transition-all ease-in-out delay-150 rounded-full cursor-pointer m-2`}></div>
                                    <div onClick={() => handleSlideTransition(300)} className={`${slideTransition == -300 ? 'bg-slate-900' :'bg-slate-400'} w-3 h-3 transition-all ease-in-out delay-150 rounded-full cursor-pointer m-2`}></div>
                                </React.Fragment>
                            )
                        case 'xLarge':
                            return(
                                <React.Fragment>
                                    <div onClick={() => handleSlideTransition(0)} className={`${slideTransition == 0 ? 'bg-slate-900' :'bg-slate-400'} w-3 h-3 transition-all ease-in-out delay-150 rounded-full cursor-pointer m-2`}></div>
                                    <div onClick={() => handleSlideTransition(100)} className={`${slideTransition == -100 ? 'bg-slate-900' :'bg-slate-400'} w-3 h-3 transition-all ease-in-out delay-150 rounded-full cursor-pointer m-2`}></div>
                                    <div onClick={() => handleSlideTransition(200)} className={`${slideTransition == -200 ? 'bg-slate-900' :'bg-slate-400'} w-3 h-3 transition-all ease-in-out delay-150 rounded-full cursor-pointer m-2`}></div>
                                </React.Fragment>
                            )
                        default:
                            break;
                    }
                })()}
            </div>
        </div>
    )
}