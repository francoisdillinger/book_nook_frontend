import React, { useState, useEffect } from "react";
import { TrimmedBookType } from "./AdminBooks";
import { book } from "../data/bookItem";
import alchemist from "../assets/alchemist.jpg";
import StaticStarRating from "./StaticStarRating";

export default function BookItem() {
	const [bookItem, setBookItem] = useState<null | TrimmedBookType>();

	useEffect(() => {
		setBookItem(book);
	}, [book]);
	// console.log(bookItem);
	return (
		<React.Fragment>
			<div className="w-10/12 m-auto flex">
				<div className="w-72">
					<img
						className=""
						src={alchemist}
						alt={`Image for ${bookItem?.bookTitle}`}
					/>
				</div>
				<div>
					<h1 className="text-5xl text-gray-500">{bookItem?.bookTitle}</h1>
					<h2 className="text-2xl text-gray-400 pb-2">
						{book.author.authorFirstName + " " + book.author.authorLastName}
					</h2>
					<span>
						{" "}
						<StaticStarRating
							rating={Math.floor(
								book.bookReviews!.reduce(
									(accumulator, review) => accumulator + review.rating,
									0
								)
							)}
							width={7}
							height={7}
						/>
					</span>
				</div>
			</div>
		</React.Fragment>
	);
}
