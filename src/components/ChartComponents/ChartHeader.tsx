import React from "react";
import SimpleSelect from "../SimpleSelect";
import { useDispatch, useSelector } from "react-redux";
import {
	ChartSortType,
	setSortOption,
} from "../../features/chart/chartSortOptionsSlice";
import { RootState } from "../../app/store";

type ChartHeaderProps = {
	decreasePageIndex: () => void;
	pageIndex: number;
	totalPages: number;
	increasePageIndex: () => void;
};

export default function ChartHeader({
	pageIndex,
	totalPages,
	decreasePageIndex,
	increasePageIndex,
}: ChartHeaderProps) {
	const dispatch = useDispatch();
	const { sortOptions } = useSelector(
		(state: RootState) => state.chartSortOptions
	);

	const handleSortChange = (selectedOption: ChartSortType) => {
		dispatch(setSortOption(selectedOption));
	};
	return (
		<React.Fragment>
			<div className="ml-20">
				<SimpleSelect
					options={sortOptions}
					onChange={handleSortChange}
				/>
			</div>
			<div className="w-44 flex justify-between mr-4 bg-white p-1 rounded-md">
				<button
					onClick={decreasePageIndex}
					className=" p-1 m-1 rounded-md text-sm font-medium bg-gray-100 enabled:active:scale-90 enabled:shadow-sm disabled:shadow-none enabled:text-logo disabled:text-gray-400  enabled:cursor-pointer diabled:cursor-default"
					disabled={pageIndex === 1}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						className="w-6 h-6 stroke-2 stroke-current"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M15.75 19.5 8.25 12l7.5-7.5"
						/>
					</svg>
				</button>
				<div className="flex justify-center items-center text-gray-500 text-sm font-semibold">
					Page {pageIndex} of {totalPages}
				</div>
				<button
					onClick={increasePageIndex}
					className=" p-1 m-1 rounded-md text-sm font-medium bg-gray-100 enabled:active:scale-90 enabled:shadow-sm disabled:shadow-none enabled:text-logo disabled:text-gray-400  enabled:cursor-pointer diabled:cursor-default"
					disabled={pageIndex === totalPages}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						className="w-6 h-6 stroke-2 stroke-current"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="m8.25 4.5 7.5 7.5-7.5 7.5"
						/>
					</svg>
				</button>
			</div>
		</React.Fragment>
	);
}
