import React, { useEffect, useState } from "react";
import * as d3 from "d3";
import { users } from "../data/users";
import ChartTimePeriodButtons from "./ChartTimePeriodButtons";
import { TooltipStateType } from "./ChartComponents/ChartToolTip";
import AdminChartReactSelect from "./ChartComponents/AdminChartReactSelect";
import UsersChartReactSelect from "./ChartComponents/UserChart/UsersChartReactSelect";
import CategoriesChartReactSelect from "./ChartComponents/CategoriesChart/CategoriesChartReactSelect";
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
} from "../utils/usersAdminChartUtilities";
// import { filterOutInactiveUsers } from "./ChartComponents/UserChart/UsersAdminLineChart";
import TotalsComponent from "./ChartComponents/SalesData";
import AdminChart from "./ChartComponents/AdminChart";
import AuthorsChartReactSelect from "./ChartComponents/AuthorsChart/AuthorsChartReactSelect";
import { authors_data } from "../data/authors_data";
import { categories_data } from "../data/categories_data";
import AuthorsAdminChart from "./ChartComponents/AuthorsChart/AuthorsAdminChart";
import ChartReactSelect from "./ChartComponents/ChartReactSelect";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";
import { setDataPoint } from "../features/chart/chartHighlightDataSlice";
// import { reformatUserData } from "../utils/junk";
import {
	// totalsReducer,
	// totalOrdersReducer,
	// totalOrderedQuantityReducer,
	// calculatePercentageChange,
	getSalesTotals,
	getBookTotals,
} from "../utils/adminChartUtilities";
import {
	filterByTime,
	filterOutInactiveUsers,
	filterPreviousPeriodOrders,
} from "../utils/filterData";
import { trimUserData, combineUserOrders } from "../utils/transformData";
import SalesData from "./ChartComponents/SalesData";
import Totals from "./ChartComponents/Totals";

// export type MarginType = {
// 	top: number;
// 	right: number;
// 	bottom: number;
// 	left: number;
// };

// const margin: MarginType = { top: 20, right: 20, bottom: 50, left: 80 };
// const colorScale = d3.scaleOrdinal(d3.schemeSet3);

export default function AdminHome() {
	// const filter = [
	// 	{ name: "Authors" },
	// 	{ name: "Categories" },
	// 	{ name: "Users" },
	// ];
	// const [filterChart, setChartFilter] = useState(filter[0].name);
	// const [focusedUser, setFocusedUser] = useState("");
	// const [timeFilter, setTimeFilter] = useState("max");
	// const [hasData, setHasData] = useState(0);
	// const [selectOptions, setSelectOptions] = useState([]);
	// const [additionalOptions, setAdditionalOptions] = useState("");
	// const [tooltip, setTooltip] = useState<TooltipStateType>({
	// 	visible: false,
	// 	content: null,
	// 	x: 0,
	// 	y: 0,
	// });
	// const [totalSales, setTotalSales] = useState<TotalSalesType>();
	// const [avgSale, setAvgSale] = useState<AverageSalesType>();
	// const [totalBooks, setTotalBooks] = useState<TotalBooksType>();
	// const [avgBookOrder, setAvgBookOrder] = useState<AverageBooksType>();
	const view = useSelector((state: RootState) => state.chartView.view);
	// const timeFilter = useSelector(
	// 	(state: RootState) => state.chartTimeFilter.timeFilter
	// );
	const dispatch = useDispatch();

	// const [filtered, setFiltered] = useState<ProcessedUserType[]>();

	// useEffect(() => {
	// const reformatedUserData = reformatUserData(users);
	// const filteredUsers = filterOutInactiveUsers(reformatedUserData);
	// const filteredUserchart = getFilteredData(timeFilter, filteredUsers);
	// const previousFiltered = previousPeriodOrders(filteredUsers, timeFilter);
	// const prevTotal = totalsReducer(previousFiltered);
	// const prevNumOrders = totalOrdersReducer(previousFiltered);
	// const prevTotalBooksOrdered = totalOrderedQuantityReducer(previousFiltered);
	// const total = totalsReducer(filteredUserchart);
	// const totalNumOrders = totalOrdersReducer(filteredUserchart);
	// const totalBooksOrdered = totalOrderedQuantityReducer(filteredUserchart);
	// setFiltered(filteredUserchart);
	// const reformatedUserData = trimUserData(users);
	// const filteredUsers = filterOutInactiveUsers(reformatedUserData);
	// const combinedUserOrders = combineUserOrders(filteredUsers);
	// const filteredUserchart = filterByTime(timeFilter, combinedUserOrders);
	// const previousFiltered = filterPreviousPeriodOrders(
	// 	combinedUserOrders,
	// 	timeFilter
	// );
	// const { totalSales, avgSales } = getSalesTotals(
	// 	previousFiltered,
	// 	filteredUserchart
	// );
	// const { totalBooks, avgBooks } = getBookTotals(
	// 	previousFiltered,
	// 	filteredUserchart
	// );
	// setTotalSales(totalSales);
	// setAvgSale(avgSales);
	// setTotalBooks(totalBooks);
	// setAvgBookOrder(avgBooks);
	// }, [timeFilter]);

	useEffect(() => {
		const onGlobalClick = () => {
			dispatch(setDataPoint(""));
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
						// placeHolder={filterChart}
						// filterChart={filter}
						// setChartFilter={setChartFilter}
						/>
						{/* {filterChart === "Users" && selectOptions.length && (
							<UsersChartReactSelect
								options={selectOptions}
								colorScale={colorScale}
								setFocusedUser={setFocusedUser}
								focusedUser={focusedUser}
							/>
						)} */}
						{/* {filterChart === "Categories" && selectOptions.length && (
							<>
								<CategoriesChartReactSelect
									options={selectOptions}
									colorScale={colorScale}
									setFocusedUser={setFocusedUser}
									focusedCategory={focusedUser}
								/> */}
						{/* <CategoriesChartReactSelect
									options={additionalOptions}
									colorScale={colorScale}
									setFocusedUser={setFocusedUser}
									focusedCategory={focusedUser}
								/> */}
						{/* </>
						)} */}
						{/* {filterChart === "Authors" && selectOptions.length && (
							<AuthorsChartReactSelect
								options={selectOptions}
								colorScale={colorScale}
								setFocusedUser={setFocusedUser}
								focusedAuthor={focusedUser}
							/>
						)} */}

						<ChartReactSelect
						// options={selectOptions}
						// colorScale={colorScale}
						// setFocusedUser={setFocusedUser}
						// focusedAuthor={focusedUser}
						/>
					</div>
					<div className="flex justify-start w-full mr-4 h-20 items-center lg:w-1/2 lg:justify-end xl:h-fit">
						<ChartTimePeriodButtons />
					</div>
				</div>{" "}
			</div>

			<div className="mr-4">
				<div className="flex flex-wrap lg:ml-20 xl:ml-18">
					<div className="w-full flex flex-wrap md:flex-nowrap gap-2 md:gap-4 box-border justify-between mt-4 mb-2">
						<Totals />
					</div>
				</div>
				{view === "Users" && (
					<AdminChart
						// margin={margin}
						// timeFilter={timeFilter}
						// tooltip={tooltip}
						// setTooltip={setTooltip}
						chartData={users}
						// colorScale={colorScale}
						// hasData={hasData}
						// setHasData={setHasData}
						// setSelectOptions={setSelectOptions}
						// focusedUser={focusedUser}
						width={0}
						height={0}
						// setTimeFilter={setTimeFilter}
						// selectOptions={selectOptions}
						// setFocusedUser={setFocusedUser}
						// doesToolTipOverflowWindow={doesToolTipOverflowWindow}
						// chartFilter={filterChart}
						// focusedCategory={focusedUser}
					/>
				)}
				{view === "Categories" && (
					<AdminChart
						chartData={categories_data}
						// chartFilter={filterChart}
						// margin={margin}
						// timeFilter={timeFilter}
						// tooltip={tooltip}
						// setTooltip={setTooltip}
						// colorScale={colorScale}
						// hasData={hasData}
						// setHasData={setHasData}
						// setSelectOptions={setSelectOptions}
						width={0}
						height={0}
						// setTimeFilter={setTimeFilter}
						// selectOptions={selectOptions}
						// doesToolTipOverflowWindow={doesToolTipOverflowWindow}
						// focusedCategory={focusedUser}
						// focusedUser={focusedUser}
						// setFocusedUser={setFocusedUser}
					/>
				)}
				{view === "Authors" && (
					<AdminChart
						chartData={authors_data}
						// chartFilter={filterChart}
						// margin={margin}
						// timeFilter={timeFilter}
						// tooltip={tooltip}
						// setTooltip={setTooltip}
						// colorScale={colorScale}
						// hasData={hasData}
						// setHasData={setHasData}
						// setSelectOptions={setSelectOptions}
						width={0}
						height={0}
						// setTimeFilter={setTimeFilter}
						// selectOptions={selectOptions}
						// doesToolTipOverflowWindow={doesToolTipOverflowWindow}
						// focusedCategory={focusedUser}
						// focusedUser={focusedUser}
						// setFocusedUser={setFocusedUser}
					/>
				)}
				{/* <AdminChart
					chartData={authors_data}
					// chartFilter={filterChart}
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
				/> */}
			</div>
		</React.Fragment>
	);
}
