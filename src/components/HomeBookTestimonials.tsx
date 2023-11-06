import { books } from "../data/books"
import DynamicStarRating from "./DynamicStarRating"
import StarRating from "./StarRating"
import StaticStarRating from "./StaticStarRating"
import memers from '../assets/memers.jpg'


export default function HomeBookTestimonials(){
    return (
        // <div className="flex p-6 w-full md:w-1/2" style={{backgroundImage: `url(${books[0].image})`}}>
        <div className="relative overflow-hidden w-full h-full md:w-1/2 xl:w-1/3">
            <div className="flex p-6 relative z-10">
                <img className="w-36 rounded-xl shadow-lg" src={books[0].image} alt="" />
                <div className="px-4">
                    <StaticStarRating bookRating={3}/>
                    <div className="flex flex-col">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 fill-slate-600 place-self-start" viewBox="0 0 448 512">
                            {/* Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                            <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"/>
                        </svg>
                        <p className="text-slate-500 flex-grow px-6">Hauntingly vivid and suspenseful, it kept me captivated through every chilling encounter in the shadowy world of the Count.</p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 fill-slate-600 place-self-end" viewBox="0 0 448 512">
                            {/* Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                            <path d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z"/>
                        </svg>
                    </div>
                    <div className="flex justify-end items-center mt-4">
                        <p className="text-slate-700 font-bold text-lg mx-6">John Doe</p>
                        <img className="w-14 rounded-full" src={memers} alt="" />
                    </div>
                </div>
            </div>
            <img className="absolute opacity-10 -inset-y-1/2 z-0" src={books[0].image} alt="" />
        </div>
    )
}


{/* <DynamicStarRating /> */}
{/* <StarRating initialRating={5} isStatic={true} />
<StarRating onRatingChange={(rating) => console.log(`User rated: ${rating}`)} /> */}