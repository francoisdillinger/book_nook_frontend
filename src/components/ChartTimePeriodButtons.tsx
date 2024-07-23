import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";
import { setTimeFilter } from "../features/chart/chartTimeFilterSlice";

export default function ChartTimePeriodButtons() {
	const timeFilter = useSelector(
		(state: RootState) => state.chartTimeFilter.timeFilter
	);
	const dispatch = useDispatch();

	return (
		<React.Fragment>
			<div className="">
				<button
					className={`p-2 w-16 ${
						timeFilter === "day"
							? "bg-gray-100 rounded-full text-logo shadow-md "
							: " text-neutral-600"
					}`}
					onClick={() => dispatch(setTimeFilter("day"))}
				>
					1D
				</button>
				<button
					className={`p-2 w-16 ${
						timeFilter === "week"
							? "bg-gray-100 rounded-full text-logo shadow-md"
							: " text-neutral-600"
					}`}
					onClick={() => dispatch(setTimeFilter("week"))}
				>
					1W
				</button>
				<button
					className={`p-2 w-16 ${
						timeFilter === "month"
							? "bg-gray-100 rounded-full text-logo shadow-md"
							: " text-neutral-600"
					}`}
					onClick={() => dispatch(setTimeFilter("month"))}
				>
					1M
				</button>
				<button
					className={`p-2 w-16 ${
						timeFilter === "half-year"
							? "bg-gray-100 rounded-full text-logo shadow-md"
							: " text-neutral-600"
					}`}
					onClick={() => dispatch(setTimeFilter("half-year"))}
				>
					6M
				</button>
				<button
					className={`p-2 w-16 ${
						timeFilter === "year"
							? "bg-gray-100 rounded-full text-logo shadow-md"
							: " text-neutral-600"
					}`}
					onClick={() => dispatch(setTimeFilter("year"))}
				>
					YTD
				</button>
				<button
					className={`p-2 w-16 ${
						timeFilter === "max"
							? "bg-gray-100 rounded-full text-logo shadow-md"
							: " text-neutral-600"
					}`}
					onClick={() => dispatch(setTimeFilter("max"))}
				>
					Max
				</button>
			</div>
		</React.Fragment>
	);
}
