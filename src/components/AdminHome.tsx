import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { bookSales } from "../data/bookSales";

export default function AdminHome() {
	const svgRef = useRef<SVGSVGElement>(null);

	useEffect(() => {
		if (svgRef.current) {
			d3.select(svgRef.current);
		}
	}, []);

	return (
		<React.Fragment>
			<div>
				<svg
					ref={svgRef}
					width={1200}
					height={1000}
				>
					{bookSales.map((book, i) => (
						<rect
							x={i * 100}
							y={500}
							fill="blue"
							width={25}
							height={book.sold * -10 + 500}
						></rect>
					))}
				</svg>
			</div>
		</React.Fragment>
	);
}
