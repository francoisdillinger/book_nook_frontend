import React, { useEffect, useRef } from "react";
import { axisBottom } from "d3-axis";
import { select } from "d3-selection";
import * as d3 from "d3";
import { ScaleLinear, ScaleBand } from "d3-scale";
import { AxisScale } from "d3-axis";
import { ScaleTime } from "d3";

type XAxisTypes = {
	xScale: ScaleTime<number, number>;
	height: number;
	width: number;
};

const XAxis: React.FC<XAxisTypes> = ({ xScale, height, width }) => {
	const ref = useRef<SVGGElement>(null);

	useEffect(() => {
		const xScaleNumeric = xScale as unknown as AxisScale<number>;

		const xAxis = axisBottom(xScaleNumeric).ticks(width > 800 ? 12 : 6);
		// Additional customizations if needed, e.g., .ticks(5)

		const transition = select(ref.current)
			.transition()
			.duration(500) // Duration of the transition in milliseconds
			.ease(d3.easeCubicInOut); // Easing function

		select(ref.current)
			.call(xAxis as any)
			.select(".domain")
			.remove();
		select(ref.current).selectAll(".tick line").remove();
	}, [xScale]);

	return (
		<g
			ref={ref}
			className=" text-neutral-600"
			transform={`translate(0,${height})`}
		/>
	);
};

export default XAxis;
