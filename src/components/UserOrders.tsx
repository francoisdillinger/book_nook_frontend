import React, { useEffect, useState } from "react";
import { orders, UserOrdersType } from "../data/userOrder";
// import { trimOrders } from "../utils/adminOrdersUtilities";

type UserOrder = {
	orderId: string;
	book: {
		bookTitle: string;
	};
	quantity: number;
	orderDate: string;
	orderAmount: number;
	orderStatus: string;
};

const trimOrders = (orders: UserOrdersType): UserOrder[] => {
	return [...orders.orders];
};

export default function UserOrders() {
	const [userOrders, setUserOrders] = useState<UserOrder[] | null>();
	useEffect(() => {
		const trimmedOrders = trimOrders(orders);
		setUserOrders(trimmedOrders);
	}, [orders]);
	console.log(userOrders);
	return <React.Fragment></React.Fragment>;
}
