import StaticStarRating from "./StaticStarRating"
import { testimonials } from '../data/recentTestimonials'
import useGetWindowSize from "../hooks/useGetWindowSize"
import memers from '../assets/memers.jpg'
import marms from '../assets/marms.jpg'
import purpur from '../assets/purpur.jpg'
import React, { useState, useEffect } from "react"


export default function HomeBookTestimonials(){
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

    return (
        <div>
            <div className='flex flex-col text-center'>
                <h1 className='text-2xl md:text-5xl font-semibold text-slate-900 mt-2 md:mt-10'>Recently Reviewed</h1>
                <p className='w-2/3 my-6 md:my-10 m-auto text-slate-500'>Check out the freshest reader thoughts and ratings on our shelves. These six books are the latest to spark conversation and enthusiasm among our BookNook community.</p>
            </div>
            <div className="overflow-hidden">
                <div className="flex" style={{ transform: `translateX(${slideTransition}%)`, transition: 'transform 0.5s ease-in-out' }}>
                    { testimonials.map((testimonial, index) => (
                        <div className="relative overflow-hidden min-w-full h-full md:min-w-1/2 xl:min-w-1/3">
                            <div className="flex p-6 relative z-10">
                                <img className="w-40 rounded-xl shadow-lg" src={testimonial.bookImage} alt="" />
                                <div className="px-4">
                                    <StaticStarRating bookRating={testimonial.rating}/>
                                    <div className="flex flex-col md:mb-12 lg:mb-4 xl:mb-12">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 fill-slate-600 place-self-start" viewBox="0 0 448 512">
                                            {/* Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                                            <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"/>
                                        </svg>
                                        <p className="text-slate-500 flex-grow px-6 h-16">Hauntingly vivid and suspenseful, it kept me captivated through every chilling encounter in the shadowy world of the Count.</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 fill-slate-600 place-self-end" viewBox="0 0 448 512">
                                            {/* Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                                            <path d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z"/>
                                        </svg>
                                    </div>
                                    <div className="flex justify-end items-center mt-4">
                                        <p className="text-slate-700 font-bold text-lg mx-6">{testimonial.user}</p>
                                        <img className="w-14 rounded-full" src={testimonial.userImage} alt="" />
                                    </div>
                                </div>
                            </div>
                            <img className="absolute opacity-10 -inset-y-1/2 z-0" src={testimonial.bookImage} alt="" />
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
                                </React.Fragment>
                            )
                        case 'xLarge':
                            return(
                                <React.Fragment>
                                    <div onClick={() => handleSlideTransition(0)} className={`${slideTransition == 0 ? 'bg-slate-900' :'bg-slate-400'} w-3 h-3 transition-all ease-in-out delay-150 rounded-full cursor-pointer m-2`}></div>
                                    <div onClick={() => handleSlideTransition(100)} className={`${slideTransition == -100 ? 'bg-slate-900' :'bg-slate-400'} w-3 h-3 transition-all ease-in-out delay-150 rounded-full cursor-pointer m-2`}></div>
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


{/* <DynamicStarRating /> */}
{/* <StarRating initialRating={5} isStatic={true} />
<StarRating onRatingChange={(rating) => console.log(`User rated: ${rating}`)} /> */}