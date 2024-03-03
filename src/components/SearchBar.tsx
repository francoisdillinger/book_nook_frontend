import React, { useState } from "react";

type SearchBarType = {
	options: string[];
	placeHolder: string;
	selectStyles: string;
	buttonStyles: string;
	values: { option: string; value: string };
	optionsHandler: Function;
	inputHandler: Function;
	clickHandler: Function;
};

export default function SearchBar({
	options,
	placeHolder,
	selectStyles,
	buttonStyles,
	values,
	optionsHandler,
	inputHandler,
	clickHandler,
}: SearchBarType) {
	// const [inputValue, setInputValue] = useState("");
	// const [optionsValue, setOptionsValue] = useState(options[0]);
	// const [searchValues, setSearchValues] = useState({
	// 	option: options[0],
	// 	value: "",
	// });
	// console.log(optionsValue);

	// const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
	// 	// console.log(event.target.value);
	// 	setSearchValues({ ...searchValues, value: event.target.value });
	// };

	// const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
	// 	// console.log(event);
	// 	setSearchValues({ ...searchValues, value: "" });
	// };
	return (
		<React.Fragment>
			<div className="flex min-w-full">
				{/* <label htmlFor="book-selector" className="block text-gray-700 font-medium">
            All Books
            </label> */}
				<select
					id="book-selector"
					className={`${selectStyles}`}
					onChange={(event) => optionsHandler(event)}
				>
					{/* <option>All</option>
					<option>Author</option>
					<option>Title</option> */}
					{options.map((option) => (
						<option key={option}>{option}</option>
					))}
				</select>

				<div className="relative w-full">
					<input
						onChange={(event) => inputHandler(event)}
						type="search"
						id="search-dropdown"
						className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50  border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-300 focus:border-blue-300 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500 focus-visible:outline-none"
						placeholder={`${placeHolder}`}
						required
						value={values.value}
					/>
				</div>
				<button
					onClick={(event) => clickHandler(event)}
					type="submit"
					className={`${buttonStyles}`}
				>
					Search
				</button>
			</div>
		</React.Fragment>
	);
}
