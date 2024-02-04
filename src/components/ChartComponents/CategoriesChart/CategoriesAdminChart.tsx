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

type TrimmedCategoriesDataType = {
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

const trimCategoriesData = (
	categories: CategoriesDataType
): TrimmedCategoriesDataType => {
	return {
		categories: categories.data.categories.map((category) => category),
	};
};

export default function CategoriesAdminChart() {
	console.log(categories_data);
	console.log(trimCategoriesData(categories_data));
	return <>hi</>;
}
