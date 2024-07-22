import { CombinedChartDataOrdersType } from "../components/ChartComponents/LineChart";

export const getFlattenedDates = (
	chartData: CombinedChartDataOrdersType[]
): string[] => {
	return chartData.flatMap((data: CombinedChartDataOrdersType) => {
		return data.orders.map((order) => order.orderDate);
	});
};

export const getFlattenedQuantities = (
	chartData: CombinedChartDataOrdersType[]
): number[] => {
	return chartData.flatMap((data: CombinedChartDataOrdersType) => {
		return data.orders.map((order) => order.quantity);
	});
};

export const getUniqueDatas = (dates: string[]): string[] => {
	return [...new Set(dates)];
};

export const getUniqueQuantities = (quantities: number[]): number[] => {
	return [...new Set(quantities)];
};
