import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { CombinedChartDataOrdersType } from "./LineChart";

type LineChartPathProps = {
	dataPoint: CombinedChartDataOrdersType;
	bottomLineGenerator: d3.Line<[number, number]>;
	linePath: string | null;
	color: string;
};

export default function LineChartPath({
	dataPoint,
	bottomLineGenerator,
	linePath,
	color,
}: LineChartPathProps) {
	const focusedDataPoint = useSelector(
		(state: RootState) => state.highlightData.focusedDataPoint
	);
	return (
		<motion.path
			key={dataPoint.name}
			initial={{
				d:
					bottomLineGenerator(
						dataPoint.orders.map((order) => [
							new Date(order.orderDate).getTime(),
							order.quantity,
						])
					) || "",
			}}
			animate={{ d: linePath || "" }}
			transition={{
				duration: 0.5,
				ease: [0.17, 0.67, 0.83, 0.67], // Bezier curve for a bounce effect
				type: "spring", // Use spring physics for bounce
				damping: 10, // Adjust damping for more or less bounce
				stiffness: 100, // Adjust stiffness for more or less bounce
			}}
			fill="none"
			strokeWidth={2}
			stroke={
				focusedDataPoint === dataPoint.name || focusedDataPoint === ""
					? color
					: "gray"
			}
			opacity={
				focusedDataPoint === dataPoint.name || focusedDataPoint === ""
					? 0.8
					: 0.1
			}
		/>
	);
}
