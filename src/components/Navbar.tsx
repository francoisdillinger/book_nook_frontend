import React, { useState, useEffect } from "react";
import useMenuVisibility from "../hooks/useMenuVisibility";
import useDropDownVisibility from "../hooks/useDropDownVisibility";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

export default function Navbar() {
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
		<nav className="bg-gray-100">
			<div className="max-w-[1600px] mx-auto px-4">
				<div className="flex justify-between">
					<Link
						className="flex items-center"
						to={"/"}
					>
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
					</Link>
					<div className="hidden md:flex items-center w-1/2">
						<SearchBar
							options={["All", "Author", "Title"]}
							placeHolder="Search by Author or Titles..."
							selectStyles="font-semibold form-select block w-24 py-2 px-3 border border-gray-300 bg-gray-100 text-gray-400 rounded-l-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
							buttonStyles="p-2.5 z-10 text-sm font-medium h-full text-white bg-accent rounded-r-lg border border-accent  focus:outline-none hover:bg-accentHover"
							values={{
								option: "",
								value: "",
							}}
							optionsHandler={() => {}}
							inputHandler={() => {}}
							clickHandler={() => {}}
						/>
					</div>
					<div className="hidden md:flex justify-end w-40 items-center space-x-1 ">
						{loggedIn ? (
							<React.Fragment>
								<a
									href=""
									className="py-5 px-4 text-gray-600 hover:text-gray-900"
								>
									<div className="relative">
										<div className="absolute left-3 bottom-3">
											<p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
												3
											</p>
										</div>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={1.5}
											stroke="currentColor"
											className="w-6 h-6"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
											/>
										</svg>
									</div>
								</a>
								<div className="relative">
									<div
										ref={profileRef}
										id="dropdownDividerButton"
										data-dropdown-toggle="dropdownDivider"
									>
										<img
											className="w-7 h-7 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
											src=""
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
												<li>
													<Link
														to={"/admin"}
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
														<span className="px-1">Admin</span>
													</Link>
												</li>
												<li
													onClick={() => {
														setLoggedIn(false);
														dropDownDispatch({ type: "hasSelectedItem" });
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
							</React.Fragment>
						) : (
							<React.Fragment>
								<Link
									to={"/login"}
									className=" py-5 px-3 text-gray-600 hover:text-gray-900"
									onClick={(e) => {
										// e.preventDefault();
										setLoggedIn(true);
									}}
								>
									Login
								</Link>
								<Link
									to={"/signup"}
									className="py-3 px-3 bg-logo text-white rounded hover:bg-logoHover transition duration-300"
								>
									Signup
								</Link>
							</React.Fragment>
						)}
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
				<div
					className={`${
						state.hidden ? "max-h-0" : "max-h-[500px]"
					} overflow-hidden transition-all ease-in-out duration-300`}
					ref={navRef}
				>
					<div
						className={`${
							state.hidden
								? "opacity-0 translate-y-[-100%]"
								: "opacity-100 translate-y-0"
						} transform transition-all ease-in-out duration-600`}
					>
						<a
							href=""
							className="block py-2 px-4 text-sm hover:bg-gray-200"
						>
							Features
						</a>
						<a
							href=""
							className="block py-2 px-4 text-sm hover:bg-gray-200"
						>
							Pricing
						</a>
					</div>
				</div>
				{/* <div className="flex md:hidden items-center w-full pb-2">
					<SearchBar />
				</div> */}
			</div>
		</nav>
	);
}
