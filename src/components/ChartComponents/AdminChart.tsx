import React, { useEffect, useState } from "react";
import ChartToolTip from "./ChartToolTip";
import ResponsiveSVGContainer from "./../ResponsiveSVGContainer";
// import { MarginType } from "../AdminHome";
import { usePagination } from "../../hooks/usePagination";
import LineChart, { CombinedChartDataOrdersType } from "./LineChart";
import BarChart from "./BarChat";
import PieChart from "./PieChart";
import {
	transformAuthorsToChartDataFormat,
	transformCategoriesToChartDataFormat,
	transformUsersToChartDataFormat,
} from "../../utils/transformData";
import { sortListBySelectOption, sortOrders } from "../../utils/sortData";
import { filterByTime } from "../../utils/filterData";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import { setOptions } from "../../features/chart/chartHighlightDataSlice";
import ChartHeader from "./ChartHeader";

type AdminChartType = {
	chartData: any;
	// chartFilter: string;
	// margin: MarginType;
	// timeFilter: string;
	// setTimeFilter: Function;
	width: number;
	height: number;
	// tooltip: TooltipStateType;
	// setTooltip: Function;
	// colorScale: Function;
	// hasData: number;
	// setHasData: Function;
	// selectOptions: any;
	// setSelectOptions: Function;
	// doesToolTipOverflowWindow: Function;
	// focusedCategory: string;
	// focusedUser: string;
	// setFocusedUser: Function;
};

export default function AdminChart({
	chartData,
}: // chartFilter,
// margin,
// timeFilter,
// tooltip,
// setTooltip,
// colorScale,
// hasData,
// setHasData,
// setSelectOptions,
// doesToolTipOverflowWindow,
// focusedCategory,
AdminChartType) {
	const [orderedChartsData, setOrderedData] =
		useState<CombinedChartDataOrdersType[]>();
	// const [allDates, setAllDates] = useState<string[]>([]);
	// const [allQuantities, setAllQuantinties] = useState<number[]>([]);
	const tooltip = useSelector((state: RootState) => state.ChartToolTip);
	// const [sortOption, setSortOption] = useState<string>("Sort: A-Z");
	// const options = [
	// 	"Sort: A-Z",
	// 	"Sort: Z-A",
	// 	"Total Items: Ascending",
	// 	"Total Items: Descending",
	// 	"Total $ Amount: Ascending",
	// 	"Total $ Amount: Descending",
	// ];
	const {
		setPaginateThisList,
		pageIndex,
		paginatedList,
		increasePageIndex,
		decreasePageIndex,
		totalPages,
	} = usePagination(orderedChartsData ? orderedChartsData : [], 10);
	const view = useSelector((state: RootState) => state.chartView.view);
	const { sortOption } = useSelector(
		(state: RootState) => state.chartSortOptions
	);
	const timeFilter = useSelector(
		(state: RootState) => state.chartTimeFilter.timeFilter
	);
	const dispatch = useDispatch();
	const [hasData, setHasData] = useState(0);

	useEffect(() => {
		let data;
		if (view === "Authors") {
			console.log("View: ", view);
			data = transformAuthorsToChartDataFormat(chartData);
		} else if (view === "Categories") {
			console.log("View: ", view);
			data = transformCategoriesToChartDataFormat(chartData);
			// console.log("Data: ", data);
		} else if (view === "Users") {
			console.log("View: ", view);
			data = transformUsersToChartDataFormat(chartData);
			// console.log("Users: ", chartData);
			// console.log("Data: ", data);
		}

		const sortedCombinedOrders = sortOrders(data!);
		const timeFilteredChartData = filterByTime(
			timeFilter,
			sortedCombinedOrders
		);
		// const flattenedDates = getFlattenedDates(timeFilteredChartData);
		// const flattenedQuanities = getFlattenedQuantities(timeFilteredChartData);
		// const uniqueDates = getUniqueDatas(flattenedDates);
		// const uniqueQuantities = getUniqueQuantities(flattenedQuanities);
		// setAllDates(uniqueDates);
		// setAllQuantinties(uniqueQuantities);
		setOrderedData(timeFilteredChartData);
		setPaginateThisList(
			sortListBySelectOption(timeFilteredChartData, sortOption)
		);
		setHasData(
			timeFilteredChartData.reduce(
				(accumulator, item) => accumulator + item.orders.length,
				0
			)
		);
	}, [timeFilter, sortOption, view]);

	useEffect(() => {
		dispatch(setOptions(paginatedList));
	}, [paginatedList]);

	// const handleSortChange = (selectedOption: ChartSortType) => {
	// 	dispatch(setSortOption(selectedOption));
	// };

	return (
		<React.Fragment>
			<div className="bg-gray-100 lg:ml-20 xl:ml-18 rounded-t-lg mt-2 flex justify-between pt-4">
				<ChartHeader
					pageIndex={pageIndex}
					totalPages={totalPages}
					decreasePageIndex={decreasePageIndex}
					increasePageIndex={increasePageIndex}
				/>
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
									orderedChartsData={orderedChartsData}
									paginatedList={paginatedList}
									// allDates={allDates}
									// allQuantities={allQuantities}
									// margin={margin}
									// timeFilter={timeFilter}
									// tooltip={tooltip}
									// setTooltip={setTooltip}
									// colorScale={colorScale}
									hasData={hasData}
									// setHasData={setHasData}
									// setSelectOptions={setSelectOptions}
									// doesToolTipOverflowWindow={doesToolTipOverflowWindow}
									// focusedCategory={focusedCategory}
								/>
							</ResponsiveSVGContainer>
						</div>
					</div>
				</div>
			</div>
			<div className="border-box flex flex-wrap lg:flex-nowrap lg:ml-20 xl:ml-18 justify-between md:gap-4 mb-12">
				<div className="bg-gray-100 rounded-lg my-2 pt-2 w-full lg:w-3/4 h-96">
					<ResponsiveSVGContainer>
						<BarChart
							//height and width are provided by the <ResponsiveSVGContainer>
							paginatedList={paginatedList}
							// allQuantities={allQuantities}
							// margin={margin}
							// timeFilter={timeFilter}
							// tooltip={tooltip}
							// setTooltip={setTooltip}
							// colorScale={colorScale}
							hasData={hasData}
							// focusedCategory={focusedCategory}
							// doesToolTipOverflowWindow={doesToolTipOverflowWindow}
						/>
					</ResponsiveSVGContainer>
				</div>
				<div className="bg-gray-100 rounded-lg my-2 pt-2 w-full  lg:w-1/4 h-96">
					<ResponsiveSVGContainer>
						<PieChart
							//height and width are provided by the <ResponsiveSVGContainer>
							paginatedList={paginatedList}
							// timeFilter={timeFilter}
							// tooltip={tooltip}
							// setTooltip={setTooltip}
							// colorScale={colorScale}
							hasData={hasData}
							// focusedCategory={focusedCategory}
							// doesToolTipOverflowWindow={doesToolTipOverflowWindow}
						/>
					</ResponsiveSVGContainer>
				</div>
			</div>
		</React.Fragment>
	);
}
