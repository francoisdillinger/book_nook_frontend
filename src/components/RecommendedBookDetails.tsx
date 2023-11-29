import React, { useEffect, useState } from "react";

interface RecommendedBookDetailProps {
	index: number;
	counter: number;
	centerBookOffset: number;
	book: {
		title: string;
		price: string;
	};
}

export default function RecommendedBookDetails({
	index,
	counter,
	centerBookOffset,
	book,
}: RecommendedBookDetailProps) {
	const [opacityClass, setOpacityClass] = useState("opacity-0");

	useEffect(() => {
		let timerId: number | undefined;
		if (index === counter + centerBookOffset) {
			timerId = setTimeout(() => {
				setOpacityClass("opacity-1");
			}, 300);
		}

		return () => {
			setOpacityClass("opacity-0");
			clearTimeout(timerId);
		};
	}, [index, counter, centerBookOffset]);

	return (
		<div
			className={`text-center ${opacityClass} transition-opacity duration-300`}
		>
			<h3 className="text-2xl font-bold text-slate-900 mt-6 mb-2">
				{book.title}
			</h3>
			<p className="text-lg font-medium text-amber-600 my-2">{book.price}</p>
			<button className="w-4/5 rounded-md p-2 my-2 bg-amber-500 hover:scale-110 active:scale-95 duration-300">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-6 h-6 inline-block text-white mr-2"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
					/>
				</svg>
				<span className="text-white font-bold ml-2">Add to cart</span>
			</button>
		</div>
	);
}
