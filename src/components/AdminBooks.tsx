import React, { useState, useEffect } from "react";
import { books, BooksType } from "../data/adminBooks";
import SearchBar from "./SearchBar";
import alchemist from "../assets/alchemist.jpg";
// import { OrdersSortType } from "../utils/adminOrdersUtilities";

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

export type TrimmedBookType = {
	bookTitle: string;
	pageCount: number;
	publishDate: string;
	price: number;
	description: string;
	inventoryCount: number;
	isbn: string;
	author: {
		authorFirstName: string;
		authorLastName: string;
	};
};

const trimOrders = (books: BooksType): TrimmedBookType[] => {
	return [...books.data.books];
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

export default function AdminBooks() {
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
	const [trimmedBooks, setTrimmedBooks] = useState<TrimmedBookType[] | null>();
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
		const reformatedBooks = trimOrders(books);
		setTrimmedBooks(reformatedBooks);
	}, [books]);

	useEffect(() => {
		const results = searchedBooks(
			trimmedBooks ? trimmedBooks : [],
			searchValues
		);
		const sortedResults = sortOrders(results ? results : [], sortOption);
		setDisplayedBooks(sortedResults);
	}, [searchValues, trimmedBooks]);

	useEffect(() => {
		setDisplayedBooks(
			sortOrders(displayedBooks ? displayedBooks : [], sortOption)
		);
	}, [sortOption]);

	const optionsHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValues({
			option: event.target.value as "ISBN" | "Author" | "Title",
			value: "",
		});
	};

	const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValues({ ...searchValues, value: event.target.value });
	};

	const clickHandler = () => {
		setSearchValues({ ...searchValues, value: "" });
	};

	const selectOptionsHandler = (
		event: React.ChangeEvent<HTMLSelectElement>
	) => {
		setSortOption({
			sortOption: event.target.value as BooksSortType["sortOption"],
		});
	};

	// console.log("Trimmed Books: ", trimmedBooks);
	// console.log("Seaching: ", searchValues);
	// console.log("Results: ", displayedBooks);
	return (
		<div className="pt-12 pb-12">
			<div className="w-full px-4 pb-2 md:w-3/4 m-auto md:p-0 md:py-4 flex-wrap md:flex md:justify-between">
				<div className="w-full my-2 md:my-0 md:w-1/2">
					<SearchBar
						options={["ISBN", "Author", "Title"]}
						placeHolder="Search by ISBN, Author, or Title"
						selectStyles="font-semibold form-select block w-36 md:w-24 py-2 px-3 border border-gray-300 bg-gray-100 text-gray-400 rounded-l-md shadow-sm focus:outline-none focus:ring-blue-300 focus:border-blue-300 hover:cursor-pointer sm:text-sm"
						buttonStyles="p-2.5 z-10 text-sm font-medium h-full text-white bg-logo rounded-r-lg border border-logo opacity-80 hover:opacity-100 focus:ring-2 focus:outline-none focus:ring-blue-300 dark:bg-logo dark:hover:opacity-100 dark:focus:ring-blue-800"
						values={searchValues}
						optionsHandler={optionsHandler}
						inputHandler={inputHandler}
						clickHandler={clickHandler}
					/>
				</div>
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
			<div className="w-full px-4 md:w-3/4 md:m-auto md:p-0">
				<button className="w-full md:w-32 flex items-center p-2 text-md font-medium h-full text-white bg-logo rounded-lg border border-logo opacity-80 hover:opacity-100 active:scale-95 dark:bg-logo dark:hover:opacity-100 dark:focus:ring-blue-800">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						className="w-6 h-6 stroke-2 stroke-current"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M12 4.5v15m7.5-7.5h-15"
						/>
					</svg>
					<span className="pl-2 pr-1">Add New</span>
				</button>
			</div>
			<ul className="w-11/12 md:w-3/4 m-auto pt-8 flex flex-wrap gap-3 justify-center">
				{displayedBooks?.map((book) => (
					<li className="w-56 cursor-pointer bg-gray-100 pt-3 pb-1 rounded-lg">
						{/* {book.bookTitle +
							" : " +
							book.author.authorFirstName +
							" " +
							book.author.authorLastName +
							" : " +
							book.publishDate} */}
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
		</div>
	);
}
