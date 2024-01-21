import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { users } from "../data/users";
import ReactSelect from "./ReactSelect";
import ChartTimePeriodButtons from "./ChartTimePeriodButtons";
import ChartToolTip from "./ChartToolTip";
import { TooltipStateType } from "./ChartToolTip";
import UsersAdminChart from "./UsersAdminChart";
import UsersAdminBarChart from "./UsersAdminBarChart";
import UsersAdminPieChart from "./UsersAdminPieChart";
import ResponsiveSVGContainer from "./ResponsiveSVGContainer";
import AdminChartReactSelect from "./AdminChartReactSelect";
import UsersChartReactSelect from "./UsersChartReactSelect";

export type MarginType = {
	top: number;
	right: number;
	bottom: number;
	left: number;
};

const margin: MarginType = { top: 20, right: 20, bottom: 50, left: 80 };
const colorScale = d3.scaleOrdinal(d3.schemeSet3);

export default function AdminChart() {
	const filter = [
		{ name: "Authors" },
		{ name: "Categories" },
		{ name: "Users" },
	];
	const [filterChart, setChartFilter] = useState(filter[0].name);
	const [focusedUser, setFocusedUser] = useState("");
	const [timeFilter, setTimeFilter] = useState("max");
	const [hasData, setHasData] = useState(0);
	const [selectOptions, setSelectOptions] = useState("");
	const [tooltip, setTooltip] = useState<TooltipStateType>({
		visible: false,
		content: null,
		x: 0,
		y: 0,
	});

	useEffect(() => {
		const onGlobalClick = () => {
			setFocusedUser("");
		};
		window.addEventListener("click", onGlobalClick);

		return () => {
			window.removeEventListener("click", onGlobalClick);
		};
	}, []);
	console.log("Filter: ", filterChart);
	return (
		<React.Fragment>
			<div className="flex flex-wrap lg:ml-20 xl:ml-28">
				<div className=" rounded-lg w-full flex flex-wrap md:justify-between lg:flex-nowrap xl:h-20 xl:items-center">
					<div className="flex w-full justify-start h-20 items-center gap-4  lg:w-1/2 xl:h-fit">
						<AdminChartReactSelect
							placeHolder={filterChart}
							filterChart={filter}
							setChartFilter={setChartFilter}
						/>
						{filterChart === "Users" && selectOptions.length && (
							<UsersChartReactSelect
								options={selectOptions}
								colorScale={colorScale}
								setFocusedUser={setFocusedUser}
								focusedUser={focusedUser}
							/>
						)}
					</div>
					<div className="flex justify-start w-full mr-2 h-20 items-center lg:w-1/2 lg:justify-end xl:h-fit">
						<ChartTimePeriodButtons
							timeFilter={timeFilter}
							setTimeFilter={setTimeFilter}
						/>
					</div>
				</div>{" "}
			</div>
			{filterChart === "Users" && (
				<UsersAdminChart
					margin={margin}
					timeFilter={timeFilter}
					tooltip={tooltip}
					setTooltip={setTooltip}
					users={users}
					colorScale={colorScale}
					hasData={hasData}
					setHasData={setHasData}
					setSelectOptions={setSelectOptions}
					focusedUser={focusedUser}
					width={0}
					height={0}
					setTimeFilter={setTimeFilter}
					selectOptions={selectOptions}
					setFocusedUser={setFocusedUser}
				/>
			)}
		</React.Fragment>
	);
}
