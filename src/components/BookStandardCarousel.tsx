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

const trimBooks = (books: BookWithCategoriesType): TrimmedBookType[] => {
	return [...books.data.books];
};

export default function BookStandardCarousel() {
	const [carouselIndex, setCarouselIndex] = useState<number>(0);
	const [carouselBooks, setCarouselBooks] = useState<
		TrimmedBookType[] | null
	>();

	useEffect(() => {
		const trimmedBooks = trimBooks(booksWithCategories);
		setCarouselBooks(trimmedBooks.slice(0, 9));
	}, [booksWithCategories]);

	const increaseIndexHandler = () => {
		// Come back and set this to be dynamic depending on window size
		if (carouselIndex < 8) {
			setCarouselIndex(carouselIndex + 1);
		}
	};

	const decreaseIndexHandler = () => {
		// Come back and set this to be dynamic depending on window size
		if (carouselIndex > 0) {
			setCarouselIndex(carouselIndex - 1);
		}
	};
	return <React.Fragment></React.Fragment>;
}
