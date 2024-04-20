import React, { useState, useEffect } from "react";
import { TrimmedBookType } from "./AdminBooks";
import { book } from "../data/bookItem";

export default function BookItem() {
	const [bookItem, setBookItem] = useState<null | TrimmedBookType>();

	useEffect(() => {
		setBookItem(book);
	}, [book]);
	// console.log(bookItem);
	return (
		<React.Fragment>
			<div></div>
		</React.Fragment>
	);
}
