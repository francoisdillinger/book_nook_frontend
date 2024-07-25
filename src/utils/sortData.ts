// const options = [
//     "Sort: A-Z",
//     "Sort: Z-A",
//     "Total Items: Ascending",
//     "Total Items: Descending",
//     "Total $ Amount: Ascending",
//     "Total $ Amount: Descending",
// ];

import { CombinedChartDataOrdersType } from "../components/ChartComponents/LineChart";

// export const sortListBySelectOption = (
// 	list: CombinedAuthorsOrdersType[],
// 	sortOption: string
// ): CombinedAuthorsOrdersType[] => {
// 	switch (sortOption) {
// 		case "Sort: A-Z":
// 			return list.sort((a, b) => a.authorName.localeCompare(b.authorName));

// 		case "Sort: Z-A":
// 			return list.sort((a, b) => b.authorName.localeCompare(a.authorName));

// 		case "Total Items: Ascending":
// 			return list.sort((a, b) => a.totalItems - b.totalItems);

// 		case "Total Items: Descending":
// 			return list.sort((a, b) => b.totalItems - a.totalItems);

// 		case "Total $ Amount: Ascending":
// 			return list.sort((a, b) => a.totalAmount - b.totalAmount);

// 		case "Total $ Amount: Descending":
// 			return list.sort((a, b) => b.totalAmount - a.totalAmount);

// 		default:
// 			return list;
// 	}
// };

export const sortListBySelectOption = (
	list: CombinedChartDataOrdersType[],
	sortOption: string
): CombinedChartDataOrdersType[] => {
	switch (sortOption) {
		case "Sort: A-Z":
			return list.sort((a, b) => a.name.localeCompare(b.name));

		case "Sort: Z-A":
			return list.sort((a, b) => b.name.localeCompare(a.name));

		case "Total Items: Ascending":
			return list.sort((a, b) => a.totalItems - b.totalItems);

		case "Total Items: Descending":
			return list.sort((a, b) => b.totalItems - a.totalItems);

		case "Total $ Amount: Ascending":
			return list.sort((a, b) => a.totalAmount - b.totalAmount);

		case "Total $ Amount: Descending":
			return list.sort((a, b) => b.totalAmount - a.totalAmount);

		default:
			return list;
	}
};

export const sortOrders = (
	data: CombinedChartDataOrdersType[]
): CombinedChartDataOrdersType[] => {
	return data.map((item) => {
		return {
			...item,
			orders: item.orders.sort((a, b) => {
				return (
					new Date(a.orderDate).getTime() - new Date(b.orderDate).getTime()
				);
			}),
		};
	});
};
