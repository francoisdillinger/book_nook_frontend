import React, { useState, useEffect } from "react";
import { books, BooksType } from "../data/adminBooks";
import { TrimmedBookType } from "./AdminBooks";
import {
	GraphQL_Categories,
	graphql_categories,
} from "../data/graphql_categories";
import SearchBar from "./SearchBar";
import alchemist from "../assets/alchemist.jpg";
import { categories_data } from "../data/categories_data";

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

const trimOrders = (books: BooksType): TrimmedBookType[] => {
	return [...books.data.books];
};

const trimGQLCategories = (books: GraphQL_Categories): string[] => {
	return [...books.data.categories.map((category) => category.categoryName)];
};

export default function BookSearch() {
	const [trimmedBooks, setTrimmedBooks] = useState<TrimmedBookType[] | null>();
	const [filteringCategories, setFilteringCategories] = useState<[] | string[]>(
		[]
	);
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
		const reformatedBooks = trimOrders(books);
		setTrimmedBooks(reformatedBooks);
	}, [books]);

	useEffect(() => {
		const trimmedCategories = trimGQLCategories(graphql_categories);
		setFilteringCategories(trimmedCategories);
	}, [graphql_categories]);

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
	console.log("Categories: ", graphql_categories);
	return (
		<React.Fragment>
			<div className="flex">
				<aside className="bg-gray-100 px-2 w-2/12">
					<h1 className="pt-6 font-semibold text-xl text-gray-400 pl-5 pb-4">
						Filters
					</h1>
					<div className="bg-white">
						<div className="w-full flex items-center justify-between rounded-md py-2.5 px-3 border-bottom border-gray-300 bg-white text-gray-400  shadow-sm sm:text-sm hover:cursor-pointer">
							<span className="mx-2">Categories</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								className="w-4 h-4 fill-none stroke-2 stroke-current mx-2"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="m19.5 8.25-7.5 7.5-7.5-7.5"
								/>
							</svg>
						</div>
						<div className="pl-5 text-sm text-gray-400 pt-2">
							{filteringCategories.map((category) => (
								<div className="py-1 flex items-center justify-between">
									<input
										className="border-gray-50 rounded accent-logo cursor-pointer"
										type="checkbox"
										id="vehicle1"
										name="vehicle1"
										value="Bike"
									/>
									<label htmlFor="vehicle1"> {category}</label>
									<br></br>
								</div>
							))}
						</div>
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
				</div>
			</div>
		</React.Fragment>
	);
}
