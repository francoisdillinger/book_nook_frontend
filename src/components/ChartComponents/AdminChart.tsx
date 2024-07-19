import React, { useEffect, useState } from "react";
import * as d3 from "d3";
import { users } from "../../data/users";
import ChartTimePeriodButtons from "../ChartTimePeriodButtons";
import { TooltipStateType } from "./ChartToolTip";
import UsersAdminChart from "./UserChart/UsersAdminChart";
import AdminChartReactSelect from "./AdminChartReactSelect";
import UsersChartReactSelect from "./UserChart/UsersChartReactSelect";
import CategoriesAdminChart from "./CategoriesChart/CategoriesAdminChart";
import CategoriesChartReactSelect from "./CategoriesChart/CategoriesChartReactSelect";
import {
	TotalSalesType,
	AverageSalesType,
	TotalBooksType,
	AverageBooksType,
	reformatUserData,
	getFilteredData,
	calculatePercentageChange,
	previousPeriodOrders,
	totalsReducer,
	totalOrdersReducer,
	totalOrderedQuantityReducer,
	previousTime,
} from "../../utils/usersAdminChartUtilities";
import { filterOutInactiveUsers } from "./UserChart/UsersAdminLineChart";
import TotalsComponent from "./TotalsComponent";
import AuthorsAdminChart from "./AuthorsChart/AuthorsAdminChart";
import AuthorsChartReactSelect from "./AuthorsChart/AuthorsReactSelect";
// import { authors_data } from "../../data/authors_data";
import { authors_data } from "../../data/authors_data";
import { categories_data } from "../../data/categories_data";
import { usePagination } from "../../hooks/usePagination";
import { getFilteredAuthorsData } from "../../utils/authorsAdminChartUtilities";
import {
	trimAuthorsData,
	combineName,
	combineOrders,
	sortOrders,
	CombinedAuthorsOrdersType,
} from "./AuthorsChart/AuthorsAdminLineChart";

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
	const [additionalOptions, setAdditionalOptions] = useState("");
	const [tooltip, setTooltip] = useState<TooltipStateType>({
		visible: false,
		content: null,
		x: 0,
		y: 0,
	});
	const [totalSales, setTotalSales] = useState<TotalSalesType>();
	const [avgSale, setAvgSale] = useState<AverageSalesType>();
	const [totalBooks, setTotalBooks] = useState<TotalBooksType>();
	const [avgBookOrder, setAvgBookOrder] = useState<AverageBooksType>();

	// const [filtered, setFiltered] = useState<ProcessedUserType[]>();

	useEffect(() => {
		const reformatedUserData = reformatUserData(users);
		const filteredUsers = filterOutInactiveUsers(reformatedUserData);
		const filteredUserchart = getFilteredData(timeFilter, filteredUsers);
		const previousFiltered = previousPeriodOrders(filteredUsers, timeFilter);
		const prevTotal = totalsReducer(previousFiltered);
		const prevNumOrders = totalOrdersReducer(previousFiltered);
		const prevTotalBooksOrdered = totalOrderedQuantityReducer(previousFiltered);
		const total = totalsReducer(filteredUserchart);
		const totalNumOrders = totalOrdersReducer(filteredUserchart);
		const totalBooksOrdered = totalOrderedQuantityReducer(filteredUserchart);

		// setFiltered(filteredUserchart);
		setTotalSales({
			currentTotal: total / 100,
			previousTotal: prevTotal / 100,
			totalChange: calculatePercentageChange(total, prevTotal),
		});
		setAvgSale({
			currentAverage: total / totalNumOrders / 100 || 0,
			previousAverage: prevTotal / prevNumOrders / 100 || 0,
			totalAverage:
				calculatePercentageChange(
					total / totalNumOrders,
					prevTotal / prevNumOrders
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
			currentAverage: totalBooksOrdered / totalNumOrders || 0,
			previousAverage: prevTotalBooksOrdered / prevNumOrders || 0,
			totalAverage:
				calculatePercentageChange(
					totalBooksOrdered / totalNumOrders,
					prevTotalBooksOrdered / prevNumOrders
				) || 0,
		});
	}, [timeFilter]);

	useEffect(() => {
		const onGlobalClick = () => {
			setFocusedUser("");
		};
		window.addEventListener("click", onGlobalClick);

		return () => {
			window.removeEventListener("click", onGlobalClick);
		};
	}, []);

	// console.log("ChartData: ", authors_data);
	return (
		<React.Fragment>
			<div className="flex flex-wrap lg:ml-20 xl:ml-18">
				<div className=" rounded-lg w-full flex flex-wrap md:justify-between lg:flex-nowrap xl:h-20 xl:items-center">
					<div className="flex w-full justify-start h-20 items-center gap-4 lg:w-1/2 xl:h-fit">
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
							<>
								<CategoriesChartReactSelect
									options={selectOptions}
									colorScale={colorScale}
									setFocusedUser={setFocusedUser}
									focusedCategory={focusedUser}
								/>
								{/* <CategoriesChartReactSelect
									options={additionalOptions}
									colorScale={colorScale}
									setFocusedUser={setFocusedUser}
									focusedCategory={focusedUser}
								/> */}
							</>
						)}
						{filterChart === "Authors" && selectOptions.length && (
							<AuthorsChartReactSelect
								options={selectOptions}
								colorScale={colorScale}
								setFocusedUser={setFocusedUser}
								focusedAuthor={focusedUser}
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
				<div className="flex flex-wrap lg:ml-20 xl:ml-18">
					<div className="w-full flex flex-wrap md:flex-nowrap gap-2 md:gap-4 box-border justify-between mt-4 mb-2">
						<TotalsComponent
							title="Total Sales"
							isDollarAmount={true}
							current={(totalSales ? totalSales.currentTotal : 0).toFixed(2)}
							change={totalSales ? totalSales.totalChange : 0}
							previousPeriod={previousTime(timeFilter)}
						/>
						<TotalsComponent
							title="Avg Sales"
							isDollarAmount={true}
							current={(avgSale ? avgSale.currentAverage : 0).toFixed(2)}
							change={avgSale ? avgSale.totalAverage : 0}
							previousPeriod={previousTime(timeFilter)}
						/>
						<TotalsComponent
							title="Total Books"
							isDollarAmount={false}
							current={(totalBooks ? totalBooks.currentTotal : 0).toString()}
							change={totalBooks ? totalBooks.totalChange : 0}
							previousPeriod={previousTime(timeFilter)}
						/>
						<TotalsComponent
							title="Avg Books"
							isDollarAmount={false}
							current={Math.round(
								avgBookOrder ? avgBookOrder.currentAverage : 0
							).toString()}
							change={avgBookOrder ? avgBookOrder.totalAverage : 0}
							previousPeriod={previousTime(timeFilter)}
						/>
					</div>
				</div>
				{/* <div className=" bg-gray-100 lg:ml-20 xl:ml-18 rounded-t-lg pt-3 mt-2">
					<div className="w-1/2 flex justify-between m-auto">
						<button
							onClick={decreasePageIndex}
							className=" p-1 m-1 rounded-md text-sm font-medium bg-white enabled:active:scale-90 enabled:shadow-sm disabled:shadow-none enabled:text-logo disabled:text-gray-400  enabled:cursor-pointer diabled:cursor-default"
							disabled={pageIndex === 1}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								className="w-6 h-6 stroke-2 stroke-current"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M15.75 19.5 8.25 12l7.5-7.5"
								/>
							</svg>
						</button>
						<div className="flex justify-center items-center text-gray-500 text-sm font-semibold">
							Page {pageIndex} of {totalPages}
						</div>
						<button
							onClick={increasePageIndex}
							className=" p-1 m-1 rounded-md text-sm font-medium bg-white enabled:active:scale-90 enabled:shadow-sm disabled:shadow-none enabled:text-logo disabled:text-gray-400  enabled:cursor-pointer diabled:cursor-default"
							disabled={pageIndex === totalPages}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								className="w-6 h-6 stroke-2 stroke-current"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="m8.25 4.5 7.5 7.5-7.5 7.5"
								/>
							</svg>
						</button>
					</div>
				</div> */}
				{filterChart === "Users" && (
					<UsersAdminChart
						margin={margin}
						timeFilter={timeFilter}
						tooltip={tooltip}
						setTooltip={setTooltip}
						chartData={users}
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
						chartData={categories_data}
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
				{filterChart === "Authors" && (
					<AuthorsAdminChart
						chartData={authors_data}
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
