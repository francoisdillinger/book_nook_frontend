import React, { useState, useEffect } from "react";
import {
	booksWithCategories,
	BookWithCategoriesType,
} from "../data/booksWithCategories";
import { TrimmedBookType } from "./AdminBooks";

export default function BookItem() {
	const [bookItem, setBookItem] = useState<null | TrimmedBookType>();

	useEffect(() => {
		const book = booksWithCategories.data.books[0];
		setBookItem(book);
	}, []);
	console.log(bookItem?.description);
	return <React.Fragment></React.Fragment>;
}
