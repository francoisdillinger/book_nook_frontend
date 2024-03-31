import React, { useState, useEffect } from "react";
import { author_data, AuthorsDataType } from "../data/authors";
import { trimAuthors, TrimmedAuthorsType } from "./AddBook";

export default function EditAuthor() {
	const [authors, setAuthors] = useState<TrimmedAuthorsType[] | null>();
	const [firstName, setFirstName] = useState<string>("");
	const [lastName, setLastName] = useState<string>("");
	const [selectedAuthor, setSelectedAuthor] = useState<string>("");

	useEffect(() => {
		const trimmedAuthors = trimAuthors(author_data);
		setAuthors(trimmedAuthors);
	}, [author_data]);

	const selectOptionsHandler = (
		event: React.ChangeEvent<HTMLSelectElement>
	) => {
		const author = event.target.value;
		setSelectedAuthor(author);

		if (author !== "") {
			const name = author.split(" ");
			setFirstName(name[0]);
			setLastName(name[1]);
		} else {
			setFirstName("");
			setLastName("");
		}

		// console.log(name);
	};

	console.log(firstName);
	console.log(lastName);
	return (
		<React.Fragment>
			<form
				action=""
				className="w-11/12 md:w-1/2 m-auto mb-20 font-medium text-gray-500 text-sm"
			>
				<div className="">
					<label
						htmlFor="author"
						className="block"
					>
						Authors
					</label>
					<select
						id="author"
						className="block p-2.5 w-full lg:w-full z-20 text-sm font-normal text-gray-700 rounded-md bg-gray-50 border border-gray-300 focus:ring-blue-300 focus:border-blue-300 focus-visible:outline-none"
						onChange={(event) => selectOptionsHandler(event)}
					>
						<option value="">--- Select Author to Edit---</option>
						{authors?.map((author, index) => (
							<option key={index}>
								{author.authorFirstName + " " + author.authorLastName}
							</option>
						))}
					</select>
				</div>
				<div className="">
					<label
						htmlFor="firstname"
						className="block"
					>
						Author First Name:
					</label>
					<input
						className="block p-2.5 w-full lg:w-full z-20 text-sm font-normal text-gray-700 rounded-md bg-gray-50 border border-gray-300 focus:ring-blue-300 focus:border-blue-300 focus-visible:outline-none"
						type="text"
						name="firstname"
						id="firstname"
						key={`${selectedAuthor}-first`}
						defaultValue={firstName}
					/>
				</div>
				<div className="">
					<label
						htmlFor="lastname"
						className="block"
					>
						Author Last Name:
					</label>
					<input
						className="block p-2.5 w-full lg:w-full z-20 text-sm font-normal text-gray-700 rounded-md bg-gray-50 border border-gray-300 focus:ring-blue-300 focus:border-blue-300 focus-visible:outline-none"
						type="text"
						name="lastname"
						id="lastname"
						key={`${selectedAuthor}-last`}
						defaultValue={lastName}
					/>
				</div>
				<div className="flex justify-center pt-4">
					<button
						type="submit"
						className="bg-logo p-3 rounded-md w-full md:w-1/2 text-gray-50 opacity-90 hover:opacity-100 cursor-pointer font-medium"
					>
						Edit Author
					</button>
				</div>
			</form>
		</React.Fragment>
	);
}
