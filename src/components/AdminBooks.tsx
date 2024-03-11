import React from "react";
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
	console.log(trimOrders(books));
	return <>hi</>;
}
