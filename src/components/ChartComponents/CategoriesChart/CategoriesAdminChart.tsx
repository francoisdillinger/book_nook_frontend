import React, { useEffect, useState } from "react";
import ChartToolTip from "../ChartToolTip";
import { TooltipStateType } from "../ChartToolTip";
import ResponsiveSVGContainer from "../../ResponsiveSVGContainer";
import { MarginType } from "../AdminChart";
import {
	AverageBooksType,
	AverageSalesType,
	TotalBooksType,
	TotalSalesType,
	calculatePercentageChange,
	getFilteredData,
	previousPeriodOrders,
	previousTime,
	reformatUserData,
	totalOrderedQuantityReducer,
	totalOrdersReducer,
	totalsReducer,
} from "../../../utils/usersAdminChartUtilities";
import {
	categories_data,
	CategoriesDataType,
} from "../../../data/categories_data";
import TotalsComponent from "../TotalsComponent";
import CategoriesAdminLineChart from "./CategoriesAdminLineChart";
import CategoriesAdminBarChart from "./CategoriesAdminBarChart";
import CategoriesAdminPieChart from "./CategoriesAdminPieChart";
import CategoriesChartReactSelect from "./CategoriesChartReactSelect";
import { filterOutInactiveUsers } from "../UserChart/UsersAdminLineChart";
import { users } from "../../../data/users";

export type TrimmedCategoriesDataType = {
	categories: {
		categoryName: string;
		books: {
			bookTitle: string;
			bookOrders: {
				orderId: string;
				quantity: number;
				orderDate: string;
				orderAmount: number;
			}[];
		}[];
	}[];
};

export type ReformattedBookType = {
	categoryName: string;
	orders: {
		bookTitle: string;
		orderId: string;
		quantity: number;
		orderDate: string;
		orderAmount: number;
	}[];
};
export type ReformattedCategoriesBooksType = {
	categories: ReformattedBookType[];
};

export const trimCategoriesData = (
	categories: CategoriesDataType
): TrimmedCategoriesDataType => {
	return {
		categories: categories.data.categories.map((category) => category),
	};
};

export const reformatCategoriesBooks = (
	categories: TrimmedCategoriesDataType
): ReformattedCategoriesBooksType => {
	return {
		categories: categories.categories.map((category) => ({
			categoryName: category.categoryName,
			orders: category.books.flatMap((book) =>
				book.bookOrders.map((order) => ({
					bookTitle: book.bookTitle,
					orderId: order.orderId,
					quantity: order.quantity,
					orderDate: order.orderDate,
					orderAmount: order.orderAmount,
				}))
			),
		})),
	};
};

type CategoriesAdminChartType = {
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

export default function CategoriesAdminChart({
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
}: CategoriesAdminChartType) {
	// const [totalSales, setTotalSales] = useState<TotalSalesType>();
	// const [avgSale, setAvgSale] = useState<AverageSalesType>();
	// const [totalBooks, setTotalBooks] = useState<TotalBooksType>();
	// const [avgBookOrder, setAvgBookOrder] = useState<AverageBooksType>();
	// // const [filtered, setFiltered] = useState<ProcessedUserType[]>();

	// useEffect(() => {
	// 	const reformatedUserData = reformatUserData(users);
	// 	const filteredUsers = filterOutInactiveUsers(reformatedUserData);
	// 	const filteredUserchart = getFilteredData(timeFilter, filteredUsers);
	// 	const previousFiltered = previousPeriodOrders(filteredUsers, timeFilter);
	// 	const prevTotal = totalsReducer(previousFiltered);
	// 	const prevNumOrders = totalOrdersReducer(previousFiltered);
	// 	const prevTotalBooksOrdered = totalOrderedQuantityReducer(previousFiltered);
	// 	const total = totalsReducer(filteredUserchart);
	// 	const totalNumOrders = totalOrdersReducer(filteredUserchart);
	// 	const totalBooksOrdered = totalOrderedQuantityReducer(filteredUserchart);

	// 	// setFiltered(filteredUserchart);
	// 	setTotalSales({
	// 		currentTotal: total / 100,
	// 		previousTotal: prevTotal / 100,
	// 		totalChange: calculatePercentageChange(total, prevTotal),
	// 	});
	// 	setAvgSale({
	// 		currentAverage: total / totalNumOrders / 100 || 0,
	// 		previousAverage: prevTotal / prevNumOrders / 100 || 0,
	// 		totalAverage:
	// 			calculatePercentageChange(
	// 				total / totalNumOrders,
	// 				prevTotal / prevNumOrders
	// 			) || 0,
	// 	});

	// 	setTotalBooks({
	// 		currentTotal: totalBooksOrdered,
	// 		previousTotal: prevTotalBooksOrdered,
	// 		totalChange: calculatePercentageChange(
	// 			totalBooksOrdered,
	// 			prevTotalBooksOrdered
	// 		),
	// 	});

	// 	setAvgBookOrder({
	// 		currentAverage: totalBooksOrdered / totalNumOrders || 0,
	// 		previousAverage: prevTotalBooksOrdered / prevNumOrders || 0,
	// 		totalAverage:
	// 			calculatePercentageChange(
	// 				totalBooksOrdered / totalNumOrders,
	// 				prevTotalBooksOrdered / prevNumOrders
	// 			) || 0,
	// 	});
	// }, [timeFilter]);
	// console.log(categories_data);
	// console.log(trimCategoriesData(categories_data));
	// console.log(reformatCategoriesBooks(trimCategoriesData(categories_data)));
	return (
		<React.Fragment>
			<div className="flex flex-wrap lg:ml-20 xl:ml-18">
				{/* <div className="w-full flex flex-wrap md:flex-nowrap gap-2 md:gap-4 box-border justify-between mt-4 mb-2">
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
				</div> */}
				{/* <div className="w-full flex justify-end pt-4 pb-4">
					<CategoriesChartReactSelect
						options={[]}
						colorScale={colorScale}
						setFocusedUser={() => {}}
						focusedCategory={""}
					/>
				</div> */}
				<div className="bg-gray-100 rounded-lg my-2 pt-2 w-full">
					{/* Note to self: Yes, this component rerenders when tooltip appears and disappears */}
					<ChartToolTip tooltip={tooltip} />
					<div className=" flex justify-center mt-10 md:mt-0">
						<div className="w-full h-[450px]">
							<ResponsiveSVGContainer>
								<CategoriesAdminLineChart
									//height and width are provided by the <ResponsiveSVGContainer>
									categories={categories_data}
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
						<CategoriesAdminBarChart
							//height and width are provided by the <ResponsiveSVGContainer>
							margin={margin}
							timeFilter={timeFilter}
							tooltip={tooltip}
							setTooltip={setTooltip}
							categories={categories_data}
							colorScale={colorScale}
							hasData={hasData}
							focusedCategory={focusedCategory}
							doesToolTipOverflowWindow={doesToolTipOverflowWindow}
						/>
					</ResponsiveSVGContainer>
				</div>
				<div className="bg-gray-100 rounded-lg my-2 pt-2 w-full  lg:w-1/4 h-96">
					<ResponsiveSVGContainer>
						<CategoriesAdminPieChart
							//height and width are provided by the <ResponsiveSVGContainer>
							timeFilter={timeFilter}
							tooltip={tooltip}
							setTooltip={setTooltip}
							categories={categories_data}
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
