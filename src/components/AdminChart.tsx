import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { users } from "../data/users";
import ReactSelect from "./ReactSelect";
import ChartTimePeriodButtons from "./ChartTimePeriodButtons";
import ChartToolTip from "./ChartToolTip";
import { TooltipStateType } from "./ChartToolTip";
import UsersAdminChart from "./UsersAdminChart";

const margin = { top: 20, right: 20, bottom: 100, left: 40 };
const graphHeight = 600 - margin.top - margin.bottom;
const colorScale = d3.scaleOrdinal(d3.schemeTableau10);

export default function AdminChart() {
	const svgRef = useRef<SVGSVGElement>(null);
	const graphRef = useRef<SVGSVGElement>(null);
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
	const graphWidth =
		windowSizeInPixels <= 800
			? windowSizeInPixels - margin.left - margin.right
			: windowSizeInPixels * 0.9 - margin.left - margin.right;

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
			<div className="flex ml-16">
				<div
					className="bg-white rounded-lg my-2 pt-2 mx-auto"
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
						<svg
							ref={svgRef}
							width={windowSizeInPixels * 0.9}
							height={550}
						>
							<g
								ref={graphRef}
								width={graphWidth}
								height={graphHeight}
								transform={`translate(${margin.left},${margin.top})`}
							>
								<UsersAdminChart
									timeFilter={timeFilter}
									graphHeight={graphHeight}
									graphWidth={graphWidth}
									tooltip={tooltip}
									setTooltip={setTooltip}
									users={users}
									colorScale={colorScale}
									hasData={hasData}
									setHasData={setHasData}
									setSelectOptions={setSelectOptions}
									focusedUser={focusedUser}
								/>
							</g>
						</svg>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
