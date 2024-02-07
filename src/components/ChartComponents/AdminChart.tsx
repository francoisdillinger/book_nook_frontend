import React, { useEffect, useState } from "react";
import * as d3 from "d3";
import { users } from "../../data/users";
// import ReactSelect from "./ReactSelect";
import ChartTimePeriodButtons from "../ChartTimePeriodButtons";
// import ChartToolTip from "./ChartToolTip";
import { TooltipStateType } from "./ChartToolTip";
import UsersAdminChart from "./UserChart/UsersAdminChart";
// import UsersAdminBarChart from "./UserChart/UsersAdminBarChart";
// import UsersAdminPieChart from "./UserChart/UsersAdminPieChart";
// import ResponsiveSVGContainer from "../ResponsiveSVGContainer";
import AdminChartReactSelect from "./AdminChartReactSelect";
import UsersChartReactSelect from "./UserChart/UsersChartReactSelect";
import CategoriesAdminChart from "./CategoriesChart/CategoriesAdminChart";
import CategoriesChartReactSelect from "./CategoriesChart/CategoriesChartReactSelect";

const doesToolTipOverflowWindow = (e: React.MouseEvent) => {
	const tooltipWidth = 150; // Set maximum expected width of tooltip
	const tooltipHeight = 50; // Set maximum expected height of tooltip
	const windowPadding = 10; // Padding from the edge of the window

	// Calculate position
	let x = e.pageX + 10;
	let y = e.pageY + 10;

	// Adjust if tooltip overflows the window
	if (x + tooltipWidth > window.innerWidth - windowPadding) {
		x = e.pageX - tooltipWidth - windowPadding;
	}
	if (y + tooltipHeight > window.innerHeight - windowPadding) {
		y = e.pageY - tooltipHeight - windowPadding;
	}
	return { x: x, y: y };
};

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
	// console.log("Filter: ", filterChart);
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
						{filterChart === "Categories" && selectOptions.length && (
							<CategoriesChartReactSelect
								options={selectOptions}
								colorScale={colorScale}
								setFocusedUser={setFocusedUser}
								focusedCategory={focusedUser}
							/>
						)}
					</div>
					<div className="flex justify-start w-full mr-4 h-20 items-center lg:w-1/2 lg:justify-end xl:h-fit">
						<ChartTimePeriodButtons
							timeFilter={timeFilter}
							setTimeFilter={setTimeFilter}
						/>
					</div>
				</div>{" "}
			</div>
			<div className="mr-4">
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
						doesToolTipOverflowWindow={doesToolTipOverflowWindow}
					/>
				)}
				{filterChart === "Categories" && (
					<CategoriesAdminChart
						margin={margin}
						timeFilter={timeFilter}
						tooltip={tooltip}
						setTooltip={setTooltip}
						colorScale={colorScale}
						hasData={hasData}
						setHasData={setHasData}
						setSelectOptions={setSelectOptions}
						width={0}
						height={0}
						setTimeFilter={setTimeFilter}
						selectOptions={selectOptions}
						doesToolTipOverflowWindow={doesToolTipOverflowWindow}
						focusedCategory={focusedUser}
						focusedUser={focusedUser}
						setFocusedUser={setFocusedUser}
					/>
				)}
			</div>
		</React.Fragment>
	);
}
