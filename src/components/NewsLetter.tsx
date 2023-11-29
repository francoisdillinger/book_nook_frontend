import bookstoreimageclip from "../assets/bookstoreimageclip.png";

export default function NewsLetter() {
	return (
		<div className="pt-32 pb-32">
			<div className="bg-rose-200 w-3/4 rounded-xl m-auto pt-8 pb-10 shadow-md">
				<h2 className="w-9/10 md:w-1/2 text-center m-auto pb-10 text-lg font-medium text-slate-600">
					Join the BookNook circle and get your monthly dose of literary
					delights, exclusive discounts, and sneak peeks into new arrivals — all
					in one cozy newsletter.
				</h2>
				<div className="">
					<div className="flex justify-center mx-4">
						<input
							className="h-10 w-4/5 md:w-1/3 rounded-l-md opacity-70 placeholder:pl-4"
							type="email"
							name=""
							id=""
							placeholder="Type your email here"
						/>
						<button
							type="submit"
							className="w-24 text-sm font-medium text-white bg-logo rounded-r-lg border border-rose-700 hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						>
							Subscribe
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
