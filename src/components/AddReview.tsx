import React from "react";
import alchemist from "../assets/alchemist.jpg";
import DynamicStarRating from "./DynamicStarRating";

export default function AddReview() {
	return (
		<React.Fragment>
			{" "}
			<div className="w-11/12 md:w-1/2 bg-white md:bg-gray-100 md:rounded-lg md:mt-16 p-8  m-auto mb-20">
				<div className="mt-10 mb-5">
					{alchemist ? (
						<div className="flex justify-center">
							<img
								className="h-80"
								src={alchemist}
								alt=""
							/>
						</div>
					) : (
						<div className="h-80 flex justify-center items-center font-semibold text-3xl text-gray-400">
							No Image
						</div>
					)}
				</div>
				<form
					action=""
					className=" font-medium text-gray-500 text-sm"
				>
					<DynamicStarRating />
					<div className="">
						<label
							htmlFor="title"
							className="block"
						>
							Title
						</label>
						<input
							className="block p-2.5 w-full lg:w-full z-20 text-sm font-normal text-gray-700 rounded-md bg-gray-50 border border-gray-300 focus:ring-blue-300 focus:border-blue-300 focus-visible:outline-none"
							type="text"
							name="title"
							id="title"
						/>
					</div>
					<div className="">
						<label
							htmlFor="review"
							className="block"
						>
							Review
						</label>
						<textarea
							className="block p-2.5 w-full h-48 lg:w-full z-20 text-sm font-normal text-gray-700 rounded-md bg-gray-50 border border-gray-300 focus:ring-blue-300 focus:border-blue-300 focus-visible:outline-none"
							name="review"
							id="review"
						></textarea>
					</div>
					<div className="flex justify-center pt-4">
						<button
							type="submit"
							className="bg-logo p-3 rounded-md w-full md:w-1/2 text-gray-50 opacity-90 hover:opacity-100 cursor-pointer font-medium"
						>
							Add Review
						</button>
					</div>
				</form>
			</div>
		</React.Fragment>
	);
}
