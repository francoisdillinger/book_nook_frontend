import React, { useEffect, useState } from "react";
import ChartToolTip from "../ChartToolTip";
import { TooltipStateType } from "../ChartToolTip";
import ResponsiveSVGContainer from "../../ResponsiveSVGContainer";
import { MarginType } from "../AdminChart";
import AuthorsAdminLineChart, {
	CombinedAuthorsOrdersType,
	combineName,
	combineOrders,
	sortOrders,
	trimAuthorsData,
} from "./AuthorsAdminLineChart";
import { authors_data } from "../../../data/authors_data";
import { AuthorsDataType } from "../../../data/authors_data";
import AuthorsAdminBarChart from "./AuthorsAdminBarChart";
import AuthorsAdminPieChart from "./AuthorsAdminPieChart";
import { usePagination } from "../../../hooks/usePagination";
import { getFilteredAuthorsData } from "../../../utils/authorsAdminChartUtilities";
// import {
// 	AverageBooksType,
// 	AverageSalesType,
// 	TotalBooksType,
// 	TotalSalesType,
// 	calculatePercentageChange,
// 	getFilteredData,
// 	previousPeriodOrders,
// 	previousTime,
// 	reformatUserData,
// 	totalOrderedQuantityReducer,
// 	totalOrdersReducer,
// 	totalsReducer,
// } from "../../../utils/usersAdminChartUtilities";
// import {
// 	categories_data,
// 	CategoriesDataType,
// } from "../../../data/categories_data";
// import TotalsComponent from "../TotalsComponent";
// import CategoriesAdminLineChart from "./CategoriesAdminLineChart";
// import CategoriesAdminBarChart from "./CategoriesAdminBarChart";
// import CategoriesAdminPieChart from "./CategoriesAdminPieChart";
// import CategoriesChartReactSelect from "./CategoriesChartReactSelect";
// import { filterOutInactiveUsers } from "../UserChart/UsersAdminLineChart";
// import { users } from "../../../data/users";

// export type TrimmedCategoriesDataType = {
// 	categories: {
// 		categoryName: string;
// 		books: {
// 			bookTitle: string;
// 			bookOrders: {
// 				orderId: string;
// 				quantity: number;
// 				orderDate: string;
// 				orderAmount: number;
// 			}[];
// 		}[];
// 	}[];
// };

// export type ReformattedBookType = {
// 	categoryName: string;
// 	orders: {
// 		bookTitle: string;
// 		orderId: string;
// 		quantity: number;
// 		orderDate: string;
// 		orderAmount: number;
// 	}[];
// };
// export type ReformattedCategoriesBooksType = {
// 	categories: ReformattedBookType[];
// };

// export const trimCategoriesData = (
// 	categories: CategoriesDataType
// ): TrimmedCategoriesDataType => {
// 	return {
// 		categories: categories.data.categories.map((category) => category),
// 	};
// };

// export const reformatCategoriesBooks = (
// 	categories: TrimmedCategoriesDataType
// ): ReformattedCategoriesBooksType => {
// 	return {
// 		categories: categories.categories.map((category) => ({
// 			categoryName: category.categoryName,
// 			orders: category.books.flatMap((book) =>
// 				book.bookOrders.map((order) => ({
// 					bookTitle: book.bookTitle,
// 					orderId: order.orderId,
// 					quantity: order.quantity,
// 					orderDate: order.orderDate,
// 					orderAmount: order.orderAmount,
// 				}))
// 			),
// 		})),
// 	};
// };

type AuthorsAdminChartType = {
	chartData: AuthorsDataType;
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

export default function AuthorsAdminChart({
	chartData,
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
}: AuthorsAdminChartType) {
	const [orderedAuthorsData, setOrderedAuthorsData] =
		useState<CombinedAuthorsOrdersType[]>();
	const [allDates, setAllDates] = useState<string[]>([]);
	const [allQuantities, setAllQuantinties] = useState<number[]>([]);
	const {
		setPaginateThisList,
		pageIndex,
		paginatedList,
		increasePageIndex,
		decreasePageIndex,
		totalPages,
	} = usePagination(orderedAuthorsData ? orderedAuthorsData : [], 10);

	useEffect(() => {
		const trimmedAuthors = trimAuthorsData(authors_data);
		const combinedAuthorName = combineName(trimmedAuthors);
		const combinedOrders = combineOrders(combinedAuthorName);
		const sortedCombinedOrders = sortOrders(combinedOrders);

		// .authorName: category.authorName,
		// 	orders: category.orders.sort(
		// 		(a, b) =>
		// 			new Date(a.orderDate).getTime() - new Date(b.orderDate).getTime()
		// 	),
		// }));
		const filteredAuthorsChart = getFilteredAuthorsData(
			timeFilter,
			sortedCombinedOrders
		);
		console.log("FIlteredChart: ", filteredAuthorsChart);
		const flattenedDates = filteredAuthorsChart.flatMap(
			(author: CombinedAuthorsOrdersType) => {
				return author.orders.map((order) => order.orderDate);
			}
		);
		const flattenedQuanities = filteredAuthorsChart.flatMap(
			(author: CombinedAuthorsOrdersType) => {
				return author.orders.map((order) => order.quantity);
			}
		);
		const uniqueDates = [...new Set(flattenedDates)];
		const uniqueQuantities = [...new Set(flattenedQuanities)];
		setAllDates(uniqueDates);
		setAllQuantinties(uniqueQuantities);
		setOrderedAuthorsData(filteredAuthorsChart);
		setPaginateThisList(filteredAuthorsChart);
		// setSelectOptions(paginatedList);
		setHasData(
			filteredAuthorsChart.reduce(
				(accumulator, author) => accumulator + author.orders.length,
				0
			)
		);
	}, [authors_data, timeFilter]);

	useEffect(() => {
		setSelectOptions(paginatedList);
	}, [paginatedList]);
	// console.log("AdminPaginatedList: ", paginatedList);

	return (
		<React.Fragment>
			<div className=" bg-gray-100 lg:ml-20 xl:ml-18 rounded-t-lg pt-3 mt-2">
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
			</div>
			<div className="flex flex-wrap lg:ml-20 xl:ml-18">
				<div className="bg-gray-100 rounded-b-lg pt-2 w-full">
					{/* Note to self: Yes, this component rerenders when tooltip appears and disappears */}
					<ChartToolTip tooltip={tooltip} />
					<div className=" flex justify-center mt-10 md:mt-0">
						<div className="w-full h-[450px]">
							<ResponsiveSVGContainer>
								<AuthorsAdminLineChart
									//height and width are provided by the <ResponsiveSVGContainer>
									paginatedList={paginatedList}
									allDates={allDates}
									allQuantities={allQuantities}
									authors={chartData}
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
						<AuthorsAdminBarChart
							//height and width are provided by the <ResponsiveSVGContainer>
							paginatedList={paginatedList}
							allQuantities={allQuantities}
							margin={margin}
							timeFilter={timeFilter}
							tooltip={tooltip}
							setTooltip={setTooltip}
							authors={chartData}
							colorScale={colorScale}
							hasData={hasData}
							focusedCategory={focusedCategory}
							doesToolTipOverflowWindow={doesToolTipOverflowWindow}
						/>
					</ResponsiveSVGContainer>
				</div>
				<div className="bg-gray-100 rounded-lg my-2 pt-2 w-full  lg:w-1/4 h-96">
					<ResponsiveSVGContainer>
						<AuthorsAdminPieChart
							//height and width are provided by the <ResponsiveSVGContainer>
							paginatedList={paginatedList}
							pageIndex={pageIndex}
							timeFilter={timeFilter}
							tooltip={tooltip}
							setTooltip={setTooltip}
							authors={chartData}
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
