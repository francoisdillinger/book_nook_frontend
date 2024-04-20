import React, { useState, useEffect } from "react";
import { TrimmedBookType } from "./AdminBooks";
import { book } from "../data/bookItem";
import alchemist from "../assets/alchemist.jpg";
import StaticStarRating from "./StaticStarRating";

export default function BookItem() {
	const [bookItem, setBookItem] = useState<null | TrimmedBookType>();
	const [bookRating, setBookRating] = useState<number>(0);

	useEffect(() => {
		const length = book.bookReviews ? book.bookReviews?.length : 1;
		const totalRating = book.bookReviews!.reduce(
			(accumulator, review) => accumulator + review.rating,
			0
		);
		setBookItem(book);
		setBookRating(parseFloat((totalRating / length).toFixed(1)));
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
					<div className="flex items-center">
						<h3 className="text-2xl text-gray-500">{bookRating}</h3>
						<span className="">
							<StaticStarRating
								rating={bookRating}
								width={7}
								height={7}
							/>
						</span>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
