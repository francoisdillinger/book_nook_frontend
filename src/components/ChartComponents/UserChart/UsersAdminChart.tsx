import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { UsersType, users } from "../../../data/users";
import ReactSelect from "./ReactSelect";
import ChartTimePeriodButtons from "../../ChartTimePeriodButtons";
import ChartToolTip from "../ChartToolTip";
import { TooltipStateType } from "../ChartToolTip";
import UsersAdminBarChart from "./UsersAdminBarChart";
import UsersAdminPieChart from "./UsersAdminPieChart";
import ResponsiveSVGContainer from "../../ResponsiveSVGContainer";
import UsersAdminLineChart, {
	filterOutInactiveUsers,
} from "./UsersAdminLineChart";
import { MarginType } from "../AdminChart";
import {
	ProcessedUserType,
	getFilteredData,
	reformatUserData,
} from "../../../utils/usersAdminChartUtilities";
import TotalsComponent from "../TotalsComponent";

const previousTime = (timeFilter: string) => {
	switch (timeFilter) {
		case "day":
			return "yesterday";
			break;
		case "month":
			return "last month";
			break;
		case "week":
			return "last week";
			break;
		case "half-year":
			return "previous six months";
			break;
		case "year":
			return "last year";
			break;
		case "max":
			return "before we existed";
			break;
		default:
			break;
	}
};

const calculatePercentageChange = (
	currentValue: number,
	previousValue: number
) => {
	if (previousValue === 0) {
		// Handle division by zero, if previous value is 0 and current is greater, it could be considered as 100% increase
		return currentValue > 0 ? 100 : 0;
	}

	return ((currentValue - previousValue) / previousValue) * 100;
};

const previousPeriodOrders = (
	users: ProcessedUserType[],
	timeFilter: string
) => {
	const currentDate = new Date();
	let startPreviousPeriod, endPreviousPeriod;

	switch (timeFilter) {
		case "day":
			startPreviousPeriod = d3.timeDay.offset(currentDate, -2);
			endPreviousPeriod = d3.timeDay.offset(currentDate, -1);
			break;
		case "week":
			startPreviousPeriod = d3.timeDay.offset(currentDate, -14);
			endPreviousPeriod = d3.timeDay.offset(currentDate, -7);
			break;
		case "month":
			startPreviousPeriod = d3.timeMonth.offset(currentDate, -2);
			endPreviousPeriod = d3.timeMonth.offset(currentDate, -1);
			break;
		case "half-year":
			startPreviousPeriod = d3.timeMonth.offset(currentDate, -12);
			endPreviousPeriod = d3.timeMonth.offset(currentDate, -6);
			break;
		case "year":
			startPreviousPeriod = d3.timeYear.offset(currentDate, -2);
			endPreviousPeriod = d3.timeYear.offset(currentDate, -1);
			break;
		default:
			return users;
	}
	return users.map((user) => ({
		...user,
		orders: user.orders.filter((order) => {
			const orderDate = new Date(order.date);
			const filtered =
				orderDate >= startPreviousPeriod && orderDate <= endPreviousPeriod;
			return filtered;
		}),
	}));
};

type TotalSalesType = {
	currentTotal: number;
	previousTotal: number;
	totalChange: number;
};

type AverageSalesType = {
	currentAverage: number;
	previousAverage: number;
	totalAverage: number;
};

type TotalBooksType = TotalSalesType;

type AverageBooksType = AverageSalesType;

type UsersAdminChartType = {
	margin: MarginType;
	timeFilter: string;
	setTimeFilter: Function;
	width: number;
	height: number;
	tooltip: TooltipStateType;
	setTooltip: Function;
	users: UsersType;
	colorScale: Function;
	hasData: number;
	setHasData: Function;
	selectOptions: any;
	setSelectOptions: Function;
	focusedUser: string;
	setFocusedUser: Function;
	doesToolTipOverflowWindow: Function;
};
export default function UsersAdminChart({
	margin,
	timeFilter,
	setTimeFilter,
	width,
	height,
	tooltip,
	setTooltip,
	users,
	colorScale,
	hasData,
	setHasData,
	setSelectOptions,
	selectOptions,
	focusedUser,
	setFocusedUser,
	doesToolTipOverflowWindow,
}: UsersAdminChartType) {
	const [totalSales, setTotalSales] = useState<TotalSalesType>();
	const [avgSale, setAvgSale] = useState<AverageSalesType>();
	const [totalBooks, setTotalBooks] = useState<TotalBooksType>();
	const [avgBookOrder, setAvgBookOrder] = useState<AverageBooksType>();
	const [filtered, setFiltered] = useState<ProcessedUserType[]>();

	useEffect(() => {
		const reformatedUserData = reformatUserData(users);
		const filteredUsers = filterOutInactiveUsers(reformatedUserData);
		const filteredUserchart = getFilteredData(timeFilter, filteredUsers);
		const previousFiltered = previousPeriodOrders(filteredUsers, timeFilter);
		const prevTotal = previousFiltered
			.map((user) =>
				user.orders.reduce(
					(accumulator, order) => accumulator + Math.round(order.amount * 100),
					0
				)
			)
			.reduce((accumulator, userTotal) => accumulator + userTotal, 0);
		const prevNumSales = previousFiltered
			.map((user) => user.orders.length)
			.reduce((accumulator, order) => accumulator + order, 0);
		const prevTotalBooksOrdered = previousFiltered
			.map((user) =>
				user.orders.reduce(
					(accumulator, order) => accumulator + order.quantity,
					0
				)
			)
			.reduce((accumulator, userTotal) => accumulator + userTotal, 0);
		const total = filteredUserchart
			.map((user) =>
				user.orders.reduce(
					(accumulator, order) => accumulator + Math.round(order.amount * 100),
					0
				)
			)
			.reduce((accumulator, userTotal) => accumulator + userTotal, 0);
		const totalNumSales = filteredUserchart
			.map((user) => user.orders.length)
			.reduce((accumulator, order) => accumulator + order, 0);

		const totalBooksOrdered = filteredUserchart
			.map((user) =>
				user.orders.reduce(
					(accumulator, order) => accumulator + order.quantity,
					0
				)
			)
			.reduce((accumulator, userTotal) => accumulator + userTotal, 0);
		setFiltered(filteredUserchart);
		setTotalSales({
			currentTotal: total / 100,
			previousTotal: prevTotal / 100,
			totalChange: calculatePercentageChange(total, prevTotal),
		});
		setAvgSale({
			currentAverage: total / totalNumSales / 100 || 0,
			previousAverage: prevTotal / prevNumSales / 100 || 0,
			totalAverage:
				calculatePercentageChange(
					total / totalNumSales,
					prevTotal / prevNumSales
				) || 0,
		});

		setTotalBooks({
			currentTotal: totalBooksOrdered,
			previousTotal: prevTotalBooksOrdered,
			totalChange: calculatePercentageChange(
				totalBooksOrdered,
				prevTotalBooksOrdered
			),
		});

		setAvgBookOrder({
			currentAverage: totalBooksOrdered / totalNumSales || 0,
			previousAverage: prevTotalBooksOrdered / prevNumSales || 0,
			totalAverage:
				calculatePercentageChange(
					totalBooksOrdered / totalNumSales,
					prevTotalBooksOrdered / prevNumSales
				) || 0,
		});
	}, [timeFilter]);

	return (
		<React.Fragment>
			<div className="flex flex-wrap lg:ml-20 xl:ml-28">
				<div className="w-full flex flex-wrap md:flex-nowrap gap-2 md:gap-4 box-border justify-between mt-4 mb-2">
					<TotalsComponent
						title="Total Sales"
						isDollarAmount={true}
						current={(totalSales ? totalSales?.currentTotal : 0).toFixed(2)}
						change={totalSales ? totalSales?.totalChange : 0}
						previousPeriod={previousTime(timeFilter)}
					/>
					<TotalsComponent
						title="Avg Sales"
						isDollarAmount={true}
						current={(avgSale ? avgSale!.currentAverage : 0).toFixed(2)}
						change={avgSale ? avgSale!.totalAverage : 0}
						previousPeriod={previousTime(timeFilter)}
					/>
					<TotalsComponent
						title="Total Books"
						isDollarAmount={false}
						current={(totalBooks ? totalBooks!.currentTotal : 0).toString()}
						change={totalBooks ? totalBooks!.totalChange : 0}
						previousPeriod={previousTime(timeFilter)}
					/>
					<TotalsComponent
						title="Avg Books"
						isDollarAmount={false}
						current={Math.round(
							avgBookOrder ? avgBookOrder!.currentAverage : 0
						).toString()}
						change={avgBookOrder ? avgBookOrder!.totalAverage : 0}
						previousPeriod={previousTime(timeFilter)}
					/>
				</div>
				<div className="bg-white rounded-lg my-2 pt-2 w-full">
					<ChartToolTip tooltip={tooltip} />

					<div className=" flex justify-center mt-10 md:mt-0">
						<div className="w-full h-[450px]">
							<ResponsiveSVGContainer>
								<UsersAdminLineChart
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
									doesToolTipOverflowWindow={doesToolTipOverflowWindow}
								/>
							</ResponsiveSVGContainer>
						</div>
					</div>
				</div>
			</div>
			<div className="border-box flex flex-wrap lg:flex-nowrap lg:ml-20 xl:ml-28 justify-between md:gap-4">
				<div className="bg-white rounded-lg my-2 pt-2 w-full lg:w-3/4 h-96">
					<ResponsiveSVGContainer>
						<UsersAdminBarChart
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
							doesToolTipOverflowWindow={doesToolTipOverflowWindow}
						/>
					</ResponsiveSVGContainer>
				</div>
				<div className="bg-white rounded-lg my-2 pt-2 w-full  lg:w-1/4 h-96">
					<ResponsiveSVGContainer>
						<UsersAdminPieChart
							timeFilter={timeFilter}
							tooltip={tooltip}
							setTooltip={setTooltip}
							users={users}
							colorScale={colorScale}
							hasData={hasData}
							setHasData={setHasData}
							setSelectOptions={setSelectOptions}
							focusedUser={focusedUser}
							doesToolTipOverflowWindow={doesToolTipOverflowWindow}
						/>
					</ResponsiveSVGContainer>
				</div>
			</div>
		</React.Fragment>
	);
}
