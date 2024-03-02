import React from "react";

type SearchBarType = {
	options: string[];
	placeHolder: string;
	selectStyles: string;
	buttonStyles: string;
};

export default function SearchBar({
	options,
	placeHolder,
	selectStyles,
	buttonStyles,
}: SearchBarType) {
	return (
		<React.Fragment>
			<div className="flex min-w-full">
				{/* <label htmlFor="book-selector" className="block text-gray-700 font-medium">
            All Books
            </label> */}
				<select
					id="book-selector"
					className={`${selectStyles}`}
				>
					{/* <option>All</option>
					<option>Author</option>
					<option>Title</option> */}
					{options.map((option) => (
						<option>{option}</option>
					))}
				</select>

				<div className="relative w-full">
					<input
						type="search"
						id="search-dropdown"
						className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50  border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500 focus-visible:outline-none"
						placeholder={`${placeHolder}`}
						required
					/>
				</div>
				<button
					type="submit"
					className="p-2.5 z-10 text-sm font-medium h-full text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>
					Search
				</button>
			</div>
		</React.Fragment>
	);
}
