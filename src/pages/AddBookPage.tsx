import React, { useState, useEffect } from "react";
import { author_data, AuthorsDataType } from "../data/authors";

export type TrimmedAuthorsType = {
	authorFirstName: string;
	authorLastName: string;
};

export const trimAuthors = (authors: AuthorsDataType): TrimmedAuthorsType[] => {
	return [...authors.data.authors];
};

export default function AddBookPage() {
	const [image, setImage] = useState<string>("");
	const [authors, setAuthors] = useState<TrimmedAuthorsType[] | null>();

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		console.log(event.target.files);
		if (event.target.files && event.target.files.length > 0) {
			setImage(URL.createObjectURL(event.target.files[0]));
		}
	};

	// const selectOptionsHandler = (
	// 	event: React.ChangeEvent<HTMLSelectElement>
	// ) => {

	// };

	useEffect(() => {
		const trimmedAuthors = trimAuthors(author_data);
		setAuthors(trimmedAuthors);
	}, [author_data]);

	return (
		<React.Fragment>
			{" "}
			<div className="w-11/12 md:w-1/2 bg-white md:bg-gray-100 md:rounded-lg md:mt-16 p-8  m-auto mb-20">
				<div className="mt-10 mb-5">
					{image ? (
						<div className="flex justify-center">
							<img
								className="h-80"
								src={image}
								alt=""
							/>
						</div>
					) : (
						<div className="h-80 flex justify-center items-center font-semibold text-3xl text-gray-400">
							Image Preview
						</div>
					)}
				</div>
				<form
					action=""
					className=" font-medium text-gray-500 text-sm"
				>
					<div className="">
						<label
							htmlFor="image"
							className="block"
						>
							Book Image
						</label>
						<input
							onChange={handleFileChange}
							className="block file:p-3 file:bg-logo file:border-none file:text-gray-50 file:opacity-90 file:hover:opacity-100 file:cursor-pointer file:font-medium w-full lg:w-full text-sm font-normal text-gray-500 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-300 focus:border-blue-300 focus-visible:outline-none"
							type="file"
							name="image"
							id="image"
						/>
					</div>
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
							htmlFor="isbn"
							className="block"
						>
							ISBN
						</label>
						<input
							className="block p-2.5 w-full lg:w-full z-20 text-sm font-normal text-gray-700 rounded-md bg-gray-50 border border-gray-300 focus:ring-blue-300 focus:border-blue-300 focus-visible:outline-none"
							type="text"
							name="isbn"
							id="isbn"
						/>
					</div>
					<div className="">
						<label
							htmlFor="price"
							className="block"
						>
							Price
						</label>
						<input
							className="block p-2.5 w-full lg:w-full z-20 text-sm font-normal text-gray-700 rounded-md bg-gray-50 border border-gray-300 focus:ring-blue-300 focus:border-blue-300 focus-visible:outline-none"
							type="text"
							name="price"
							id="price"
						/>
					</div>
					<div className="">
						<label
							htmlFor="publishedDate"
							className="block"
						>
							Date Published
						</label>
						<input
							className="block p-2.5 w-full lg:w-full z-20 text-sm font-normal text-gray-700 rounded-md bg-gray-50 border border-gray-300 focus:ring-blue-300 focus:border-blue-300 focus-visible:outline-none"
							type="date"
							name="publishedDate"
							id="publishedDate"
						/>
					</div>
					<div className="">
						<label
							htmlFor="description"
							className="block"
						>
							Title
						</label>
						<textarea
							className="block p-2.5 w-full h-48 lg:w-full z-20 text-sm font-normal text-gray-700 rounded-md bg-gray-50 border border-gray-300 focus:ring-blue-300 focus:border-blue-300 focus-visible:outline-none"
							name="description"
							id="description"
						></textarea>
					</div>
					<div className="">
						<label
							htmlFor="author"
							className="block"
						>
							Author
						</label>
						<select
							id="author"
							className="block p-2.5 w-full lg:w-full z-20 text-sm font-normal text-gray-700 rounded-md bg-gray-50 border border-gray-300 focus:ring-blue-300 focus:border-blue-300 focus-visible:outline-none"
							// onChange={(event) => selectOptionsHandler(event)}
						>
							<option value="">--- Select Author ---</option>
							{authors?.map((author, index) => (
								<option key={index}>
									{author.authorFirstName + " " + author.authorLastName}
								</option>
							))}
						</select>
					</div>
					<div className="">
						<label
							htmlFor="inventory"
							className="block"
						>
							Amount Added to Inventory (between 0 and 50) :
						</label>
						<input
							className="block p-2.5 w-full lg:w-full z-20 text-sm font-normal text-gray-700 rounded-md bg-gray-50 border border-gray-300 focus:ring-blue-300 focus:border-blue-300 focus-visible:outline-none"
							type="number"
							min="0"
							max="50"
							name="inventory"
							id="inventory"
						/>
					</div>
					<div className="">
						<label
							htmlFor="pageCount"
							className="block"
						>
							Page Count :
						</label>
						<input
							className="block p-2.5 w-full lg:w-full z-20 text-sm font-normal text-gray-700 rounded-md bg-gray-50 border border-gray-300 focus:ring-blue-300 focus:border-blue-300 focus-visible:outline-none"
							type="number"
							min="0"
							max="1000"
							name="pageCount"
							id="pageCount"
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
			</div>
		</React.Fragment>
	);
}
