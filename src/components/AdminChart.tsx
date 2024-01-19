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

export type MarginType = {
	top: number;
	right: number;
	bottom: number;
	left: number;
};

const margin: MarginType = { top: 20, right: 20, bottom: 50, left: 80 };
// const svgHeight = 450;
// const graphLineChartHeight = svgHeight - margin.top - margin.bottom;
const colorScale = d3.scaleOrdinal(d3.schemeTableau10);

export default function AdminChart() {
	// const svgLineChartRef = useRef<SVGSVGElement>(null);
	// const graphLineChartRef = useRef<SVGSVGElement>(null);
	const [focusedUser, setFocusedUser] = useState("");
	const [windowSizeInPixels, setWindowSizeInPixels] = useState(
		window.innerWidth
	);
	const [timeFilter, setTimeFilter] = useState("max");
	const [hasData, setHasData] = useState(0);
	const [selectOptions, setSelectOptions] = useState("");
	const [tooltip, setTooltip] = useState<TooltipStateType>({
		visible: false,
		content: null,
		x: 0,
		y: 0,
	});
	// const graphLineChartWidth =
	// 	windowSizeInPixels <= 800
	// 		? windowSizeInPixels - margin.left - margin.right
	// 		: windowSizeInPixels * 0.9 - margin.left - margin.right;

	useEffect(() => {
		const windowSizePixels = () => {
			setWindowSizeInPixels(window.innerWidth);
			console.log(window.innerWidth);
		};
		const onGlobalClick = () => {
			setFocusedUser("");
		};
		window.addEventListener("resize", windowSizePixels);
		window.addEventListener("click", onGlobalClick);

		return () => {
			window.removeEventListener("resize", windowSizePixels);
			window.removeEventListener("click", onGlobalClick);
		};
	}, []);

	return (
		<React.Fragment>
			<div className="flex lg:ml-20 xl:ml-28">
				<div
					className="bg-white rounded-lg my-2 pt-2"
					style={{ width: windowSizeInPixels * 0.9 }}
				>
					<div className="h-12 flex items-center justify-between">
						<ChartTimePeriodButtons
							timeFilter={timeFilter}
							setTimeFilter={setTimeFilter}
						/>
						<div className=" mr-5 pt-2">
							{selectOptions ? (
								<ReactSelect
									options={selectOptions}
									colorScale={colorScale}
									setFocusedUser={setFocusedUser}
									focusedUser={focusedUser}
								/>
							) : (
								<></>
							)}
						</div>
					</div>
					<ChartToolTip tooltip={tooltip} />
					<div className="">
						<UsersAdminChart
							margin={margin}
							timeFilter={timeFilter}
							windowSizeInPixels={windowSizeInPixels}
							// graphHeight={graphLineChartHeight}
							// graphWidth={graphLineChartWidth}
							tooltip={tooltip}
							setTooltip={setTooltip}
							users={users}
							colorScale={colorScale}
							hasData={hasData}
							setHasData={setHasData}
							setSelectOptions={setSelectOptions}
							focusedUser={focusedUser}
						/>
					</div>
				</div>
			</div>
			<div
				className="flex lg:ml-20 xl:ml-28 justify-between"
				style={{ width: windowSizeInPixels * 0.9 }}
			>
				<div className="bg-white rounded-lg my-2 pt-2">
					<UsersAdminBarChart
						margin={margin}
						timeFilter={timeFilter}
						windowSizeInPixels={windowSizeInPixels}
						graphHeight={350 - 10 - 50}
						graphWidth={windowSizeInPixels * 0.54 - margin.left - margin.right}
						tooltip={tooltip}
						setTooltip={setTooltip}
						users={users}
						colorScale={colorScale}
						hasData={hasData}
						setHasData={setHasData}
						setSelectOptions={setSelectOptions}
						focusedUser={focusedUser}
					/>
				</div>
				<div className="bg-white rounded-lg my-2 pt-2">
					<UsersAdminPieChart
						timeFilter={timeFilter}
						windowSizeInPixels={windowSizeInPixels}
						graphWidth={windowSizeInPixels * 0.34}
						graphHeight={350}
						tooltip={tooltip}
						setTooltip={setTooltip}
						users={users}
						colorScale={colorScale}
						hasData={hasData}
						setHasData={setHasData}
						setSelectOptions={setSelectOptions}
						focusedUser={focusedUser}
					/>
				</div>
			</div>
		</React.Fragment>
	);
}
