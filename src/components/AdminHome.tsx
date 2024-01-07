import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { BookSale, bookSales } from "../data/bookSales";
import {
	BookSaleWithDateType,
	bookSalesWithDate,
} from "../data/bookSalesWithDate";

export default function AdminHome() {
	const sortedBooks = bookSalesWithDate.sort(
		(a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
	);
	// const sortedBooksWithUTCNoonDate = sortedBooks.map((sale) => {
	// 	return {
	// 		...sale,
	// 		date: parseDateToUTCNoon(sale.date),
	// 	};
	// });

	const svgRef = useRef<SVGSVGElement>(null);
	const [filteredBooks, setFilteredBooks] = useState(
		sortedBooks.filter((book) => book.title === "Frankenstein")
	);

	useEffect(() => {
		console.log("Rerender.");
		if (svgRef.current) {
			const margin = { top: 20, right: 20, bottom: 100, left: 100 };
			const graphWidth = 800 - margin.left - margin.right;
			const graphHeight = 600 - margin.top - margin.bottom;
			// const x = d3.scaleTime().range([0, graphWidth]);
			// const y = d3.scaleTime().range([graphHeight, 0]);
			const max = d3.max(filteredBooks, (d) => d.sold);

			const svg = d3.select(svgRef.current);
			svg.selectAll("*").remove();

			const graph = svg
				.append("g")
				.attr("width", graphWidth)
				.attr("height", graphHeight)
				.append("g")
				.attr("transform", `translate(${margin.left},${margin.top})`);

			const x = d3
				.scaleTime()
				.domain(
					d3.extent(filteredBooks, (d) => new Date(d.date)) as [Date, Date]
				)
				.range([0, graphWidth]);

			const y = d3
				.scaleLinear()
				.domain([0, max as number])
				.range([graphHeight, 0]);

			const xAxisGroup = graph
				.append("g")
				.attr("transform", `translate(0,${graphHeight})`);
			const yAxisGroup = graph.append("g");

			const xAxis = d3
				.axisBottom(x)
				.tickValues(filteredBooks.map((d) => new Date(d.date)))
				.tickFormat((d) => {
					if (d instanceof Date) {
						return d3.timeFormat("%d")(d);
					}
					return ""; // Return an empty string or some default value if `d` is not a Date
				});
			const yAxis = d3
				.axisLeft(y)
				// .ticks(5)
				.tickFormat((d) => `${d} orders`);

			xAxisGroup.transition().duration(500).call(xAxis);
			yAxisGroup.transition().duration(500).call(yAxis);

			const line = d3
				.line<BookSaleWithDateType>()
				.x((d) => x(new Date(d.date)))
				.y((d) => y(d.sold));
			// .curve(d3.curveCatmullRom.alpha(0.5));

			const path = graph
				.append("path")
				.datum(filteredBooks)
				.attr("fill", "none")
				.attr("stroke", "steelblue")
				.attr("stroke-width", 2)
				.attr("d", line);

			const totalLength = path.node()!.getTotalLength();

			path
				.attr("stroke-dasharray", totalLength + " " + totalLength)
				.attr("stroke-dashoffset", totalLength)
				// Animate the stroke-dashoffset to 0
				.transition()
				.delay(500)
				.duration(1000) // Duration of the animation in milliseconds
				.ease(d3.easeLinear)
				.attr("stroke-dashoffset", 0);

			const circles = graph.selectAll("circle").data(filteredBooks);
			circles
				.enter()
				.append("circle")
				.attr("r", 4)
				.attr("cx", (d) => x(new Date(d.date)))
				.attr("cy", graphHeight)
				.transition()
				.duration(500)
				.attr("cy", (d) => y(d.sold))
				.attr("fill", "blue");
		}
	}, []);

	const parseDateToUTCNoon = (dateString: string) => {
		const [year, month, day] = dateString
			.split("-")
			.map((d) => parseInt(d, 10));
		// Set the time to noon UTC to avoid timezone issues
		return new Date(Date.UTC(year, month - 1, day, 12, 0, 0));
	};

	const handleClick = (bookTitle: string) => {
		setFilteredBooks(sortedBooks.filter((book) => book.title === bookTitle));
		console.log("Filtered", filteredBooks);
	};

	return (
		<React.Fragment>
			<div>
				<svg
					ref={svgRef}
					width={800}
					height={600}
				></svg>
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
