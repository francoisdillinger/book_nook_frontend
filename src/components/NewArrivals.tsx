import { recentArrivals } from "../data/recentArrivals"

export default function NewArrivals(){
    return(
        <div>
            <div className='flex flex-col text-center'>
                <h1 className='text-2xl md:text-5xl font-semibold text-slate-900 mt-2 md:mt-10'>New Arrivals</h1>
                <p className='w-2/3 my-6 md:my-10 m-auto text-slate-500'>Explore the latest additions to our shelves, where the newest stories await to captivate your imagination and ignite your curiosity.</p>
            </div>
            <div className="flex flex-wrap gap-2 justify-center w-full md:w-11/12 lg:w-10/12 m-auto">
                {recentArrivals.map((book, index) => (
                    <div className="flex flex-col items-center sm:w-2/5 lg:w-1/5">
                        <img className="w-5/6 shadow-lg rounded-md" src={book.image} alt="" />
                        <h3 className='text-2xl font-semibold text-slate-900 mt-2 mb-2'>{book.title}</h3>
                        <p className='text-lg font-medium text-amber-600 my-1'>{book.price}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}