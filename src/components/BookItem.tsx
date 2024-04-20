import React, { useState, useEffect } from "react";
import { TrimmedBookType } from "./AdminBooks";
import { book } from "../data/bookItem";
import alchemist from "../assets/alchemist.jpg";

export default function BookItem() {
	const [bookItem, setBookItem] = useState<null | TrimmedBookType>();

	useEffect(() => {
		setBookItem(book);
	}, [book]);
	// console.log(bookItem);
	return (
		<React.Fragment>
			<div className="w-10/12 m-auto">
				<div className="w-72">
					<img
						// className="w-44"
						src={alchemist}
						alt={`Image for ${bookItem?.bookTitle}`}
					/>
				</div>
			</div>
		</React.Fragment>
	);
}
