import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import React, { Dispatch, SetStateAction, useState } from "react";
import { ChartSortType } from "../features/chart/chartSortOptionsSlice";

type SimpleSelectProps<T> = {
	options: T[];
	onChange: (selectedOption: T) => void;
};

export default function SimpleSelect<T extends string>({
	options,
	onChange,
}: SimpleSelectProps<T>) {
	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		onChange(event.target.value as T);
	};

	return (
		<div className="h-full">
			<select
				id="book-selector"
				className="h-full w-42 md:w-fit font-semibold form-select block py-2.5 px-3 border border-gray-300 bg-white text-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-blue-300 focus:border-blue-300 sm:text-sm"
				onChange={handleChange}
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
		</div>
	);
}
