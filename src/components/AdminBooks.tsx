import React, { useState, useEffect } from "react";
import { books, BooksType } from "../data/adminBooks";
import SearchBar from "./SearchBar";

type BooksSearchType = {
	option: "ISBN" | "Author" | "Title";
	value: string;
};

type TrimmedBookType = {
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

const searchedOrders = (
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

export default function AdminBooks() {
	const [trimmedBooks, setTrimmedBooks] = useState<TrimmedBookType[] | null>();
	const [searchValues, setSearchValues] = useState<BooksSearchType>({
		option: "ISBN",
		value: "",
	});

	useEffect(() => {
		const reformatedBooks = trimOrders(books);
		setTrimmedBooks(reformatedBooks);
	}, [books]);

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

	// console.log("Trimmed Books: ", trimmedBooks);
	console.log("Seaching: ", searchValues);
	return (
		<div>
			<div className="w-full p-4 md:w-3/4 m-auto md:p-0 md:py-4 flex-wrap md:flex md:justify-between">
				<div className="w-full my-2 md:my-0 md:w-1/2">
					<SearchBar
						options={["ISBN", "Author", "Title"]}
						placeHolder="Search by ISBN, Author, or Title"
						selectStyles="font-semibold form-select block w-36 md:w-24 py-2 px-3 border border-gray-300 bg-gray-100 text-gray-400 rounded-l-md shadow-sm focus:outline-none focus:ring-blue-300 focus:border-blue-300 sm:text-sm"
						buttonStyles="p-2.5 z-10 text-sm font-medium h-full text-white bg-logo rounded-r-lg border border-logo opacity-80 hover:opacity-100 focus:ring-2 focus:outline-none focus:ring-blue-300 dark:bg-logo dark:hover:opacity-100 dark:focus:ring-blue-800"
						values={searchValues}
						optionsHandler={optionsHandler}
						inputHandler={inputHandler}
						clickHandler={clickHandler}
					/>
				</div>
				{/* <div className="">
					<select
						id="book-selector"
						className="w-full md:w-fitfont-semibold form-select block py-2.5 px-3 border border-gray-300 bg-white text-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-blue-300 focus:border-blue-300 sm:text-sm"
						onChange={(event) => selectOptionsHandler(event)}
					>
						{options.map((option) => (
							<option key={option}>{option}</option>
						))}
					</select>
				</div> */}
			</div>
		</div>
	);
}
