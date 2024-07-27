// import React, { useState } from "react";
// import { Link, Form, useParams } from "react-router-dom";

import React, { useState } from "react";
import { Form, useNavigate, useSearchParams } from "react-router-dom";

type SearchBarType = {
	options: string[];
	placeHolder: string;
	selectStyles: string;
	buttonStyles: string;
};

const SearchBar: React.FC<SearchBarType> = ({
	options,
	placeHolder,
	selectStyles,
	buttonStyles,
}) => {
	const navigate = useNavigate();
	let [searchParams, setSearchParams] = useSearchParams();
	const [option, setOption] = useState(options[0].toLowerCase());
	const [inputValue, setInputValue] = useState("");

	const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setOption(event.target.value.toLowerCase());
	};

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value);
	};

	const handleSearch = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		if (inputValue.trim()) {
			// let params = serializeFormQuery(event.target);
			const params = { [option]: inputValue.trim() };

			// console.log(params);
			setSearchParams(params);
			navigate(`/search?${option}=${inputValue.trim()}`);
		}
	};

	const handleBrowse = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		navigate("/search");
	};

	return (
		<Form className="flex min-w-full">
			<select
				id="book-selector"
				className={selectStyles}
				onChange={handleOptionChange}
			>
				{options.map((option) => (
					<option
						key={option}
						value={option}
					>
						{option}
					</option>
				))}
			</select>

			<div className="relative w-full">
				<input
					onChange={handleInputChange}
					name={option}
					type="search"
					id="search-dropdown"
					className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-300 focus:border-blue-300 focus-visible:outline-none"
					placeholder={placeHolder}
					value={inputValue}
				/>
			</div>
			{inputValue.length > 0 ? (
				<button
					onClick={handleSearch}
					type="submit"
					className={buttonStyles}
				>
					Search
				</button>
			) : (
				<button
					onClick={handleBrowse}
					type="submit"
					className={buttonStyles}
				>
					Browse
				</button>
			)}
		</Form>
	);
};

export default SearchBar;

// type SearchBarType = {
// 	options: string[];
// 	placeHolder: string;
// 	selectStyles: string;
// 	buttonStyles: string;
// 	values: { option: string; value: string };
// 	// optionsHandler: Function;
// 	inputHandler: Function;
// 	clickHandler: Function;
// };

// export default function SearchBar({
// 	options,
// 	placeHolder,
// 	selectStyles,
// 	buttonStyles,
// 	values,
// 	// optionsHandler,
// 	inputHandler,
// 	clickHandler,
// }: SearchBarType) {
// 	// const [inputValue, setInputValue] = useState("");
// 	// const [optionsValue, setOptionsValue] = useState(options[0]);
// 	// const [searchValues, setSearchValues] = useState({
// 	// 	option: options[0],
// 	// 	value: "",
// 	// });
// 	// console.log(optionsValue);

// 	// const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
// 	// 	// console.log(event.target.value);
// 	// 	setSearchValues({ ...searchValues, value: event.target.value });
// 	// };

// 	// const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
// 	// 	// console.log(event);
// 	// 	setSearchValues({ ...searchValues, value: "" });
// 	// };
// 	const [option, setOption] = useState(options[0].toLowerCase());

// 	const optionsHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
// 		// console.log(event.target.value);
// 		setOption(event.target.value.toLowerCase());
// 	};
// 	return (
// 		<React.Fragment>
// 			<Form
// 				method="get"
// 				action="/search"
// 				className="flex min-w-full"
// 			>
// 				{/* <label htmlFor="book-selector" className="block text-gray-700 font-medium">
//             All Books
//             </label> */}
// 				<select
// 					id="book-selector"
// 					className={`${selectStyles}`}
// 					onChange={(event) => optionsHandler(event)}
// 				>
// 					{options.map((option) => (
// 						<option key={option}>{option}</option>
// 					))}
// 				</select>

// 				<div className="relative w-full">
// 					<input
// 						// onChange={(event) => inputHandler(event)}
// 						name={option}
// 						type="search"
// 						id="search-dropdown"
// 						className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50  border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-300 focus:border-blue-300 focus-visible:outline-none"
// 						// className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50  border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-300 focus:border-blue-300 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500 focus-visible:outline-none"
// 						// placeholder={`${placeHolder}`}
// 						// required
// 						// value={values.value}
// 					/>
// 				</div>
// 				<button
// 					// to={`/search`}
// 					// onClick={(event) => clickHandler(event)}
// 					type="submit"
// 					className={`${buttonStyles}`}
// 				>
// 					Search
// 				</button>
// 			</Form>
// 		</React.Fragment>
// 	);
// }
