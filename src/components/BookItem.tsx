import React, { useState, useEffect } from "react";
import { TrimmedBookType } from "./AdminBooks";
import { book } from "../data/bookItem";
import alchemist from "../assets/alchemist.jpg";
import StaticStarRating from "./StaticStarRating";

const totalRating = (book: TrimmedBookType): number => {
	const length = book.bookReviews ? book.bookReviews?.length : 1;
	const totalRating = book.bookReviews
		? book.bookReviews.reduce(
				(accumulator, review) => accumulator + review.rating,
				0
		  )
		: 1;

	return parseFloat((totalRating / length).toFixed(1));
};

export default function BookItem() {
	const [bookItem, setBookItem] = useState<null | TrimmedBookType>();
	const [bookRating, setBookRating] = useState<number>(0);

	useEffect(() => {
		setBookItem(book);
		setBookRating(totalRating(book));
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
				<div className="w-1/2 flex flex-col justify-between">
					<div>
						<h1 className="text-5xl text-gray-500">{bookItem?.bookTitle}</h1>
						<h2 className="text-2xl text-gray-400 pb-2">
							{book.author.authorFirstName + " " + book.author.authorLastName}
						</h2>
						<div className="flex items-center">
							<p className="text-2xl text-gray-500">{bookRating}</p>
							<span className="pl-2">
								<StaticStarRating
									rating={bookRating}
									width={7}
									height={7}
								/>
							</span>
							<p className="text-lg text-gray-400 font-medium pl-6">
								{bookItem?.bookReviews?.length} ratings
							</p>
						</div>
					</div>
					<div>
						<p className="text-lg text-gray-500">{bookItem?.description}</p>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
