import React, { useState, useEffect } from "react";
import { TrimmedBookType } from "./AdminBooks";
import { book } from "../data/bookItem";
import alchemist from "../assets/alchemist.jpg";
import StaticStarRating from "./StaticStarRating";
import BookItemBadges from "./BookItemBadges";
import { motion } from "framer-motion";
import {
	booksWithCategories,
	BookWithCategoriesType,
} from "../data/booksWithCategories";

export const totalRating = (book: TrimmedBookType): number => {
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

	return (
		<React.Fragment>
			<div className="w-10/12 m-auto flex flex-col md:flex-row pt-12 pb-8">
				<div className="w-1/2 md:w-1/4 m-auto">
					<img
						className=""
						src={alchemist}
						alt={`Image for ${bookItem?.bookTitle}`}
					/>
				</div>
				<div className="w-full md:w-1/2 flex flex-col justify-between px-8">
					<div className="text-center md:text-left">
						<h1 className="text-4xl text-gray-500">{bookItem?.bookTitle}</h1>
						<h2 className="text-xl text-gray-400 pb-2">
							{book.author.authorFirstName + " " + book.author.authorLastName}
						</h2>
						<div className="flex items-center justify-center md:justify-start">
							<p className="text-xl text-gray-500">{bookRating}</p>
							<span className="pl-2">
								<StaticStarRating
									rating={bookRating}
									width={7}
									height={7}
								/>
							</span>
							<p className="text-md text-gray-400 font-medium pl-6">
								{bookItem?.bookReviews?.length} ratings
							</p>
						</div>
					</div>
					<div className="pb-6">
						<p className="text-lg text-gray-500 pb-8 xl:pb-24">
							{bookItem?.shortDescription}
						</p>
						<div className="flex flex-wrap">
							{bookItem?.bookCategories?.map((category) => (
								<div className="p-2 bg-logo opacity-90 m-1 rounded-lg text-gray-50 text-sm">
									{category.category.categoryName}
								</div>
							))}
						</div>
					</div>
				</div>
				<div className="w-full md:w-1/4 ">
					<div className="py-4 md:py-0 bg-gray-100 rounded-t-lg w-full flex flex-col items-center h-1/2">
						<h3 className="text-logo text-3xl pt-8 pb-12">
							${book.price.toFixed(2)}
						</h3>
						<div className="text-gray-600 bg-yellow-400 p-2 rounded-lg hover:bg-yellow-300 w-28 text-center cursor-pointer">
							Add To Cart
						</div>
					</div>
					<div className="h-1/2 py-4 md:py-0 bg-logoLight rounded-b-lg flex flex-col items-center justify-center">
						<h3 className="text-xl font-medium text-gray-500 mb-6">
							Add to Wishlist
						</h3>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							className={`w-12 h-12 fill-gray-100 stroke stroke-gray-500`}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
							/>
						</svg>
					</div>
				</div>
			</div>
			<BookItemBadges bookItem={bookItem} />
			<div className="p-8">
				<h2 className="text-4xl text-gray-500 font-medium text-center pb-8">
					Synopsis
				</h2>
				<p className="text-lg text-gray-500">
					{book.longDescription
						? book.longDescription.split("\n").map((line) => (
								<span className="pl-8">
									{line}
									<br />
									{/* <br /> */}
								</span>
						  ))
						: " "}
				</p>
			</div>
			<div className="overflow-hidden relative">
				<button
					onClick={decreaseIndexHandler}
					className="absolute z-10 left-2 md:left-4 lg:left-2 xl:left-6 bg-white shadow-md p-2 rounded m-2 top-1/2 transform -translate-y-1/2 hover:scale-110 active:scale-95 duration-300"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						className="w-6 h-6 text-amber-600 hover:text-amber-800 duration-200"
					>
						<path
							fillRule="evenodd"
							d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z"
							clipRule="evenodd"
						/>
					</svg>
				</button>
				<div className="flex">
					{carouselBooks?.map((book) => (
						<motion.div
							key={book.id}
							className="h-64 min-w-1/2 lg:min-w-1/3 bg-logoLight inline-block"
							animate={{ translateX: -100 * carouselIndex + "%" }}
						>
							<div className="h-full flex justify-center items-center">
								<div className="cursor-pointer">
									<img
										className="h-52"
										src={alchemist}
										alt={`Image for ${book.bookTitle}`}
									/>
								</div>
								<div className="w-1/2 font-semibold text-sm pl-4 flex flex-col justify-between">
									<div>
										<h1 className="text-2xl text-gray-500">{book.bookTitle}</h1>
										<h2 className="text-gray-400 pb-2">
											{book.author.authorFirstName +
												" " +
												book.author.authorLastName}
										</h2>
										<span>
											{" "}
											<StaticStarRating
												rating={totalRating(book)}
												width={7}
												height={7}
											/>
										</span>
										<h3 className="text-logo text-2xl pb-2">
											${book.price.toFixed(2)}
										</h3>
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>
				<button
					onClick={increaseIndexHandler}
					className="absolute z-10 right-2 md:right-4 lg:right-2 xl:right-6 bg-white shadow-md p-2 rounded m-2 top-1/2 transform -translate-y-1/2 hover:scale-110 active:scale-95 duration-300"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						className="w-6 h-6 text-amber-600 hover:text-amber-800 duration-200"
					>
						<path
							fillRule="evenodd"
							d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
							clipRule="evenodd"
						/>
					</svg>
				</button>
			</div>
		</React.Fragment>
	);
}
