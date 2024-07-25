import { motion } from "framer-motion";
import { setTooltip } from "../../features/chart/chartTooltipSlice";
import { doesToolTipOverflowWindow } from "../../utils/adminChartUtilities";
import { CombinedChartDataOrdersType } from "./LineChart";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";

type ChartBarProps = {
	graphHeight: number;
	barHeight: number;
	author: CombinedChartDataOrdersType;
	color: string;
	y: d3.ScaleLinear<number, number, never>;
	x: d3.ScaleBand<string>;
};

export default function ChartBar({
	graphHeight,
	barHeight,
	author,
	color,
	y,
	x,
}: ChartBarProps) {
	const focusedDataPoint = useSelector(
		(state: RootState) => state.highlightData.focusedDataPoint
	);
	const dispatch = useDispatch();
	const tooltip = useSelector((state: RootState) => state.ChartToolTip);

	return (
		<motion.rect
			initial={{ height: 0, y: graphHeight ? graphHeight : 0 }}
			animate={{
				height: barHeight,
				y: y(author.totalItems),
			}}
			transition={{
				duration: 0.5,
				ease: [0.17, 0.67, 0.83, 0.67], // Bezier curve for a bounce effect
				type: "spring", // Use spring physics for bounce
				damping: 10, // Adjust damping for more or less bounce
				stiffness: 100, // Adjust stiffness for more or less bounce
			}}
			key={author.name}
			width={x.bandwidth()}
			height={barHeight}
			x={x(author.name)}
			// y={y(author.totalItems)}
			fill={
				focusedDataPoint === author.name || focusedDataPoint === ""
					? color
					: "gray"
			}
			opacity={
				focusedDataPoint === author.name || focusedDataPoint === "" ? 1 : 0.2
			}
			onMouseEnter={(e) => {
				const { x, y } = doesToolTipOverflowWindow(e);
				const content = (
					<div>
						<div>
							<span className="text-slate-600 font-bold">Author Name:</span>{" "}
							{author.name}
						</div>
						<div>
							<span className="text-slate-600 font-bold">Total Quantity:</span>{" "}
							{author.totalItems.toString()}
						</div>
						<div>
							<span className="text-slate-600 font-bold">Amount:</span> $
							{author.totalAmount}
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
		></motion.rect>
	);
}
