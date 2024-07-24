import { motion } from "framer-motion";
import React from "react";
import { doesToolTipOverflowWindow } from "../../utils/adminChartUtilities";
import { CombinedChartDataOrdersType } from "./LineChart";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { setTooltip } from "../../features/chart/chartTooltipSlice";

type PieChartPathProps = {
	item: d3.PieArcDatum<CombinedChartDataOrdersType>;
	arcPath: d3.Arc<any, d3.PieArcDatum<CombinedChartDataOrdersType>>;
	color: string;
};

export default function PieChartPath({
	item,
	arcPath,
	color,
}: PieChartPathProps) {
	const tooltip = useSelector((state: RootState) => state.ChartToolTip);
	const focusedDataPoint = useSelector(
		(state: RootState) => state.highlightData.focusedDataPoint
	);
	const dispatch = useDispatch();
	return (
		<motion.path
			key={item.data.name}
			d={arcPath(item) || ""}
			stroke={"white"}
			strokeWidth={2}
			transition={{
				duration: 0.5,
				ease: [0.17, 0.67, 0.83, 0.67], // Bezier curve for a bounce effect
				type: "spring", // Use spring physics for bounce
				damping: 20, // Adjust damping for more or less bounce
				stiffness: 100, // Adjust stiffness for more or less bounce
			}}
			fill={
				focusedDataPoint === item.data.name || focusedDataPoint === ""
					? color
					: "gray"
			}
			opacity={
				focusedDataPoint === item.data.name || focusedDataPoint === "" ? 1 : 0.2
			}
			onMouseEnter={(e) => {
				const { x, y } = doesToolTipOverflowWindow(e);
				const content = (
					<div>
						<div>
							<span className="text-slate-600 font-bold">Author Name:</span>{" "}
							{item.data.name}
						</div>
						<div>
							<span className="text-slate-600 font-bold">Total Quantity:</span>{" "}
							{item.data.totalItems.toString()}
						</div>
						<div>
							<span className="text-slate-600 font-bold">Amount:</span> $
							{item.data.totalAmount}
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
		></motion.path>
	);
}
