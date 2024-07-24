import React, { useEffect, useMemo, useState } from "react";
import * as d3 from "d3";
import { motion } from "framer-motion";
import { CombinedChartDataOrdersType } from "./LineChart";
import { colorScale } from "../../utils/junk";
import { RootState } from "../../app/store";
import { useSelector } from "react-redux";
import PieChartPath from "./PieChartPath";

type PieChartType = {
	paginatedList: CombinedChartDataOrdersType[];
	width?: number;
	height?: number;
	hasData: number;
};

export default function PieChart({
	paginatedList,
	width = 0,
	height = 0,
	hasData,
}: PieChartType) {
	const svgWidth = width;
	const svgHeight = height;
	const graphHeight = svgHeight;
	const graphWidth = svgWidth;
	const [totalOrderCount, setTotalOrderCount] = useState(0);
	const focusedDataPoint = useSelector(
		(state: RootState) => state.highlightData.focusedDataPoint
	);
	const [key, setKey] = useState(0);

	useEffect(() => {
		setTotalOrderCount(
			paginatedList.reduce(
				(accumulator, data) => accumulator + data.totalItems,
				0
			)
		);
		setKey((prevKey) => prevKey + 1);
	}, [paginatedList]);

	const pie = useMemo(() => {
		return d3
			.pie<CombinedChartDataOrdersType>()
			.sort(null)
			.value((d) => d.totalItems);
	}, [graphWidth, paginatedList]);

	const radius = useMemo(() => {
		const smallerSide = Math.min(graphWidth, graphHeight);
		return (smallerSide / 2) * 0.8; // 80% of half the smaller dimension
	}, [graphWidth, graphHeight]);

	const arcPath = useMemo(() => {
		return d3
			.arc<d3.PieArcDatum<CombinedChartDataOrdersType>>()
			.outerRadius(radius)
			.innerRadius(radius / 1.8);
	}, [radius, paginatedList]);

	return (
		<React.Fragment>
			<svg
				width={svgWidth}
				height={svgHeight}
			>
				<g transform={`translate(${graphWidth / 2}, ${graphHeight / 2})`}>
					{" "}
					<circle
						cx={0}
						cy={0}
						r={radius * 1.05}
						fill="white"
					/>
					{hasData && (
						<text
							x={0}
							y={-graphHeight / 2.3}
							textAnchor="middle"
							className="fill-current text-neutral-500 text-2xl  lg:text-base xl:text-xl"
						>
							Percentage of Total Orders
						</text>
					)}
					{hasData ? (
						<text
							x={0}
							y={0}
							textAnchor="middle"
							dominantBaseline="middle"
							className="fill-current text-neutral-600 font-light text-5xl lg:text-4xl xl:text-5xl"
						>
							{focusedDataPoint != ""
								? parseFloat(
										(
											((paginatedList?.find(
												(data) => data.name === focusedDataPoint
											)?.totalItems || 0) /
												totalOrderCount) *
											100
										).toString()
								  ).toFixed(0)
								: "100"}
							%
						</text>
					) : (
						<React.Fragment>
							<rect
								x={(-graphWidth * 0.9) / 2}
								y={(-graphHeight * 0.9) / 2}
								width={graphWidth * 0.9}
								height={graphHeight * 0.9}
								className="fill-slate-100"
							/>
							<text
								x={0}
								y={0}
								textAnchor="middle" // Centers horizontally
								dominantBaseline="middle" // Centers vertically
								className="fill-current text-logo text-base sm:text-2xl lg:text-base xl:text-xl font-light"
							>
								No Data Exists For This Period
							</text>
						</React.Fragment>
					)}
					<motion.g
						key={key}
						animate={{
							rotate:
								key > 2
									? [5, -5, 3, -3, 1, -1, 0]
									: [20, -20, 10, -10, 5, -5, 0],
						}}
						transition={{
							duration: 1,
							ease: "easeInOut",
						}}
					>
						{hasData &&
							paginatedList != undefined &&
							pie(paginatedList)!.map((item, index) => {
								const color = colorScale(index.toString());
								// This is to override a bug where orders of 0 are still shown
								// on the chart, but filtering them changes the index #'s so
								// the colors change as well. I'll come back to this.
								if (item.data.totalItems === 0) return;
								return (
									<PieChartPath
										item={item}
										arcPath={arcPath}
										color={color}
									/>
								);
							})}
					</motion.g>
				</g>
			</svg>
		</React.Fragment>
	);
}
