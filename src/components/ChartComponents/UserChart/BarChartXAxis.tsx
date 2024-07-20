import React, { useEffect, useRef } from "react";
import { axisBottom } from "d3-axis";
import { select } from "d3-selection";
import * as d3 from "d3";
import { AxisScale } from "d3-axis";
import { ScaleTime, ScaleBand } from "d3"; // Import ScaleBand from d3-scale

type BarChartXAxisTypes = {
	xScale: ScaleBand<string>;
	height: number;
	ticks: number;
	width: number;
};

const BarChartXAxis = ({
	xScale,
	height,
	ticks,
	width,
}: BarChartXAxisTypes) => {
	const ref = useRef<SVGGElement>(null);

	useEffect(() => {
		const xScaleNumeric = xScale as unknown as AxisScale<number>;
		// console.log("ticks: ", ticks);
		const xAxis = axisBottom(xScaleNumeric).ticks(ticks);

		const transition = select(ref.current)
			.transition()
			.duration(500) // Duration of the transition in milliseconds
			.ease(d3.easeCubicInOut); // Easing function

		select(ref.current)
			.call(xAxis as any)
			.select(".domain")
			.remove();
		select(ref.current).selectAll(".tick line").remove();
		// This will rotate the text which might be needed depending on the number of users
		select(ref.current)
			.selectAll("text")
			.attr(
				"transform",

				"rotate(-10)"
			)
			// .attr(
			// 	"transform",
			// 	`${
			// 		width < 700 || ticks > 15
			// 			? `${ticks > 15 ? "rotate(-30)" : "rotate(-15)"}`
			// 			: "rotate(0)"
			// 	}`
			// )
			.attr("text-anchor", `${width < 700 || ticks > 15 ? "end" : "end"}`);
	}, [xScale, width]);

	return (
		<g
			ref={ref}
			className="text-neutral-600 "
			transform={`translate(0,${height})`}
		/>
	);
};

export default BarChartXAxis;
