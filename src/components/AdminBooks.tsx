import React, { useState, useEffect } from "react";
import { books, BooksType } from "../data/adminBooks";

type TrimmedBookType = {
	bookTitle: string;
	pageCount: number;
	publishDate: string;
	price: number;
	description: string;
	inventoryCount: number;
	isbn: string;
};

const trimOrders = (books: BooksType): TrimmedBookType[] => {
	return [...books.data.books];
};

export default function AdminBooks() {
	const [trimmedBooks, setTrimmedBooks] = useState<TrimmedBookType[] | null>();

	useEffect(() => {
		const reformatedBooks = trimOrders(books);
		setTrimmedBooks(reformatedBooks);
	}, [books]);

	console.log("Trimmed Books: ", trimmedBooks);
	return <>hi</>;
}
