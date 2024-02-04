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

type ReformattedCategoriesBooks = {
	categories: {
		categoryName: string;
		orders: {
			bookTitle: string;
			orderId: string;
			quantity: number;
			orderDate: string;
			orderAmount: number;
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

const reformatCategoriesBooks = (
	categories: TrimmedCategoriesDataType
): ReformattedCategoriesBooks => {
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

export default function CategoriesAdminChart() {
	console.log(categories_data);
	console.log(trimCategoriesData(categories_data));
	console.log(reformatCategoriesBooks(trimCategoriesData(categories_data)));
	return <>hi</>;
}
