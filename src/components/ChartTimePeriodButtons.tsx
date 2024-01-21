import React from "react";

type ChartTimePeriodType = {
	timeFilter: string;
	setTimeFilter: Function;
};

export default function ChartTimePeriodButtons({
	timeFilter,
	setTimeFilter,
}: ChartTimePeriodType) {
	return (
		<React.Fragment>
			<div className="">
				<button
					className={`p-2 w-16 ${
						timeFilter === "day"
							? "bg-slate-100 rounded-full text-logo shadow-md "
							: "text-neutral-600"
					}`}
					onClick={() => setTimeFilter("day")}
				>
					1D
				</button>
				<button
					className={`p-2 w-16 ${
						timeFilter === "week"
							? "bg-slate-100 rounded-full text-logo shadow-md"
							: "text-neutral-600"
					}`}
					onClick={() => setTimeFilter("week")}
				>
					1W
				</button>
				<button
					className={`p-2 w-16 ${
						timeFilter === "month"
							? "bg-slate-100 rounded-full text-logo shadow-md"
							: "text-neutral-600"
					}`}
					onClick={() => setTimeFilter("month")}
				>
					1M
				</button>
				<button
					className={`p-2 w-16 ${
						timeFilter === "half-year"
							? "bg-slate-100 rounded-full text-logo shadow-md"
							: "text-neutral-600"
					}`}
					onClick={() => setTimeFilter("half-year")}
				>
					6M
				</button>
				<button
					className={`p-2 w-16 ${
						timeFilter === "year"
							? "bg-slate-100 rounded-full text-logo shadow-md"
							: "text-neutral-600"
					}`}
					onClick={() => setTimeFilter("year")}
				>
					YTD
				</button>
				<button
					className={`p-2 w-16 ${
						timeFilter === "max"
							? "bg-slate-100 rounded-full text-logo shadow-md"
							: "text-neutral-600"
					}`}
					onClick={() => setTimeFilter("max")}
				>
					Max
				</button>
			</div>
		</React.Fragment>
	);
}
