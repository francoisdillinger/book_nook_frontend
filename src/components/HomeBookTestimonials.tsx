import { books } from "../data/books"
import DynamicStarRating from "./DynamicStarRating"
import StarRating from "./StarRating"
import StaticStarRating from "./StaticStarRating"



export default function HomeBookTestimonials(){
    return (
        <div>
            <img className="w-20" src={books[0].image} alt="" />
            <StaticStarRating bookRating={3}/>
        </div>
    )
}


{/* <DynamicStarRating /> */}
{/* <StarRating initialRating={5} isStatic={true} />
<StarRating onRatingChange={(rating) => console.log(`User rated: ${rating}`)} /> */}