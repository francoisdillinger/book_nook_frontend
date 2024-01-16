import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { motion } from "framer-motion";
import {
	reformatUserData,
	getFilteredData,
	ProcessedUserType,
} from "../utils/usersAdminChartUtilities";
import { TooltipStateType } from "./ChartToolTip";
import { UsersType } from "../data/users";
import XAxis from "./XAxis";
import YAxis from "./YAxis";

type UsersAdminBarChartType = {
	graphWidth: number;
	graphHeight: number;
	tooltip: TooltipStateType;
	setTooltip: Function;
	users: UsersType;
	colorScale: Function;
	hasData: number;
	setHasData: Function;
	setSelectOptions: Function;
	focusedUser: string;
};

export default function UsersAdminBarChart({
	graphHeight,
	graphWidth,
	tooltip,
	setTooltip,
	users,
	colorScale,
	hasData,
	setHasData,
	setSelectOptions,
	focusedUser,
}: UsersAdminBarChartType) {
	useEffect(() => {
		// console.log(graphHeight);
		// console.log(graphWidth);
	}, [graphWidth]);
	return <React.Fragment></React.Fragment>;
}
