export type TooltipStateType = {
	visible: boolean;
	content: JSX.Element | null;
	x: number;
	y: number;
};

export default function ChartToolTip({
	tooltip,
}: {
	tooltip: TooltipStateType;
}) {
	// console.log(`Tooltip X:${tooltip.x} , Y:${tooltip.y}`);
	return (
		<div
			className="absolute bg-gray-100 rounded-md p-2 text-slate-500 font-light text-xs shadow-2xl"
			style={{
				display: tooltip.visible ? "block" : "none",
				left: `${tooltip.x}px`,
				top: `${tooltip.y}px`,
			}}
		>
			{tooltip.content}
		</div>
	);
}
