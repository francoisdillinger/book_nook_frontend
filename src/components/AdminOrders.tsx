import { useEffect, useState } from "react";

export default function AdminOrders() {
	return (
		<div className="">
			<div className="">
				<table className="table-auto w-3/4 m-auto">
					<thead className="bg-gray-100 text-gray-700 text-xl text-left">
						<tr>
							<th className="font-semibold">Order ID</th>
							<th className="font-semibold">User Name</th>
							<th className="font-semibold">Status</th>
							<th className="font-semibold">Total</th>
							<th></th>
						</tr>
					</thead>
					<tbody className="border-gray-200 border-solid border rounded-lg">
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
					</tbody>
				</table>
			</div>
		</div>
	);
}
