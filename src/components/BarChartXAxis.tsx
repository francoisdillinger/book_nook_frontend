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
};

const BarChartXAxis = ({ xScale, height, ticks }: BarChartXAxisTypes) => {
	const ref = useRef<SVGGElement>(null);

	useEffect(() => {
		const xScaleNumeric = xScale as unknown as AxisScale<number>;

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
		// select(ref.current)
		// 	.selectAll("text")
		// 	.attr("transform", "rotate(-40)")
		// 	.attr("text-anchor", "end");
	}, [xScale]);

	return (
		<g
			ref={ref}
			className="text-neutral-600"
			transform={`translate(0,${height})`}
		/>
	);
};

export default BarChartXAxis;
