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
import TotalsComponent from "../TotalsComponent";

export default function CategoriesAdminChart() {
	return <></>;
}
