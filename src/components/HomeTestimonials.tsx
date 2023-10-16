import { books } from "../data/books"


export default function HomeTestimonials(){
    return (
        <div>
            <img className="w-20" src={books[0].image} alt="" />
        </div>
    )
}