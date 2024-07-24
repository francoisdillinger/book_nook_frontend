import { motion } from "framer-motion";
import React from "react";
import { CombinedChartDataOrdersType } from "./LineChart";
import { doesToolTipOverflowWindow } from "../../utils/adminChartUtilities";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { setTooltip } from "../../features/chart/chartTooltipSlice";

type LineChartCircleProps = {
	order: {
		uniqueId: string;
		bookTitle?: string;
		orderId: string;
		userId?: string;
		bookId?: string;
		quantity: number;
		orderDate: string;
		orderAmount: number;
	};
	graphHeight: number;
	dataPoint: CombinedChartDataOrdersType;
	color: string;
	x: d3.ScaleTime<number, number, never>;
	y: d3.ScaleLinear<number, number, never>;
};

export default function LineChartCircle({
	order,
	graphHeight,
	dataPoint,
	color,
	x,
	y,
}: LineChartCircleProps) {
	const tooltip = useSelector((state: RootState) => state.ChartToolTip);
	const focusedDataPoint = useSelector(
		(state: RootState) => state.highlightData.focusedDataPoint
	);
	const dispatch = useDispatch();
	return (
		<motion.circle
			// The issue of one or two circles not resetting use due to a few duplicate keys
			// so I added a uuid as a uniqueId field on the order.
			key={order.uniqueId}
			className="cursor-pointer"
			stroke={"white"}
			strokeWidth={2}
			initial={{ cy: graphHeight }}
			animate={{
				cy: y(order.quantity),
				cx: x(new Date(order.orderDate)),
			}}
			transition={{
				duration: 0.5,
				ease: [0.17, 0.67, 0.83, 0.67], // Bezier curve for a bounce effect
				type: "spring", // Use spring physics for bounce
				damping: 10, // Adjust damping for more or less bounce
				stiffness: 100, // Adjust stiffness for more or less bounce
			}}
			r={6}
			fill={
				focusedDataPoint === dataPoint.name || focusedDataPoint === ""
					? color
					: "gray"
			}
			opacity={
				focusedDataPoint === dataPoint.name || focusedDataPoint === "" ? 1 : 0.1
			}
			onMouseEnter={(e) => {
				// console.log(e);
				const { x, y } = doesToolTipOverflowWindow(e);
				const content = (
					<div>
						<div>
							<span className="text-slate-600 font-bold">Order ID:</span>{" "}
							{order.orderId}
						</div>
						<div>
							<span className="text-slate-600 font-bold">Date:</span>{" "}
							{order.orderDate.toString()}
						</div>
						<div>
							<span className="text-slate-600 font-bold">Quantity:</span>{" "}
							{order.quantity}
						</div>
						<div>
							<span className="text-slate-600 font-bold">Amount:</span> $
							{order.orderAmount}
						</div>
					</div>
				);
				dispatch(
					setTooltip({
						visible: true,
						content: content,
						x: x,
						y: y,
					})
				);
			}}
			onMouseLeave={() => {
				dispatch(setTooltip({ ...tooltip, visible: false }));
			}}
		/>
	);
}
