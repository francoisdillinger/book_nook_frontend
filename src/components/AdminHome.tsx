import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { bookSales } from "../data/bookSales";

export default function AdminHome() {
	const svgRef = useRef<SVGSVGElement>(null);

	useEffect(() => {
		if (svgRef.current) {
			const margin = { top: 20, right: 20, bottom: 100, left: 100 };
			const graphWidth = 800 - margin.left - margin.right;
			const graphHeight = 600 - margin.top - margin.bottom;

			const svg = d3.select(svgRef.current);
			const graph = svg
				.append("g")
				.attr("width", graphWidth)
				.attr("height", graphHeight)
				.attr("transform", `translate(${margin.left},${margin.top})`);

			const xAxisGroup = graph
				.append("g")
				.attr("transform", `translate(0,${graphHeight})`);
			const yAxisGroup = graph.append("g");

			const max = d3.max(bookSales, (d) => d.sold);
			const y = d3
				.scaleLinear()
				.domain([0, max as number])
				.range([graphHeight, 0]);

			const x = d3
				.scaleBand()
				.domain(bookSales.map((book) => book.month.toString()))
				.range([0, graphWidth])
				.paddingInner(0.2)
				.paddingOuter(0.2);

			const rects = graph.selectAll("rect").data(bookSales);

			rects
				.enter()
				.append("rect")
				.attr("width", x.bandwidth)
				.attr("height", (d) => graphHeight - y(d.sold))
				.attr("fill", "rgb(8 145 178)")
				.attr("x", (d) => x(d.month.toString()) ?? 0)
				.attr("y", (d) => y(d.sold));

			const xAxis = d3.axisBottom(x);
			const yAxis = d3
				.axisLeft(y)
				.ticks(5)
				.tickFormat((d) => d + " orders");

			xAxisGroup.call(xAxis);
			yAxisGroup.call(yAxis);
		}
	}, []);

	return (
		<React.Fragment>
			<div>
				<svg
					ref={svgRef}
					width={800}
					height={600}
				>
					{/* {bookSales.map((book, i) => (
						<rect
							x={i * 100}
							y={500}
							fill="blue"
							width={25}
							height={book.sold * -10 + 500}
						></rect>
					))} */}
				</svg>
			</div>
		</React.Fragment>
	);
}
