import { useState, useEffect } from "react";

function useGetWindowSize() {
	const [windowSize, setWindowSize] = useState("large");

	useEffect(() => {
		const resizeListener = () => {
			let windowWidth = window.innerWidth;

			if (windowWidth < 768) {
				setWindowSize("small");
				// console.log('small')
			} else if (windowWidth < 1024) {
				setWindowSize("medium");
				// console.log('medium')
			} else if (windowWidth >= 1024 && windowWidth < 1280) {
				setWindowSize("large");
				// console.log('large')
			} else if (windowWidth >= 1280) {
				setWindowSize("xLarge");
			}
		};

		resizeListener();

		window.addEventListener("resize", resizeListener);

		return () => {
			window.removeEventListener("resize", resizeListener);
		};
	}, []);

	return windowSize;
}

export default useGetWindowSize;
