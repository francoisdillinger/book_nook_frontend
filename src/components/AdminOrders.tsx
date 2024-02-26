import { useEffect, useState } from "react";
import TableData from "./TableData";

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
					<tbody className="">
						<TableData />
						<TableData />
						<TableData />
					</tbody>
				</table>
			</div>
		</div>
	);
}
