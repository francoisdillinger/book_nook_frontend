import { useState, useEffect } from "react";

const getRange = (paginationIndex: number, numOfItems: number) => {
	const start = (paginationIndex - 1) * numOfItems;
	const end = paginationIndex * numOfItems - 1;
	return [start, end];
};

const filterByRange = <T>(orders: T[], range: number[]): T[] => {
	return orders.filter((_, index) => {
		return index >= range[0] && index <= range[1];
	});
};

export const usePagination = <T>(listToPaginate: T[], itemsPerPage: number) => {
	// The following line of code it for future changes where the user might be given
	// the ability to dynamically choose how many items to view per page.
	// const [numOfItems, setNumOfItems] = useState<number>(itemsPerPage);
	const [paginateThisList, setPaginateThisList] = useState<T[]>(listToPaginate);
	const [pageIndex, setPageIndex] = useState(1);
	const [paginatedList, setPaginatedList] = useState<T[]>([]);
	const [increaseDisabled, setIncreaseDisabled] = useState(false);
	const [decreaseDisabled, setDecreaseDisabled] = useState(true);
	const totalPages = listToPaginate.length / itemsPerPage;

	const increasePageIndex = () => {
		if (pageIndex === 10) {
			setIncreaseDisabled(true);
		} else {
			setPageIndex(pageIndex + 1);
			setIncreaseDisabled(false);
			setDecreaseDisabled(false);
		}
	};

	const decreasePageIndex = () => {
		if (pageIndex === 1) {
			setDecreaseDisabled(true);
		} else {
			setPageIndex(pageIndex - 1);
			setDecreaseDisabled(false);
			setIncreaseDisabled(false);
		}
	};

	useEffect(() => {
		const range = getRange(pageIndex, itemsPerPage);
		const filteredList = filterByRange(paginateThisList, range);
		setPaginatedList(filteredList);
	}, [paginateThisList, pageIndex]);

	return {
		setPaginateThisList,
		pageIndex,
		paginatedList,
		increaseDisabled,
		decreaseDisabled,
		increasePageIndex,
		decreasePageIndex,
		totalPages,
	};
};
