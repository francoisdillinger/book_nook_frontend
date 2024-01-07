import React, { useState, useEffect, useRef } from "react";

export default function Scratch() {
	const svgRef = useRef(null);
	const [mousePosition, setMousePosition] = useState({ x: 150, y: 150 });
	const [isMouseDown, setIsMouseDown] = useState(false);

	useEffect(() => {
		const handleMouseMove = (event: MouseEvent) => {
			if (isMouseDown) {
				setMousePosition({ x: event.clientX, y: event.clientY });
			}
		};

		const handleMouseUpGlobal = () => {
			setIsMouseDown(false);
		};

		window.addEventListener("mousemove", handleMouseMove);
		window.addEventListener("mouseup", handleMouseUpGlobal);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
			window.removeEventListener("mouseup", handleMouseUpGlobal);
		};
	}, [isMouseDown]);

	const handleMouseDown = () => {
		setIsMouseDown(true);
	};

	console.log("Mouse is:", isMouseDown);

	return (
		<React.Fragment>
			<svg
				ref={svgRef}
				width={1200}
				height={1000}
			>
				<path
					d={`M 150 50 L 75 200 L 225 200 C 225 200 ${mousePosition.x} ${mousePosition.y} 150 50`}
					fill="orange"
				></path>
				<circle
					onMouseDown={handleMouseDown}
					cx={mousePosition.x}
					cy={mousePosition.y}
					r={5}
					fill="gray"
				></circle>
				<line
					x1={225}
					y1={200}
					x2={mousePosition.x}
					y2={mousePosition.y}
					stroke="gray"
				></line>
			</svg>
		</React.Fragment>
	);
}
