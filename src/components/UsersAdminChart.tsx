import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { UsersType, users } from "../data/users";
import ReactSelect from "./ReactSelect";
import ChartTimePeriodButtons from "./ChartTimePeriodButtons";
import ChartToolTip from "./ChartToolTip";
import { TooltipStateType } from "./ChartToolTip";
import UsersAdminBarChart from "./UsersAdminBarChart";
import UsersAdminPieChart from "./UsersAdminPieChart";
import ResponsiveSVGContainer from "./ResponsiveSVGContainer";
import UsersAdminLineChart, {
	filterOutInactiveUsers,
} from "./UsersAdminLineChart";
import { MarginType } from "./AdminChart";
import {
	ProcessedUserType,
	getFilteredData,
	reformatUserData,
} from "../utils/usersAdminChartUtilities";

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

// const previousDate = (users: ProcessedUserType[], timeFilter: string) => {
// 	const currentDate = new Date();
// 	const pastDay = d3.timeDay.offset(currentDate, -1);
// 	const dayBefore = d3.timeDay.offset(currentDate, -2);
// 	const pastWeek = d3.timeDay.offset(currentDate, -7);
// 	const weekBefore = d3.timeDay.offset(currentDate, -14);
// 	const pastMonth = d3.timeDay.offset(currentDate, -30);
// 	const monthBefore = d3.timeDay.offset(currentDate, -60);
// 	const pastSixMonths = d3.timeDay.offset(currentDate, -180);
// 	const sixMonthsBefore = d3.timeDay.offset(currentDate, -360);
// 	const pastYear = d3.timeDay.offset(currentDate, -365);
// 	const yearBefore = d3.timeDay.offset(currentDate, -730);

// 	switch (timeFilter) {
// 		case "day":
// 			return users.map((user) => {
// 				return {
// 					...user,
// 					orders: user.orders.filter(
// 						(order) =>
// 							new Date(order.date) <= pastDay &&
// 							new Date(order.date) >= dayBefore
// 					),
// 				};
// 			});
// 			break;
// 		case "week":
// 			return users.map((user) => {
// 				return {
// 					...user,
// 					orders: user.orders.filter(
// 						(order) =>
// 							new Date(order.date) <= pastWeek &&
// 							new Date(order.date) >= weekBefore
// 					),
// 				};
// 			});
// 			break;
// 		case "month":
// 			return users.map((user) => {
// 				return {
// 					...user,
// 					orders: user.orders.filter(
// 						(order) =>
// 							new Date(order.date) <= pastMonth &&
// 							new Date(order.date) >= monthBefore
// 					),
// 				};
// 			});
// 			break;
// 		case "half-year":
// 			return users.map((user) => {
// 				return {
// 					...user,
// 					orders: user.orders.filter(
// 						(order) =>
// 							new Date(order.date) <= pastSixMonths &&
// 							new Date(order.date) >= sixMonthsBefore
// 					),
// 				};
// 			});
// 			break;
// 		case "year":
// 			return users.map((user) => {
// 				return {
// 					...user,
// 					orders: user.orders.filter(
// 						(order) =>
// 							new Date(order.date) <= pastYear &&
// 							new Date(order.date) >= yearBefore
// 					),
// 				};
// 			});
// 			break;
// 		case "max":
// 			return users;
// 			break;
// 		default:
// 			break;
// 	}
// };

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
			// console.log("Start Time: ", startPreviousPeriod);
			// console.log("End Time: ", endPreviousPeriod);
			// console.log("Order Date: ", orderDate);
			// console.log("Does it match: ", filtered);
			return filtered;
		}),
	}));
};

type TotalSalesType = {
	currentTotal: number;
	previousTotal: number;
	totalChange: number;
};

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
}: UsersAdminChartType) {
	const [totalSales, setTotalSales] = useState<TotalSalesType>();
	const [avgSale, setAvgSale] = useState("");
	const [totalBooks, setTotalBooks] = useState(0);
	const [avgBookOrder, setAvgBookOrder] = useState(0);
	const [filtered, setFiltered] = useState<ProcessedUserType[]>();
	// const [unFiltered, setUnFiltered] = useState<ProcessedUserType[]>();
	const [previousTotal, setPreviousTotal] = useState("");
	const [before, setBefore] = useState<ProcessedUserType[]>();

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
		const total = filteredUserchart
			.map((user) =>
				user.orders.reduce(
					(accumulator, order) => accumulator + Math.round(order.amount * 100),
					0
				)
			)
			.reduce((accumulator, userTotal) => accumulator + userTotal, 0);
		const averageSale = filteredUserchart
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
		// setUnFiltered(filteredUsers);
		// setPreviousTotal((prevTotal / 100).toFixed(2));
		setTotalSales({
			currentTotal: total / 100,
			previousTotal: prevTotal / 100,
			totalChange: (total / 100 / (prevTotal / 100)) * 100,
		});
		setAvgSale((total / averageSale / 100).toFixed(2));
		setTotalBooks(totalBooksOrdered);
		setAvgBookOrder(parseInt((totalBooksOrdered / averageSale).toFixed(2)));
	}, [timeFilter]);
	console.log("Total: ", totalSales.currentTotal);
	console.log("Prev Total: ", totalSales.previousTotal);
	// console.log("User Data: ", filtered);
	// console.log("Previous Data: ", previousPeriodOrders(unFiltered, timeFilter));
	// console.log("Total Amount: ", totalSales);
	// console.log("Avgerage Sale: ", avgSale);
	// console.log("Total Books: ", totalBooks);
	// console.log("Average Books Per Order: ", avgBookOrder);
	return (
		<React.Fragment>
			{/* <div className="flex lg:ml-20 xl:ml-28">

			</div> */}
			<div className="flex flex-wrap lg:ml-20 xl:ml-28">
				{/* <div className=" rounded-lg w-full flex flex-wrap md:justify-between lg:flex-nowrap xl:h-20 xl:items-center">
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
				</div> */}
				<div className="w-full flex flex-wrap md:flex-nowrap gap-2 md:gap-4 box-border justify-between mt-4 mb-2">
					<div className="bg-white rounded-lg flex justify-center p-8 w-full sm:half-width-minus-gap md:w-1/4">
						<div className="flex flex-col items-start">
							<h1 className="text-slate-600 font-bold text-lg">Total Sales</h1>
							<div className="flex items-center my-2">
								<p className="text-slate-500 font-normal text-3xl">
									${totalSales?.currentTotal.toFixed(2)}
								</p>
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
								<span
									className={`${
										totalSales?.totalChange > 0
											? "text-green-400"
											: "text-red-400"
									}`}
								>
									{totalSales?.totalChange > 0
										? "+" + totalSales?.totalChange.toFixed(2)
										: "-" + totalSales?.totalChange.toFixed(2)}
									%
								</span>{" "}
								vs {previousTime(timeFilter)}
							</p>
						</div>
					</div>
					{/* ================================ */}
					<div className="bg-white rounded-lg flex justify-center p-8 w-full sm:half-width-minus-gap md:w-1/4">
						<div className="flex flex-col items-start">
							<h1 className="text-slate-600 font-bold text-lg">Avg Sale</h1>
							<div className="flex items-center my-2">
								<p className="text-slate-500 font-normal text-3xl">
									${avgSale}
								</p>
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
								<p className="text-slate-500 font-normal text-3xl">
									{totalBooks}
								</p>
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
								<p className="text-slate-500 font-normal text-3xl">
									{avgBookOrder}
								</p>
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
						/>
					</ResponsiveSVGContainer>
				</div>
			</div>
		</React.Fragment>
	);
}
