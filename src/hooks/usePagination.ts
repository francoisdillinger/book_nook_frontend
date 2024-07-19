import { useState, useEffect } from "react";

const getRange = (paginationIndex: number, itemsPerPage: number) => {
	const start = (paginationIndex - 1) * itemsPerPage;
	const end = paginationIndex * itemsPerPage;
	return [start, end];
};

const filterByRange = <T>(items: T[], range: number[]): T[] => {
	return items.slice(range[0], range[1]);
};

// Currenting being used in the following components:
// <AuthorsAdminChart/>
export const usePagination = <T>(listToPaginate: T[], itemsPerPage: number) => {
	const [paginateThisList, setPaginateThisList] = useState<T[]>(listToPaginate);
	const [pageIndex, setPageIndex] = useState(1);
	const [paginatedList, setPaginatedList] = useState<T[]>([]);
	const totalPages = Math.ceil(listToPaginate.length / itemsPerPage);

	useEffect(() => {
		const range = getRange(pageIndex, itemsPerPage);
		const filteredList = filterByRange(paginateThisList, range);
		setPaginatedList(filteredList);
	}, [paginateThisList, pageIndex, itemsPerPage]);

	const increasePageIndex = () => {
		setPageIndex((prevIndex) => Math.min(prevIndex + 1, totalPages));
	};

	const decreasePageIndex = () => {
		setPageIndex((prevIndex) => Math.max(prevIndex - 1, 1));
	};

	return {
		setPaginateThisList,
		pageIndex,
		paginatedList,
		increasePageIndex,
		decreasePageIndex,
		totalPages,
	};
};
