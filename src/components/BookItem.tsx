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
			<div className="">
				<div>
					<img
						src={alchemist}
						alt={`Image for ${bookItem?.bookTitle}`}
					/>
				</div>
			</div>
		</React.Fragment>
	);
}
