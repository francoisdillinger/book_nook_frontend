import React, { useEffect, useState } from "react";
import ChartToolTip from "./ChartToolTip";
import { TooltipStateType } from "./ChartToolTip";
import ResponsiveSVGContainer from "./../ResponsiveSVGContainer";
import { MarginType } from "../AdminHome";
import { authors_data } from "../../data/authors_data";
import { AuthorsDataType } from "../../data/authors_data";
import { CategoriesDataType } from "../../data/categories_data";
import { usePagination } from "../../hooks/usePagination";
import SimpleSelect from "../SimpleSelect";
import LineChart, { CombinedChartDataOrdersType } from "./LineChart";
import BarChart from "./BarChat";
import PieChart from "./PieChart";
import {
	transformAuthorsToChartDataFormat,
	transformCategoriesToChartDataFormat,
} from "../../utils/transformData";
import { sortOrders } from "../../utils/sortingUtilities";

type AdminChartType = {
	// chartData: AuthorsDataType | CategoriesDataType;
	chartData: any;
	chartFilter: string;
	margin: MarginType;
	timeFilter: string;
	setTimeFilter: Function;
	width: number;
	height: number;
	tooltip: TooltipStateType;
	setTooltip: Function;
	colorScale: Function;
	hasData: number;
	setHasData: Function;
	selectOptions: any;
	setSelectOptions: Function;
	doesToolTipOverflowWindow: Function;
	focusedCategory: string;
	focusedUser: string;
	setFocusedUser: Function;
	// selectOptions: string;
};

// type CombinedOrdersType = {
// 	name: string;
// 	totalAmount: number;
// 	totalItems: number;
// 	orders: {
// 		uniqueId: string;
// 		bookTitle: string;
// 		orderId: string;
// 		userId: string;
// 		bookId: string;
// 		quantity: number;
// 		orderDate: string;
// 		orderAmount: number;
// 	}[];
// };

// const trimChartData = (authors: AuthorsDataType): TrimmedAuthorsDataType => {
// 	return {
// 		authors: authors.data.authors.map((author) => author),
// 	};
// };

export default function AdminChart({
	chartData,
	chartFilter,
	margin,
	timeFilter,
	// setTimeFilter,
	// width,
	// height,
	tooltip,
	setTooltip,
	colorScale,
	hasData,
	setHasData,
	setSelectOptions,
	selectOptions,
	setFocusedUser,
	doesToolTipOverflowWindow,
	focusedCategory,
	focusedUser,
}: AdminChartType) {
	const [orderedChartsData, setOrderedAuthorsData] =
		useState<CombinedChartDataOrdersType[]>();
	const [allDates, setAllDates] = useState<string[]>([]);
	const [allQuantities, setAllQuantinties] = useState<number[]>([]);
	const [sortOption, setSortOption] = useState<string>("Sort: A-Z");
	const options = [
		"Sort: A-Z",
		"Sort: Z-A",
		"Total Items: Ascending",
		"Total Items: Descending",
		"Total $ Amount: Ascending",
		"Total $ Amount: Descending",
	];
	const {
		setPaginateThisList,
		pageIndex,
		paginatedList,
		increasePageIndex,
		decreasePageIndex,
		totalPages,
	} = usePagination(orderedChartsData ? orderedChartsData : [], 10);

	useEffect(() => {
		console.log("ChartFilter: ", chartFilter);
		let data;
		if (chartFilter === "Authors") {
			data = transformAuthorsToChartDataFormat(chartData);
		} else if (chartFilter === "Categories") {
			data = transformCategoriesToChartDataFormat(chartData);
		}
		// const trimmedAuthors = trimAuthorsData(authors_data);
		// const combinedAuthorName = combineName(trimmedAuthors);
		// const transformedChartData =
		// 	transformAuthorsDataToChartData(combinedAuthorName);
		// const combinedOrders = combineOrders(transformedChartData);
		// // console.log(combinedOrders);
		// console.log("trans", transformedChartData);
		const sortedCombinedOrders = sortOrders(data!);
		console.log("Data: ", data);
		// const timeFilteredChartData = getTimeFilteredData(
		// 	timeFilter,
		// 	sortedCombinedOrders
		// );
		// const flattenedDates = timeFilteredChartData.flatMap(
		// 	(data: CombinedChartDataOrdersType) => {
		// 		return data.orders.map((order) => order.orderDate);
		// 	}
		// );
		// const flattenedQuanities = timeFilteredChartData.flatMap(
		// 	(data: CombinedChartDataOrdersType) => {
		// 		return data.orders.map((order) => order.quantity);
		// 	}
		// );
		// const uniqueDates = [...new Set(flattenedDates)];
		// const uniqueQuantities = [...new Set(flattenedQuanities)];
		// setAllDates(uniqueDates);
		// setAllQuantinties(uniqueQuantities);
		// setOrderedAuthorsData(timeFilteredChartData);
		// setPaginateThisList(
		// 	sortListBySelectOption(timeFilteredChartData, sortOption)
		// );
		// setHasData(
		// 	timeFilteredChartData.reduce(
		// 		(accumulator, item) => accumulator + item.orders.length,
		// 		0
		// 	)
		// );
	}, [authors_data, timeFilter, sortOption]);

	useEffect(() => {
		setSelectOptions(paginatedList);
	}, [paginatedList]);
	// console.log("AdminPaginatedList: ", paginatedList);

	return (
		<React.Fragment>
			<div className="bg-gray-100 lg:ml-20 xl:ml-18 rounded-t-lg mt-2 flex justify-between pt-4">
				<div className="ml-20">
					<SimpleSelect
						options={options}
						setSortOption={setSortOption}
					/>
				</div>
				<div className="w-44 flex justify-between mr-4 bg-white p-1 rounded-md">
					<button
						onClick={decreasePageIndex}
						className=" p-1 m-1 rounded-md text-sm font-medium bg-gray-100 enabled:active:scale-90 enabled:shadow-sm disabled:shadow-none enabled:text-logo disabled:text-gray-400  enabled:cursor-pointer diabled:cursor-default"
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
						className=" p-1 m-1 rounded-md text-sm font-medium bg-gray-100 enabled:active:scale-90 enabled:shadow-sm disabled:shadow-none enabled:text-logo disabled:text-gray-400  enabled:cursor-pointer diabled:cursor-default"
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
			</div>
			<div className="flex flex-wrap lg:ml-20 xl:ml-18">
				<div className="bg-gray-100 rounded-b-lg w-full">
					{/* Note to self: Yes, this component rerenders when tooltip appears and disappears */}
					<ChartToolTip tooltip={tooltip} />
					<div className=" flex justify-center mt-10 md:mt-0">
						<div className="w-full h-[450px]">
							<ResponsiveSVGContainer>
								<LineChart
									//height and width are provided by the <ResponsiveSVGContainer>
									paginatedList={paginatedList}
									allDates={allDates}
									allQuantities={allQuantities}
									// authors={chartData}
									margin={margin}
									timeFilter={timeFilter}
									tooltip={tooltip}
									setTooltip={setTooltip}
									colorScale={colorScale}
									hasData={hasData}
									setHasData={setHasData}
									setSelectOptions={setSelectOptions}
									doesToolTipOverflowWindow={doesToolTipOverflowWindow}
									focusedCategory={focusedCategory}
								/>
							</ResponsiveSVGContainer>
						</div>
					</div>
				</div>
			</div>
			<div className="border-box flex flex-wrap lg:flex-nowrap lg:ml-20 xl:ml-18 justify-between md:gap-4">
				<div className="bg-gray-100 rounded-lg my-2 pt-2 w-full lg:w-3/4 h-96">
					<ResponsiveSVGContainer>
						<BarChart
							//height and width are provided by the <ResponsiveSVGContainer>
							paginatedList={paginatedList}
							allQuantities={allQuantities}
							margin={margin}
							timeFilter={timeFilter}
							tooltip={tooltip}
							setTooltip={setTooltip}
							// authors={chartData}
							colorScale={colorScale}
							hasData={hasData}
							focusedCategory={focusedCategory}
							doesToolTipOverflowWindow={doesToolTipOverflowWindow}
						/>
					</ResponsiveSVGContainer>
				</div>
				<div className="bg-gray-100 rounded-lg my-2 pt-2 w-full  lg:w-1/4 h-96">
					<ResponsiveSVGContainer>
						<PieChart
							//height and width are provided by the <ResponsiveSVGContainer>
							paginatedList={paginatedList}
							pageIndex={pageIndex}
							timeFilter={timeFilter}
							tooltip={tooltip}
							setTooltip={setTooltip}
							// authors={chartData}
							colorScale={colorScale}
							hasData={hasData}
							focusedCategory={focusedCategory}
							doesToolTipOverflowWindow={doesToolTipOverflowWindow}
						/>
					</ResponsiveSVGContainer>
				</div>
			</div>
		</React.Fragment>
	);
}
