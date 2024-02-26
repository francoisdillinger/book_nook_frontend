import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function TableData() {
	const [expandSlide, setExpandSlide] = useState<boolean>(false);

	const handleExpandSlide = () => {
		setExpandSlide((prevState) => !prevState);
	};
	console.log("Expand: ", expandSlide);
	return (
		<React.Fragment>
			<tr className="border-gray-200 border-solid border rounded-lg">
				<td>12312312</td>
				<td>James JEster</td>
				<td>Ready</td>
				<td>$45.89</td>
				<td className="">
					<div
						onClick={handleExpandSlide}
						className="border-gray-700 border-solid border rounded-full w-fit m-auto"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							className="w-4 h-4 stroke-gray-700"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="m19.5 8.25-7.5 7.5-7.5-7.5"
							/>
						</svg>
					</div>
				</td>
			</tr>
			<tr>
				<td className="">
					<motion.div
						initial={{ height: expandSlide ? "0em" : "0em" }}
						animate={{ height: expandSlide ? "5em" : "0em" }}
						transition={{
							duration: 0.1,
							ease: expandSlide ? [0.17, 0.67] : [0, 0, 0, 0],
							type: expandSlide ? "spring" : "ease",
							damping: 8,
							stiffness: 100,
						}}
						className={`relative overflow-hidden `}
					>
						hi
					</motion.div>
				</td>
			</tr>
		</React.Fragment>
	);
}
