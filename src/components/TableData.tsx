import React from "react";

export default function TableData() {
	return (
		<React.Fragment>
			<tr>
				<td>12312312</td>
				<td>James JEster</td>
				<td>Ready</td>
				<td>$45.89</td>
				<td className="">
					<div className="border-gray-700 border-solid border rounded-full w-fit m-auto">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							// stroke="currentColor"
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
		</React.Fragment>
	);
}
