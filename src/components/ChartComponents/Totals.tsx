import React, { useEffect, useState } from "react";
import SalesData from "./SalesData";
import { useSelector } from "react-redux";
import { users } from "../../data/users";
import {
	filterByTime,
	filterOutInactiveUsers,
	filterPreviousPeriodOrders,
} from "../../utils/filterData";
import { trimUserData, combineUserOrders } from "../../utils/transformData";
import {
	TotalSalesType,
	AverageSalesType,
	TotalBooksType,
	AverageBooksType,
	previousTime,
} from "../../utils/usersAdminChartUtilities";
import { getBookTotals, getSalesTotals } from "../../utils/adminChartUtilities";
import { RootState } from "../../app/store";

export default function Totals() {
	const [totalSales, setTotalSales] = useState<TotalSalesType>();
	const [avgSale, setAvgSale] = useState<AverageSalesType>();
	const [totalBooks, setTotalBooks] = useState<TotalBooksType>();
	const [avgBookOrder, setAvgBookOrder] = useState<AverageBooksType>();
	const timeFilter = useSelector(
		(state: RootState) => state.chartTimeFilter.timeFilter
	);

	useEffect(() => {
		const reformatedUserData = trimUserData(users);
		const filteredUsers = filterOutInactiveUsers(reformatedUserData);
		const combinedUserOrders = combineUserOrders(filteredUsers);
		const filteredUserchart = filterByTime(timeFilter, combinedUserOrders);
		const previousFiltered = filterPreviousPeriodOrders(
			combinedUserOrders,
			timeFilter
		);
		const { totalSales, avgSales } = getSalesTotals(
			previousFiltered,
			filteredUserchart
		);
		const { totalBooks, avgBooks } = getBookTotals(
			previousFiltered,
			filteredUserchart
		);
		setTotalSales(totalSales);
		setAvgSale(avgSales);
		setTotalBooks(totalBooks);
		setAvgBookOrder(avgBooks);
	}, [timeFilter]);

	return (
		<React.Fragment>
			<SalesData
				title="Total Sales"
				isDollarAmount={true}
				current={(totalSales ? totalSales.currentTotal : 0).toFixed(2)}
				change={totalSales ? totalSales.totalChange : 0}
				previousPeriod={previousTime(timeFilter)}
			/>
			<SalesData
				title="Avg Sales"
				isDollarAmount={true}
				current={(avgSale ? avgSale.currentAverage : 0).toFixed(2)}
				change={avgSale ? avgSale.totalAverage : 0}
				previousPeriod={previousTime(timeFilter)}
			/>
			<SalesData
				title="Total Books"
				isDollarAmount={false}
				current={(totalBooks ? totalBooks.currentTotal : 0).toString()}
				change={totalBooks ? totalBooks.totalChange : 0}
				previousPeriod={previousTime(timeFilter)}
			/>
			<SalesData
				title="Avg Books"
				isDollarAmount={false}
				current={Math.round(
					avgBookOrder ? avgBookOrder.currentAverage : 0
				).toString()}
				change={avgBookOrder ? avgBookOrder.totalAverage : 0}
				previousPeriod={previousTime(timeFilter)}
			/>
		</React.Fragment>
	);
}
