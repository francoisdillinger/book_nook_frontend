import { useState } from "react";

export default function SideBarAdminMenu() {
	const [close, setClose] = useState<boolean>(true);

	return (
		<div className="fixed top-0 left-0 h-screen">
			<div
				className={`bg-white shadow-md min-h-screen w-72 absolute transition ease-in-out transform ${
					close ? "translate-x-0" : "-translate-x-56"
				}`}
			>
				<div className="flex justify-between pr-2 items-center">
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
					<button
						className="shadow-md rounded-full active:shadow-none"
						onClick={() => setClose(!close)}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1}
							className={`stroke-logo w-12 h-12 cursor-pointer transition ease-in-out ${
								close ? "rotate-0" : "rotate-180"
							}`}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
					</button>
				</div>
				<div className="flex justify-between px-2 items-center my-2">
					<h2 className="text-lg font-semibold">Data Analytics</h2>
					<button className="shadow-md rounded-md active:shadow-none">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1}
							className="stroke-logo w-12 h-12"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
							/>
						</svg>
					</button>
				</div>
				<div className="flex justify-between px-2 items-center my-2">
					<h2 className="text-lg font-semibold">Orders</h2>
					<button className="shadow-md rounded-full active:shadow-none">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1}
							className="stroke-logo w-12 h-12"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
					</button>
				</div>
				<div className="flex justify-between px-2 items-center my-2">
					<h2 className="text-lg font-semibold">Inventory</h2>
					<button className="shadow-md rounded-md active:shadow-none">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1}
							className="stroke-logo w-12 h-12"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5"
							/>
						</svg>
					</button>
				</div>
				<div className="absolute bottom-0 w-full">
					<div className="flex justify-between px-2 items-center my-2">
						<h2 className="text-lg font-semibold">Profile</h2>
						<button className="shadow-md rounded-full active:shadow-none">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1}
								className="stroke-logo w-12 h-12"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
								/>
							</svg>
						</button>
					</div>
					<div className="flex justify-between px-2 items-center my-2">
						<h2 className="text-lg font-semibold">Logout</h2>
						<button className="shadow-md rounded-md active:shadow-none">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1}
								className="stroke-logo w-12 h-12"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
