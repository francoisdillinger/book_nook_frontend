import React, { useState, useEffect } from "react";
import { TrimmedBookType } from "./AdminBooks";
import alchemist from "../assets/alchemist.jpg";
import StaticStarRating from "./StaticStarRating";
import { motion } from "framer-motion";
import {
	booksWithCategories,
	BookWithCategoriesType,
} from "../data/booksWithCategories";
import { totalRating } from "./BookItem";
import useGetWindowSize from "../hooks/useGetWindowSize";

const trimBooks = (books: BookWithCategoriesType): TrimmedBookType[] => {
	return [...books.data.books];
};

export default function BookStandardCarousel() {
	const windowSize = useGetWindowSize();
	const minIndex = 0;
	const [maxIndex, setMaxIndex] = useState<number>(0);
	const [carouselIndex, setCarouselIndex] = useState<number>(0);
	const [carouselBooks, setCarouselBooks] = useState<
		TrimmedBookType[] | null
	>();

	useEffect(() => {
		const trimmedBooks = trimBooks(booksWithCategories);
		setCarouselBooks(trimmedBooks.slice(0, 9));
	}, [booksWithCategories]);

	useEffect(() => {
		switch (windowSize) {
			case "small":
			case "medium":
				setMaxIndex(7);
				setCarouselIndex(Math.min(carouselIndex, 7));
				break;
			case "large":
			case "xLarge":
				setMaxIndex(6);
				setCarouselIndex(Math.min(carouselIndex, 6));
				break;
			default:
				break;
		}
	}, [windowSize]);

	console.log("Index: ", maxIndex);

	const increaseIndexHandler = () => {
		// Come back and set this to be dynamic depending on window size

		if (carouselIndex < maxIndex) {
			setCarouselIndex(carouselIndex + 1);
		}
	};

	const decreaseIndexHandler = () => {
		// Come back and set this to be dynamic depending on window size

		if (carouselIndex > minIndex) {
			setCarouselIndex(carouselIndex - 1);
		}
	};
	return (
		<React.Fragment>
			<div className="overflow-hidden relative">
				<button
					onClick={decreaseIndexHandler}
					className="absolute z-10 left-2 md:left-4 lg:left-2 xl:left-6 bg-logoLight shadow-md p-2 rounded m-2 top-1/2 transform -translate-y-1/2 hover:scale-110 active:scale-95 duration-300"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						className="w-6 h-6 text-gray-400 hover:text-gray-600 duration-200"
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
							className="h-64 min-w-1/2 lg:min-w-1/3 bg-logoLight inline-block p-4"
							animate={{ translateX: -100 * carouselIndex + "%" }}
						>
							<div className="h-full flex justify-center items-center bg-white rounded-lg shadow">
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
					className="absolute z-10 right-2 md:right-4 lg:right-2 xl:right-6 bg-logoLight shadow-md p-2 rounded m-2 top-1/2 transform -translate-y-1/2 hover:scale-110 active:scale-95 duration-300"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						className="w-6 h-6 text-gray-400 hover:text-gray-600 duration-200"
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
