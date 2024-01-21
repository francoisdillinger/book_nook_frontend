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

export type MarginType = {
	top: number;
	right: number;
	bottom: number;
	left: number;
};

const margin: MarginType = { top: 20, right: 20, bottom: 50, left: 80 };
// const svgHeight = 450;
// const graphLineChartHeight = svgHeight - margin.top - margin.bottom;
const colorScale = d3.scaleOrdinal(d3.schemeSet3);

export default function AdminChart() {
	// const svgLineChartRef = useRef<SVGSVGElement>(null);
	// const graphLineChartRef = useRef<SVGSVGElement>(null);
	const [focusedUser, setFocusedUser] = useState("");
	// const [windowSizeInPixels, setWindowSizeInPixels] = useState(
	// 	window.innerWidth
	// );
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

	// useEffect(() => {
	// 	const windowSizePixels = () => {
	// 		setWindowSizeInPixels(window.innerWidth);
	// 		console.log(window.innerWidth);
	// 	};
	// 	const onGlobalClick = () => {
	// 		setFocusedUser("");
	// 	};
	// 	window.addEventListener("resize", windowSizePixels);
	// 	window.addEventListener("click", onGlobalClick);

	// 	return () => {
	// 		window.removeEventListener("resize", windowSizePixels);
	// 		window.removeEventListener("click", onGlobalClick);
	// 	};
	// }, []);

	return (
		<React.Fragment>
			{/* <div className="flex lg:ml-20 xl:ml-28">

			</div> */}
			<div className="flex flex-wrap lg:ml-20 xl:ml-28">
				<div className=" rounded-lg w-full flex flex-wrap md:justify-between lg:flex-nowrap xl:h-20 xl:items-center">
					<div className="flex w-full justify-start h-20 items-center gap-4  lg:w-1/2 xl:h-fit">
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
					<div className="flex justify-start w-full mr-2 h-20 items-center lg:w-1/2 lg:justify-end xl:h-fit">
						<ChartTimePeriodButtons
							timeFilter={timeFilter}
							setTimeFilter={setTimeFilter}
						/>
					</div>
				</div>
				<div className="w-full flex flex-wrap md:flex-nowrap gap-2 md:gap-4 box-border justify-between mt-4 mb-2">
					<div className="bg-white rounded-lg flex justify-center p-8 w-full sm:half-width-minus-gap md:w-1/4">
						<div className="flex flex-col items-start">
							<h1 className="text-slate-600 font-bold text-lg">Total Sales</h1>
							<div className="flex items-center my-2">
								<p className="text-slate-500 font-normal text-3xl">$2,453</p>
								<div className="ml-10">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										className="w-8 h-8 stroke-green-600 bg-green-200 rounded-full p-1"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
										/>
									</svg>
								</div>
							</div>
							<p className="text-slate-400 font-normal text-sm">
								<span className="text-green-400">+1.2%</span> vs last week
							</p>
						</div>
					</div>
					{/* ================================ */}
					<div className="bg-white rounded-lg flex justify-center p-8 w-full sm:half-width-minus-gap md:w-1/4">
						<div className="flex flex-col items-start">
							<h1 className="text-slate-600 font-bold text-lg">Avg Sale</h1>
							<div className="flex items-center my-2">
								<p className="text-slate-500 font-normal text-3xl">$23.00</p>
								<div className="ml-10">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										className="w-8 h-8 stroke-red-600 bg-red-200 rounded-full p-1"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181"
										/>
									</svg>
								</div>
							</div>
							<p className="text-slate-400 font-normal text-sm">
								<span className="text-red-400">+1.2%</span> vs last week
							</p>
						</div>
					</div>
					{/* =================================== */}
					<div className="bg-white rounded-lg flex justify-center p-8 w-full sm:half-width-minus-gap md:w-1/4">
						<div className="flex flex-col items-start">
							<h1 className="text-slate-600 font-bold text-lg">Total Books</h1>
							<div className="flex items-center my-2">
								<p className="text-slate-500 font-normal text-3xl">453</p>
								<div className="ml-10">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										className="w-8 h-8 stroke-green-600 bg-green-200 rounded-full p-1"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
										/>
									</svg>
								</div>
							</div>
							<p className="text-slate-400 font-normal text-sm">
								<span className="text-green-400">+1.2%</span> vs last week
							</p>
						</div>
					</div>
					{/* ================================ */}
					<div className="bg-white rounded-lg flex justify-center p-8 w-full sm:half-width-minus-gap md:w-1/4">
						<div className="flex flex-col items-start">
							<h1 className="text-slate-600 font-bold text-lg">
								Avg Book Order
							</h1>
							<div className="flex items-center my-2">
								<p className="text-slate-500 font-normal text-3xl">23</p>
								<div className="ml-10">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										className="w-8 h-8 stroke-red-600 bg-red-200 rounded-full p-1"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181"
										/>
									</svg>
								</div>
							</div>
							<p className="text-slate-400 font-normal text-sm">
								<span className="text-red-400">+1.2%</span> vs last week
							</p>
						</div>
					</div>
					{/* =================================== */}
				</div>
				<div
					className="bg-white rounded-lg my-2 pt-2 w-full"
					// style={{ width: windowSizeInPixels * 0.9 }}
				>
					{/* <div className="h-12 flex flex-wrap  md:flex-nowrap md:items-center md:justify-between">
						<div className="w-full flex justify-end mr-4">
							<ChartTimePeriodButtons
								timeFilter={timeFilter}
								setTimeFilter={setTimeFilter}
							/>
						</div>
						<div className="ml-20 mt-8 md:mr-5 md:mt-0 md:pt-2">
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
					</div> */}

					<ChartToolTip tooltip={tooltip} />

					<div className=" flex justify-center mt-10 md:mt-0">
						<div className="w-full h-[450px]">
							<ResponsiveSVGContainer>
								<UsersAdminChart
									margin={margin}
									timeFilter={timeFilter}
									// windowSizeInPixels={windowSizeInPixels}
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
							</ResponsiveSVGContainer>
						</div>
					</div>
				</div>
			</div>
			<div
				className="border-box flex flex-wrap lg:flex-nowrap lg:ml-20 xl:ml-28 justify-between md:gap-4"
				// style={{ width: windowSizeInPixels * 0.9 }}
			>
				<div className="bg-white rounded-lg my-2 pt-2 w-full lg:w-3/4 h-96">
					<ResponsiveSVGContainer>
						<UsersAdminBarChart
							margin={margin}
							timeFilter={timeFilter}
							// windowSizeInPixels={windowSizeInPixels}
							// graphHeight={350 - 10 - 50}
							// graphWidth={
							// 	windowSizeInPixels * 0.54 - margin.left - margin.right
							// }
							tooltip={tooltip}
							setTooltip={setTooltip}
							users={users}
							colorScale={colorScale}
							hasData={hasData}
							setHasData={setHasData}
							setSelectOptions={setSelectOptions}
							focusedUser={focusedUser}
						/>
					</ResponsiveSVGContainer>
				</div>
				<div className="bg-white rounded-lg my-2 pt-2 w-full  lg:w-1/4 h-96">
					<ResponsiveSVGContainer>
						<UsersAdminPieChart
							timeFilter={timeFilter}
							// windowSizeInPixels={windowSizeInPixels}
							// graphWidth={windowSizeInPixels * 0.34}
							// graphHeight={350}
							tooltip={tooltip}
							setTooltip={setTooltip}
							users={users}
							colorScale={colorScale}
							hasData={hasData}
							setHasData={setHasData}
							setSelectOptions={setSelectOptions}
							focusedUser={focusedUser}
						/>
					</ResponsiveSVGContainer>
				</div>
			</div>
		</React.Fragment>
	);
}
