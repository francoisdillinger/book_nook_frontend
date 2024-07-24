import React, { useEffect, useState } from "react";
import ChartToolTip from "./ChartToolTip";
import ResponsiveSVGContainer from "./../ResponsiveSVGContainer";
import { usePagination } from "../../hooks/usePagination";
import LineChart, { CombinedChartDataOrdersType } from "./LineChart";
import BarChart from "./BarChat";
import PieChart from "./PieChart";
import { sortListBySelectOption, sortOrders } from "../../utils/sortData";
import { filterByTime } from "../../utils/filterData";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import { setOptions } from "../../features/chart/chartHighlightDataSlice";
import ChartHeader from "./ChartHeader";
import {
	transformAuthorsToChartDataFormat,
	transformCategoriesToChartDataFormat,
	transformUsersToChartDataFormat,
} from "../../utils/transformData";

type AdminChartType = {
	chartData: any;
	width: number;
	height: number;
};

export default function AdminChart({ chartData }: AdminChartType) {
	const tooltip = useSelector((state: RootState) => state.ChartToolTip);
	const view = useSelector((state: RootState) => state.chartView.view);
	const [hasData, setHasData] = useState(0);
	const dispatch = useDispatch();
	const [orderedChartsData, setOrderedData] =
		useState<CombinedChartDataOrdersType[]>();
	const { sortOption } = useSelector(
		(state: RootState) => state.chartSortOptions
	);
	const timeFilter = useSelector(
		(state: RootState) => state.chartTimeFilter.timeFilter
	);
	const {
		setPaginateThisList,
		pageIndex,
		paginatedList,
		increasePageIndex,
		decreasePageIndex,
		totalPages,
	} = usePagination(orderedChartsData ? orderedChartsData : [], 10);

	useEffect(() => {
		let data;
		if (view === "Authors") {
			console.log("View: ", view);
			data = transformAuthorsToChartDataFormat(chartData);
		} else if (view === "Categories") {
			console.log("View: ", view);
			data = transformCategoriesToChartDataFormat(chartData);
		} else if (view === "Users") {
			console.log("View: ", view);
			data = transformUsersToChartDataFormat(chartData);
		}

		const sortedCombinedOrders = sortOrders(data!);
		const timeFilteredChartData = filterByTime(
			timeFilter,
			sortedCombinedOrders
		);
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
									hasData={hasData}
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
							hasData={hasData}
						/>
					</ResponsiveSVGContainer>
				</div>
				<div className="bg-gray-100 rounded-lg my-2 pt-2 w-full  lg:w-1/4 h-96">
					<ResponsiveSVGContainer>
						<PieChart
							//height and width are provided by the <ResponsiveSVGContainer>
							paginatedList={paginatedList}
							hasData={hasData}
						/>
					</ResponsiveSVGContainer>
				</div>
			</div>
		</React.Fragment>
	);
}
