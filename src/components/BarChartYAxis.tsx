import React, { useEffect, useRef } from "react";
import { axisLeft } from "d3-axis";
import * as d3 from "d3";
import { select } from "d3-selection";
import { ScaleLinear } from "d3-scale";

type BarChartYAxisProps = {
	yScale: ScaleLinear<number, number>;
	graphWidth: number;
};

const BarChartYAxis = ({ yScale, graphWidth }: BarChartYAxisProps) => {
	const yAxisRef = useRef<SVGSVGElement>(null);

	useEffect(() => {
		const yAxisGroup = select(yAxisRef.current);
		yAxisGroup.selectAll(".y-axis-line").remove();

		const yAxis = axisLeft(yScale).ticks(5);
		yAxisGroup.call(yAxis);
		// Remove the axis line (the '.domain')
		yAxisGroup.select(".domain").remove();
		yAxisGroup.selectAll(".tick line").remove();
	}, [yScale, graphWidth]);

	return (
		<g className="y-axis-container">
			<g
				ref={yAxisRef}
				className="y-axis text-neutral-600"
			/>
		</g>
	);
};

export default BarChartYAxis;
