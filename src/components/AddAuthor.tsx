import React from "react";

export default function AddAuthor() {
	return (
		<React.Fragment>
			<form
				action=""
				className="w-11/12 md:w-1/2 m-auto mb-20 font-medium text-gray-500 text-sm"
			>
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
				<div className="flex justify-center pt-4">
					<button
						type="submit"
						className="bg-logo p-3 rounded-md w-full md:w-1/2 text-gray-50 opacity-90 hover:opacity-100 cursor-pointer font-medium"
					>
						Add Book
					</button>
				</div>
			</form>
		</React.Fragment>
	);
}
