import React, { useEffect, useRef } from "react";
import { axisLeft } from "d3-axis";
import * as d3 from "d3";
import { select } from "d3-selection";
import { ScaleLinear } from "d3-scale";

type YAxisProps = {
	yScale: ScaleLinear<number, number>;
	graphWidth: number;
	hasData: Number;
};

const YAxis = ({ yScale, graphWidth, hasData }: YAxisProps) => {
	const yAxisRef = useRef<SVGSVGElement>(null);
	const stripesRef = useRef<SVGSVGElement>(null);

	useEffect(() => {
		if (!hasData) return; // Skip if no data

		const stripesGroup = select(stripesRef.current);
		stripesGroup.selectAll(".zebra-stripe").remove(); // Clear previous stripes

		const tickValues = yScale.ticks(5);
		const stripesData = tickValues.slice(0, -1).map((tick, i) => {
			const y1 = yScale(tick);
			const y2 = yScale(tickValues[i + 1]);
			return {
				y: Math.min(y1, y2),
				height: Math.abs(y2 - y1),
			};
		});

		// Append zebra stripes
		stripesGroup
			.selectAll(".zebra-stripe")
			.data(stripesData)
			.join("rect")
			.attr("class", "zebra-stripe")
			.attr("x", 0)
			.attr("y", (d) => d.y)
			.attr("width", graphWidth)
			.attr("height", (d) => d.height)
			.attr("fill", (d, i) => (i % 2 === 0 ? "#f1f5f9" : "none"));
	}, [hasData, yScale, graphWidth]);

	useEffect(() => {
		const yAxisGroup = select(yAxisRef.current);
		yAxisGroup.selectAll(".y-axis-line").remove();

		const yAxis = axisLeft(yScale).ticks(5);
		yAxisGroup.call(yAxis);

		// Draw lines between ticks
		const tickValues = yScale.ticks(5);
		for (let i = 1; i < tickValues.length; i++) {
			const yPosition = yScale(tickValues[i]);
			yAxisGroup
				.append("line")
				.attr("class", "y-axis-line")
				.attr("x1", 0)
				.attr("y1", yPosition)
				.attr("x2", graphWidth)
				.attr("y2", yPosition)
				.attr("stroke", "#D86464")
				.attr("stroke-width", 1)
				.attr("stroke-dasharray", "6,6");
		}
	}, [yScale, graphWidth]);

	return (
		<g className="y-axis-container">
			<g
				ref={stripesRef}
				className="zebra-stripes"
			/>
			<g
				ref={yAxisRef}
				className="y-axis text-neutral-600"
			/>
		</g>
	);
};

export default YAxis;