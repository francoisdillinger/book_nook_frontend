import React, { useEffect, useRef, useState } from "react";

const ResponsiveSVGContainer = ({ children }) => {
	const containerRef = useRef(null);
	const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

	useEffect(() => {
		const resizeObserver = new ResizeObserver((entries) => {
			if (entries[0].target) {
				const { width, height } = entries[0].target.getBoundingClientRect();
				setDimensions({ width, height });
			}
		});

		resizeObserver.observe(containerRef.current);

		return () => {
			resizeObserver.disconnect();
		};
	}, []);

	return (
		<div
			ref={containerRef}
			style={{ width: "100%", height: "100%" }}
		>
			{React.cloneElement(children, { ...dimensions })}
		</div>
	);
};

export default ResponsiveSVGContainer;
