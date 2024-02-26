import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import purpur from "../assets/purpur.jpg";

export default function TableData() {
	const [expandSlide, setExpandSlide] = useState<boolean>(false);

	const handleExpandSlide = () => {
		setExpandSlide((prevState) => !prevState);
	};
	console.log("Expand: ", expandSlide);
	return (
		<React.Fragment>
			{/* <tr className="border-gray-200 border-solid border-t border-r border-l rounded-t-2xl"> */}
			<tr className="">
				<td>12312312</td>
				<td>
					<div className="flex items-center justify-center py-2">
						<img
							className="w-10 rounded-full border-green-300 border-solid border-2"
							src={purpur}
							alt=""
						/>
						<p className="pl-2">James Jester</p>
					</div>
				</td>
				<td>Ready</td>
				<td>$45.89</td>
				<td className="">
					<div
						onClick={handleExpandSlide}
						className="border-gray-700 border-solid border rounded-full w-fit m-auto cursor-pointer"
						role="button"
						tabIndex={0}
						aria-expanded={expandSlide}
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
			{/* <tr className="border-gray-200 border-solid border-b border-r border-l rounded-lg w-full"> */}
			<tr className="border-gray-200 border-solid border-b">
				<td
					className=""
					colSpan={5}
				>
					<motion.div
						initial={{ height: 0 }}
						animate={{ height: expandSlide ? "5em" : "0em" }}
						transition={
							expandSlide
								? {
										duration: 0.2, // Adjust duration for spring effect
										type: "spring",
										damping: 10, // Tune for a less "bouncy" spring
										stiffness: 100, // Adjust stiffness for the spring
								  }
								: {
										duration: 0.1, // Adjust duration for ease effect
										ease: "easeInOut", // Use an ease-in-out curve for closing
								  }
						}
						className={`relative overflow-hidden flex items-center justify-center`}
					>
						hi
					</motion.div>
				</td>
			</tr>
		</React.Fragment>
	);
}
