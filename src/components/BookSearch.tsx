import React, { useState, useEffect } from "react";
import { books, BooksType } from "../data/adminBooks";
import { TrimmedBookType } from "./AdminBooks";

const trimOrders = (books: BooksType): TrimmedBookType[] => {
	return [...books.data.books];
};

export default function BookSearch() {
	const [trimmedBooks, setBooks] = useState<TrimmedBookType[] | null>();

	useEffect(() => {
		const reformatedBooks = trimOrders(books);
		setBooks(reformatedBooks);
	}, [books]);
	return (
		<React.Fragment>
			{" "}
			<div>
				{trimmedBooks?.map((book) => (
					<div>{book.bookTitle}</div>
				))}
			</div>
		</React.Fragment>
	);
}
