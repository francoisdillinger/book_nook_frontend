import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { motion } from "framer-motion";
import { BookSale, bookSales } from "../data/bookSales";
import {
	BookSaleWithDateType,
	bookSalesWithDate,
} from "../data/bookSalesWithDate";
import XAxis from "./XAxis";
import YAxis from "./YAxis";

const parseDateToUTCNoon = (dateString: string) => {
	const [year, month, day] = dateString.split("-").map((d) => parseInt(d, 10));
	// Set the time to noon UTC to avoid timezone issues
	return new Date(Date.UTC(year, month - 1, day, 12, 0, 0));
};

export default function AdminHome() {
	const sortedBooks = bookSalesWithDate.sort(
		(a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
	);
	const sortedBooksWithUTCNoonDate = sortedBooks.map((sale) => {
		return {
			...sale,
			date: parseDateToUTCNoon(sale.date),
		};
	});

	const svgRef = useRef<SVGSVGElement>(null);
	const graphRef = useRef<SVGSVGElement>(null);
	const [filteredBooks, setFilteredBooks] = useState(
		sortedBooksWithUTCNoonDate
	);

	const margin = { top: 20, right: 20, bottom: 100, left: 80 };
	const graphWidth = 1200 - margin.left - margin.right;
	const graphHeight = 600 - margin.top - margin.bottom;
	const max = d3.max(filteredBooks, (d) => d.sold);
	const colorScale = d3.scaleOrdinal(d3.schemeCategory10);
	const x = d3
		.scaleTime()
		.domain(d3.extent(filteredBooks, (d) => new Date(d.date)) as [Date, Date])
		.range([0, graphWidth]);

	const y = d3
		.scaleLinear()
		.domain([0, max as number])
		.range([graphHeight, 0]);

	let theLine = d3
		.line<BookSaleWithDateType>()
		.x((d) => x(new Date(d.date)))
		.y((d) => y(d.sold));
	// let linePath = theLine(
	// 	filteredBooks.map((book) => ({ ...book, date: book.date.toString() }))
	// );
	const bottomLineGenerator = d3
		.line<BookSaleWithDateType>()
		.x((d) => x(new Date(d.date)))
		.y((d) => graphHeight);
	const initialPath = bottomLineGenerator(
		filteredBooks.map((book) => ({ ...book, date: book.date.toString() }))
	);
	const groups = d3.groups(sortedBooksWithUTCNoonDate, (d) => d.title);
	// groups.forEach((value, key) => {
	// 	console.log(`Title: ${key}`);
	// 	console.log(value);
	// });
	// console.log(groups);
	const handleClick = (bookTitle: string) => {
		setFilteredBooks(
			sortedBooksWithUTCNoonDate.filter((book) => book.title === bookTitle)
		);
	};

	return (
		<React.Fragment>
			<div>
				<svg
					ref={svgRef}
					width={1200}
					height={600}
				>
					<g
						ref={graphRef}
						width={graphWidth}
						height={graphHeight}
						transform={`translate(${margin.left},${margin.top})`}
					>
						{/* <motion.path
							initial={{ d: initialPath || "" }}
							animate={linePath ? { d: linePath } : false}
							transition={{ ease: "easeInOut", duration: 0.5 }}
							fill="none"
							strokeWidth={4}
							stroke="steelblue"
						></motion.path> */}
						{Array.from(groups).map(([title, books], index) => {
							const color = colorScale(index.toString());

							return (
								<React.Fragment key={title}>
									<motion.path
										initial={{
											d:
												bottomLineGenerator(
													books.map((book) => ({
														...book,
														date: book.date.toString(),
													}))
												) || "",
										}}
										animate={{
											d: theLine(
												books.map((book) => ({
													...book,
													date: book.date.toString(),
												}))
											),
										}}
										transition={{ ease: "easeInOut", duration: 0.5 }}
										fill="none"
										strokeWidth={2}
										stroke={color}
									/>
									{books.map((book) => (
										<motion.circle
											key={book.date.toDateString() + book.title}
											initial={{ cy: graphHeight }}
											animate={{ cy: y(book.sold) }}
											transition={{ ease: "easeInOut", duration: 0.5 }}
											r={4}
											cx={x(new Date(book.date))}
											fill={color}
										/>
									))}
								</React.Fragment>
							);
						})}

						{/* {filteredBooks.map((book) => (
							<motion.circle
								key={book.date.toString()}
								initial={{ cy: graphHeight }}
								animate={{ cy: y(book.sold) }}
								transition={{ ease: "easeInOut", duration: 0.5 }}
								r={4}
								cx={x(new Date(book.date))}
								fill="steelblue"
							></motion.circle>
						))} */}
						<XAxis
							xScale={x}
							height={graphHeight}
						/>
						<YAxis yScale={y} />
					</g>
				</svg>
				<div>
					<button
						className="bg-slate-200 rounded-md m-4 p-2"
						onClick={() => handleClick("Frankenstein")}
					>
						Frankenstein
					</button>
					<button
						className="bg-slate-200 rounded-md m-4 p-2"
						onClick={() => handleClick("Dracula")}
					>
						Dracula
					</button>
					<button
						className="bg-slate-200 rounded-md m-4 p-2"
						onClick={() => handleClick("Snow Crash")}
					>
						Snow Crash
					</button>
				</div>
			</div>
		</React.Fragment>
	);
}
