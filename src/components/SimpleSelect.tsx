import React, { Dispatch, SetStateAction, useState } from "react";

type SimpleSelectType = {
	options: string[];
	setSortOption: Dispatch<SetStateAction<string>>;
};

export default function SimpleSelect({
	options,
	setSortOption,
}: SimpleSelectType) {
	// const [sortOption, setSortOption] = useState<{ sortOption: string }>({
	// 	sortOption: options[0],
	// });

	// const selectOptionsHandler = (
	// 	event: React.ChangeEvent<HTMLSelectElement>
	// ) => {
	// 	setSortOption({
	// 		sortOption: event.target.value,
	// 	});
	// };

	// console.log("Option: ", sortOption.sortOption);

	return (
		<div className="h-full">
			<select
				id="book-selector"
				className="h-full w-42 md:w-fitfont-semibold form-select block py-2.5 px-3 border border-gray-300 bg-white text-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-blue-300 focus:border-blue-300 sm:text-sm"
				onChange={(event) => setSortOption(event.target.value)}
			>
				{options.map((option) => (
					<option key={option}>{option}</option>
				))}
			</select>
		</div>
	);
}
