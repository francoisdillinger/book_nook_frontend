import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import purpur from "../assets/purpur.jpg";
import useDropDownVisibility from "../hooks/useDropDownVisibility";

export default function TableData() {
	const [expandSlide, setExpandSlide] = useState<boolean>(false);
	const {
		state: dropDownState,
		dispatch: dropDownDispatch,
		profileRef,
		dropDownRef,
	} = useDropDownVisibility();

	const handleExpandSlide = () => {
		setExpandSlide((prevState) => !prevState);
	};
	// console.log("Expand: ", expandSlide);
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
				<td>
					<div className="relative">
						<div
							ref={profileRef}
							id="dropdownDividerButton"
							data-dropdown-toggle="dropdownDivider"
						>
							Ready
						</div>
						{dropDownState.show && (
							<div
								ref={dropDownRef}
								id="dropdownDivider"
								className={`z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 absolute top-full mt-2 right-0`}
							>
								{/* Dropdown items */}
								<ul
									className="py-2 text-sm text-gray-700 dark:text-gray-200"
									aria-labelledby="dropdownDividerButton"
								>
									<li>
										<a
											href="#"
											className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth={1.5}
												stroke="currentColor"
												className="w-6 h-6 inline"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
												/>
											</svg>
											<span className="px-1">Profile</span>
										</a>
									</li>
									<li>
										<a
											href="#"
											className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth={1.5}
												stroke="currentColor"
												className="w-6 h-6 inline"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
												/>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
												/>
											</svg>
											<span className="px-1">Settings</span>
										</a>
									</li>
									<li
										onClick={() => {
											dropDownDispatch({ type: "navigating" });
										}}
									>
										<a
											href="#"
											className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth={1.5}
												stroke="currentColor"
												className="w-6 h-6 inline"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
												/>
											</svg>
											<span className="px-1">Logout</span>
										</a>
									</li>
								</ul>
							</div>
						)}
					</div>
				</td>
				<td>$45.89</td>
				<td className="">
					<div
						onClick={handleExpandSlide}
						className=" w-fit m-auto cursor-pointer"
						role="button"
						tabIndex={0}
						aria-expanded={expandSlide}
					>
						<motion.svg
							xmlns="http://www.w3.org/2000/motion."
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							className="w-5 h-5 stroke-gray-700"
							animate={{ rotate: expandSlide ? 180 : 0 }}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="m19.5 8.25-7.5 7.5-7.5-7.5"
							/>
						</motion.svg>
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
