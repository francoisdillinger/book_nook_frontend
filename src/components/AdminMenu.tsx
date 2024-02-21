import React, { useState, useEffect } from "react";
import useMenuVisibility from "../hooks/useMenuVisibility";
import useDropDownVisibility from "../hooks/useDropDownVisibility";
import purpur from "../assets/purpur.jpg";
import SearchBar from "./SearchBar";

export default function AdminMenu() {
	const [loggedIn, setLoggedIn] = useState(false);
	const { state, dispatch, toggleButtonRef, navRef } = useMenuVisibility();
	const {
		state: dropDownState,
		dispatch: dropDownDispatch,
		profileRef,
		dropDownRef,
	} = useDropDownVisibility();

	useEffect(() => {
		console.log("Remounting.");
	}, []);

	return (
		<nav className="bg-gray-100 ">
			{/* Do the following if you want to set a max container width, this may be a good idea */}
			{/* <div className="max-w-7xl mx-auto px-4"> */}
			<div className=" mx-auto px-4">
				<div className="flex justify-between pt-2 lg:ml-20 xl:ml-14">
					<div className="flex items-center">
						<a
							href=""
							className="px-2 py-2"
						>
							<img
								className="h-10 w-10"
								src="/booknook_logo.svg"
								alt=""
							/>
						</a>
						<div>
							<h2 className="font-bold text-xl/4">
								Book<span className="text-logo">Nook</span>
							</h2>
							<p className="text-slate-500 text-xs">Where Stories Live</p>
						</div>
					</div>
					<div className="hidden md:flex justify-end w-40 items-center space-x-1 ">
						<a
							href=""
							className=" text-gray-600 hover:text-gray-900"
							// You may need to remove padding on the main page for the profile image
							// if you do, the above classes are how it needs to be adjusted
							// below is how the css looks originally
							// className="py-5 px-4 text-gray-600 hover:text-gray-900"
						></a>
						<div className="relative">
							<div
								ref={profileRef}
								id="dropdownDividerButton"
								data-dropdown-toggle="dropdownDivider"
							>
								<img
									className="w-9 h-9 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
									src={purpur}
									alt="Bordered avatar"
								/>
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
												setLoggedIn(false);
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
					</div>
					<div className="md:hidden flex items-center">
						<button
							ref={toggleButtonRef}
							onClick={() => dispatch({ type: "toggleMenu" })}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="w-6 h-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
}
