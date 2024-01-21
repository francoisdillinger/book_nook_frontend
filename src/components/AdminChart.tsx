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
const colorScale = d3.scaleOrdinal(d3.schemeSet3);

export default function AdminChart() {
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

	return (
		<React.Fragment>
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
		</React.Fragment>
	);
}
