import React, { useState, useEffect } from "react";
import { books, BooksType } from "../data/books";

export type BookType = {
	bookTitle: string;
	pageCount: number;
	publishDate: string;
	price: number;
	description: string;
	inventoryCount: number;
	isbn: string;
};

export default function BookSearch() {
	const [books, setBooks] = useState<BookType[] | null>();

	return <React.Fragment>hi</React.Fragment>;
}
