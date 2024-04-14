import React, { useState, useEffect } from "react";
import { books, BooksType } from "../data/adminBooks";
import {
	booksWithCategories,
	BookWithCategoriesType,
} from "../data/booksWithCategories";
import { TrimmedBookType } from "./AdminBooks";
import {
	GraphQL_Categories,
	graphql_categories,
} from "../data/graphql_categories";
import SearchBar from "./SearchBar";
import alchemist from "../assets/alchemist.jpg";
import { categories_data } from "../data/categories_data";
import { motion } from "framer-motion";
import StaticStarRating from "./StaticStarRating";

type FilterByCategoryType = {
	categoryName: string;
	filterByCategory: boolean;
};

type BooksSearchType = {
	option: "ISBN" | "Author" | "Title";
	value: string;
};

type BooksSortType = {
	sortOption:
		| "Sort a-z: Title"
		| "Sort z-a: Title"
		| "Sort a-z: Author"
		| "Sort z-a: Author"
		| "Price: Ascending"
		| "Price: Descending"
		| "Publish Date: Newest First"
		| "Publish Date: Oldest First";
};

const searchedBooks = (
	books: TrimmedBookType[],
	searchValues: BooksSearchType
) => {
	return books.filter((book) => {
		if (searchValues.option === "ISBN") {
			return book.isbn.includes(searchValues.value);
		} else if (searchValues.option === "Author") {
			const name =
				book.author.authorFirstName + " " + book.author.authorLastName;
			return name.includes(searchValues.value);
		} else if (searchValues.option === "Title") {
			return book.bookTitle.includes(searchValues.value);
		}
	});
};

const sortOrders = (orders: TrimmedBookType[], sortOption: BooksSortType) => {
	switch (sortOption.sortOption) {
		case "Sort a-z: Title":
			return [...orders].sort((a, b) => a.bookTitle.localeCompare(b.bookTitle));
		case "Sort z-a: Title":
			return [...orders].sort((a, b) => b.bookTitle.localeCompare(a.bookTitle));
		case "Sort a-z: Author":
			return [...orders].sort((a, b) => {
				const firstAuthor =
					a.author.authorFirstName + " " + a.author.authorLastName;
				const secondAuthor =
					b.author.authorFirstName + " " + b.author.authorLastName;
				return firstAuthor.localeCompare(secondAuthor);
			});
		case "Sort z-a: Author":
			return [...orders].sort((a, b) => {
				const firstAuthor =
					a.author.authorFirstName + " " + a.author.authorLastName;
				const secondAuthor =
					b.author.authorFirstName + " " + b.author.authorLastName;
				return secondAuthor.localeCompare(firstAuthor);
			});
		case "Price: Ascending":
			return [...orders].sort((a, b) => a.price - b.price);
		case "Price: Descending":
			return [...orders].sort((a, b) => b.price - a.price);

		case "Publish Date: Newest First":
			return [...orders].sort(
				(a, b) =>
					new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
			);
		case "Publish Date: Oldest First":
			return [...orders].sort(
				(a, b) =>
					new Date(a.publishDate).getTime() - new Date(b.publishDate).getTime()
			);
		default:
			return [...orders]; // Return unsorted if no match (or handle as needed)
	}
};

const trimBooks = (books: BookWithCategoriesType): TrimmedBookType[] => {
	return [...books.data.books];
};

const trimGQLCategories = (books: GraphQL_Categories): string[] => {
	return [...books.data.categories.map((category) => category.categoryName)];
};

const addFilterByBoolean = (categories: string[]): FilterByCategoryType[] => {
	return categories.map((category) => {
		return { categoryName: category, filterByCategory: false };
	});
};

const calculateHeight = (numOfItems: number): string => {
	const itemHeight = 2;
	return numOfItems * itemHeight + "em";
};

export default function BookSearch() {
	const numOfResults = 10;
	const [paginationIndex, setPaginationIndex] = useState(1);
	const [buttonIncreaseDisabled, setIncreaseButtonDiabled] = useState(false);
	const [buttonDecreaseDisabled, setDecreaseButtonDisabled] = useState(true);
	const [expandCategories, setExpandCategories] = useState<boolean>(false);
	const [expandRatings, setExpandRatings] = useState<boolean>(false);
	const [rating, setRating] = useState<number>(1);
	const [trimmedBooks, setTrimmedBooks] = useState<TrimmedBookType[] | null>();
	const [filteringCategories, setFilteringCategories] = useState<
		[] | FilterByCategoryType[]
	>([]);
	const [filterBy, setFilterBy] = useState<[] | string[]>([]);
	const options = [
		"Sort a-z: Title",
		"Sort z-a: Title",
		"Sort a-z: Author",
		"Sort z-a: Author",
		"Price: Ascending",
		"Price: Descending",
		"Publish Date: Newest First",
		"Publish Date: Oldest First",
	];
	const [displayedBooks, setDisplayedBooks] = useState<
		TrimmedBookType[] | null
	>();
	const [searchValues, setSearchValues] = useState<BooksSearchType>({
		option: "ISBN",
		value: "",
	});
	const [sortOption, setSortOption] = useState<BooksSortType>({
		sortOption: "Sort a-z: Title",
	});

	useEffect(() => {
		const reformatedBooks = trimBooks(booksWithCategories);
		setTrimmedBooks(reformatedBooks);
	}, [books]);

	useEffect(() => {
		const trimmedCategories = trimGQLCategories(graphql_categories);
		const categoriesWithBoolean = addFilterByBoolean(trimmedCategories);
		setFilteringCategories(categoriesWithBoolean);
	}, [graphql_categories]);

	useEffect(() => {
		// Step 1: Apply Search
		const searchedResults = searchedBooks(trimmedBooks || [], searchValues);

		// Step 2: Apply Sort
		const sortedResults = sortOrders(searchedResults, sortOption);

		// Step 3: Apply Ratings Filter

		const ratingsFilteredResults = sortedResults.filter((book) => {
			let ratings = 0;
			book.bookReviews?.map((review) => (ratings += review.rating));
			// The 'or 1' is so books with no ratings are still returned if book has no ratings when rating === 1
			const totalRating = Math.floor((ratings / book.bookReviews!.length) | 1);
			return totalRating >= rating;
			// console.log("Total Rating: ", totalRating);
		});

		// Step 4: Apply Categories Filter
		const activeFilters = filteringCategories
			.filter((category) => category.filterByCategory)
			.map((filter) => filter.categoryName);

		const finalDisplayedBooks =
			activeFilters.length > 0
				? ratingsFilteredResults.filter((book) =>
						book.bookCategories?.some((category) =>
							activeFilters.includes(category.category.categoryName)
						)
				  )
				: ratingsFilteredResults; // If no filters are selected, show all sorted (and searched) books

		// Step 4: Update displayed books
		setDisplayedBooks(finalDisplayedBooks);
		console.log("Displayed Books: ", finalDisplayedBooks);
	}, [searchValues, trimmedBooks, sortOption, filteringCategories, rating]);

	useEffect(() => {
		// We need to reset paginationIndex since filtering may return less/no results.
		// We may be on a page index that appears to show no results when there are some
		// at an earlier page index.
		// Only needed for the following as they filter, sorting doesn't alter
		// the number of results we have, just reorders them.
		setPaginationIndex(1);
	}, [filteringCategories, rating]);

	// useEffect(() => {
	// 	setDisplayedBooks(
	// 		sortOrders(displayedBooks ? displayedBooks : [], sortOption)
	// 	);
	// }, [sortOption]);

	// const optionsHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
	// 	setSearchValues({
	// 		option: event.target.value as "ISBN" | "Author" | "Title",
	// 		value: "",
	// 	});
	// };

	// const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
	// 	setSearchValues({ ...searchValues, value: event.target.value });
	// };

	// const clickHandler = () => {
	// 	setSearchValues({ ...searchValues, value: "" });
	// };

	const selectOptionsHandler = (
		event: React.ChangeEvent<HTMLSelectElement>
	) => {
		setSortOption({
			sortOption: event.target.value as BooksSortType["sortOption"],
		});
	};

	const handleExpandCategories = () => {
		setExpandCategories((prevState) => !prevState);
	};

	const handleExpandRatings = () => {
		setExpandRatings((prevState) => !prevState);
	};

	const handleCategoriesChange = (categoryObject: FilterByCategoryType) => {
		setFilteringCategories(
			filteringCategories.map((category) =>
				category.categoryName === categoryObject.categoryName
					? {
							...category,
							filterByCategory: !category.filterByCategory,
					  }
					: category
			)
		);
	};

	const handleRatingsClick = (rating: number) => {
		// console.log("Clicked Rating: ", rating);
		setRating(rating);
	};

	const handlePaginationDecrease = () => {
		console.log("Decrease");
		const hasResults = (paginationIndex - 1) * numOfResults > 0;
		// const hasResults = paginationIndex * numOfResults > 0;
		setDecreaseButtonDisabled(!hasResults);
		setIncreaseButtonDiabled(false);
		setPaginationIndex(hasResults ? paginationIndex - 1 : paginationIndex);
	};

	const handlePaginationIncrease = () => {
		console.log("Increase");
		const inRange =
			(paginationIndex + 1) * numOfResults < (displayedBooks?.length ?? 0);
		const hasResults =
			paginationIndex * numOfResults < (displayedBooks?.length ?? 0);
		// console.log("In Range: ", inRange);
		setDecreaseButtonDisabled(false);
		setIncreaseButtonDiabled(!inRange);
		setPaginationIndex(hasResults ? paginationIndex + 1 : paginationIndex);
	};
	// console.log("Categories: ", graphql_categories);
	// console.log("Expand Cats: ", expandCategories);
	return (
		<React.Fragment>
			<div className="flex min-h-screen">
				<aside className="bg-gray-100 px-2 w-2/12">
					<h1 className="pt-6 font-semibold text-xl text-gray-400 pl-5 pb-4">
						Filters
					</h1>
					<div className="bg-white mb-2">
						<div
							className="w-full flex items-center justify-between rounded-md py-2.5 px-3 border-bottom border-gray-300 bg-white text-gray-400  shadow-sm sm:text-sm hover:cursor-pointer"
							onClick={handleExpandRatings}
						>
							<span className="mx-2">Ratings</span>
							<motion.svg
								xmlns="http://www.w3.org/2000/motion."
								viewBox="0 0 24 24"
								className="w-4 h-4 fill-none stroke-2 stroke-current mx-2"
								animate={{ rotate: expandRatings ? 180 : 0 }}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="m19.5 8.25-7.5 7.5-7.5-7.5"
								/>
							</motion.svg>
						</div>
						<motion.div
							className="pl-5 text-sm text-gray-400 relative overflow-hidden"
							initial={{ height: 0 }}
							animate={{
								height: expandRatings ? calculateHeight(6) : "0em",
							}}
							transition={{
								duration: 0.3, // Adjust duration for ease effect
								ease: "easeInOut", // Use an ease-in-out curve for closing
							}}
						>
							{[...Array(4)].map((_, index) => {
								const actualIndex = index + 1;
								const key = "Star-Rating-" + actualIndex;
								// console.log(key);
								return (
									<div
										key={key}
										className="py-2 flex items-center justify-between cursor-pointer hover:scale-105"
										onClick={() => handleRatingsClick(actualIndex)}
									>
										{/* <input
											className="border-gray-50 rounded accent-logo cursor-pointer"
											type="checkbox"
											id={"rating-" + actualIndex}
											name="rating"
											value={"rating-" + actualIndex}
											aria-labelledby={"label-rating-" + actualIndex}
											// disabled
										/> */}
										<label
											// htmlFor={"rating" + actualIndex}
											id={"label-rating-" + actualIndex}
											// className="text-gray-300"
											className="cursor-pointer flex"
										>
											<StaticStarRating
												rating={actualIndex}
												width={5}
												height={5}
											/>
											<span className="font-semibold">& Up</span>
										</label>
										<br></br>
									</div>
								);
							})}
						</motion.div>
					</div>
					<div className="bg-white mb-2">
						<div
							className="w-full flex items-center justify-between rounded-md py-2.5 px-3 border-bottom border-gray-300 bg-white text-gray-400  shadow-sm sm:text-sm hover:cursor-pointer"
							onClick={handleExpandCategories}
						>
							<span className="mx-2">Categories</span>
							<motion.svg
								xmlns="http://www.w3.org/2000/motion."
								viewBox="0 0 24 24"
								className="w-4 h-4 fill-none stroke-2 stroke-current mx-2"
								animate={{ rotate: expandCategories ? 180 : 0 }}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="m19.5 8.25-7.5 7.5-7.5-7.5"
								/>
							</motion.svg>
						</div>
						<motion.div
							className="pl-5 text-sm text-gray-400 relative overflow-hidden"
							initial={{ height: 0 }}
							animate={{
								height: expandCategories
									? calculateHeight(filteringCategories.length)
									: "0em",
							}}
							transition={{
								duration: 0.5, // Adjust duration for ease effect
								ease: "easeInOut", // Use an ease-in-out curve for closing
							}}
						>
							{filteringCategories.map((category) => (
								<div
									key={category.categoryName}
									className="py-1 flex items-center justify-between"
								>
									<input
										className="border-gray-50 rounded accent-logo cursor-pointer"
										type="checkbox"
										id={category.categoryName}
										name={category.categoryName}
										value={category.categoryName}
										checked={category.filterByCategory}
										onChange={() => handleCategoriesChange(category)}
										// disabled
									/>
									<label
										htmlFor={category.categoryName}
										// className="text-gray-300"
									>
										{" "}
										{category.categoryName}
									</label>
									<br></br>
								</div>
							))}
						</motion.div>
					</div>
				</aside>
				<div className="pt-6 pb-12 w-10/12">
					<div className="w-full px-4 pb-2 md:w-11/12 m-auto md:p-0 md:py-4 flex-wrap md:flex md:justify-end">
						<div className="">
							<select
								id="book-selector"
								className="w-full md:w-fitfont-semibold form-select block py-2.5 px-3 border border-gray-300 bg-white text-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-blue-300 focus:border-blue-300 sm:text-sm hover:cursor-pointer"
								onChange={(event) => selectOptionsHandler(event)}
							>
								{options.map((option) => (
									<option key={option}>{option}</option>
								))}
							</select>
						</div>
					</div>
					<ul className=" pt-8 flex flex-wrap gap-3 justify-center">
						{displayedBooks?.map((book) => (
							<li className="w-56 cursor-pointer bg-gray-100 pt-3 pb-1 rounded-lg">
								<div className="">
									<img
										className="w-4/5 m-auto"
										src={alchemist}
										alt={`Image for ${book.bookTitle}`}
									/>
								</div>
								<div className="text-center font-semibold text-sm text-gray-500">
									{book.bookTitle}
								</div>
							</li>
						))}
					</ul>
					<div className="w-3/4 m-auto flex justify-end mt-8 mb-8">
						<div className="bg-gray-100 p-1 rounded-xl shadow-sm">
							<button
								onClick={handlePaginationDecrease}
								className="border-solid border p-1 m-1 rounded-md text-sm font-medium bg-white enabled:active:scale-90 enabled:shadow-sm disabled:shadow-none enabled:text-logo disabled:text-gray-400  enabled:cursor-pointer diabled:cursor-default"
								// disabled={buttonDecreaseDisabled}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									className="w-6 h-6 stroke-2 stroke-current"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M15.75 19.5 8.25 12l7.5-7.5"
									/>
								</svg>
							</button>
							<button
								// onClick={handlePaginationIncrease}
								className="border-solid border p-1 m-1 rounded-md text-sm font-medium bg-white enabled:active:scale-90 enabled:shadow-sm disabled:shadow-none enabled:text-logo disabled:text-gray-400  enabled:cursor-pointer diabled:cursor-default"
								// disabled={buttonIncreaseDisabled}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									className="w-6 h-6 stroke-2 stroke-current"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="m8.25 4.5 7.5 7.5-7.5 7.5"
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
