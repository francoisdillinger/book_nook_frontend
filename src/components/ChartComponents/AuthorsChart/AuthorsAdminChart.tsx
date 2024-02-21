import React, { useEffect, useState } from "react";
import ChartToolTip from "../ChartToolTip";
import { TooltipStateType } from "../ChartToolTip";
import ResponsiveSVGContainer from "../../ResponsiveSVGContainer";
import { MarginType } from "../AdminChart";
import AuthorsAdminLineChart from "./AuthorsAdminLineChart";
import { authors_data } from "../../../data/authors_data";
import AuthorsAdminBarChart from "./AuthorsAdminBarChart";
import AuthorsAdminPieChart from "./AuthorsAdminPieChart";
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
	return (
		<React.Fragment>
			<div className="flex flex-wrap lg:ml-20 xl:ml-28">
				<div className="bg-white rounded-lg my-2 pt-2 w-full">
					{/* Note to self: Yes, this component rerenders when tooltip appears and disappears */}
					<ChartToolTip tooltip={tooltip} />
					<div className=" flex justify-center mt-10 md:mt-0">
						<div className="w-full h-[450px]">
							<ResponsiveSVGContainer>
								<AuthorsAdminLineChart
									//height and width are provided by the <ResponsiveSVGContainer>
									authors={authors_data}
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
			<div className="border-box flex flex-wrap lg:flex-nowrap lg:ml-20 xl:ml-28 justify-between md:gap-4">
				<div className="bg-white rounded-lg my-2 pt-2 w-full lg:w-3/4 h-96">
					<ResponsiveSVGContainer>
						<AuthorsAdminBarChart
							//height and width are provided by the <ResponsiveSVGContainer>
							margin={margin}
							timeFilter={timeFilter}
							tooltip={tooltip}
							setTooltip={setTooltip}
							authors={authors_data}
							colorScale={colorScale}
							hasData={hasData}
							focusedCategory={focusedCategory}
							doesToolTipOverflowWindow={doesToolTipOverflowWindow}
						/>
					</ResponsiveSVGContainer>
				</div>
				<div className="bg-white rounded-lg my-2 pt-2 w-full  lg:w-1/4 h-96">
					<ResponsiveSVGContainer>
						<AuthorsAdminPieChart
							//height and width are provided by the <ResponsiveSVGContainer>
							timeFilter={timeFilter}
							tooltip={tooltip}
							setTooltip={setTooltip}
							authors={authors_data}
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
