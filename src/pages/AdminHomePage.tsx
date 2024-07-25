import React, { useEffect } from "react";
import { users } from "../data/users";
import ChartTimePeriodButtons from "../components/ChartTimePeriodButtons";
import AdminChartReactSelect from "../components/ChartComponents/AdminChartReactSelect";
import AdminChart from "../components/ChartComponents/AdminChart";
import { authors_data } from "../data/authors_data";
import { categories_data } from "../data/categories_data";
import ChartReactSelect from "../components/ChartComponents/ChartReactSelect";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";
import { setDataPoint } from "../features/chart/chartHighlightDataSlice";
import Totals from "../components/ChartComponents/Totals";

export default function AdminHomePage() {
	const view = useSelector((state: RootState) => state.chartView.view);
	const dispatch = useDispatch();

	useEffect(() => {
		const onGlobalClick = () => {
			dispatch(setDataPoint(""));
		};
		window.addEventListener("click", onGlobalClick);

		return () => {
			window.removeEventListener("click", onGlobalClick);
		};
	}, []);

	return (
		<React.Fragment>
			<div className="flex flex-wrap lg:ml-20 xl:ml-18">
				<div className=" rounded-lg w-full flex flex-wrap md:justify-between lg:flex-nowrap xl:h-20 xl:items-center">
					<div className="flex w-full justify-start h-20 items-center gap-4 lg:w-1/2 xl:h-fit">
						<AdminChartReactSelect />
						<ChartReactSelect />
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
						chartData={users}
						width={0}
						height={0}
					/>
				)}
				{view === "Categories" && (
					<AdminChart
						chartData={categories_data}
						width={0}
						height={0}
					/>
				)}
				{view === "Authors" && (
					<AdminChart
						chartData={authors_data}
						width={0}
						height={0}
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
