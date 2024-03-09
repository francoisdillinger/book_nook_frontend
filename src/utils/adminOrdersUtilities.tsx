export type IndividualOrderType = {
	bookId: number;
	bookTitle: string;
	isbn: string;
	orderAmount: number;
	quantity: number;
};

export type ReformatedOrdersType = {
	orderId: string;
	userId: number;
	firstName: string;
	lastName: string;
	orderDate: string;
	totalAmount: number;
	orderStatus: string;
	totalQuantity: number;
	orders: IndividualOrderType[];
};

export type TrimmedOrdersType = {
	orderId: string;
	userId: number;
	bookId: number;
	quantity: number;
	orderDate: string;
	orderAmount: number;
	orderStatus: string;
	user: {
		userName: string;
		firstName: string;
		lastName: string;
	};
	book: {
		bookTitle: string;
		isbn: string;
	};
};

export type OrdersSortType = {
	sortOption:
		| "Date: Newest"
		| "Date: Oldest"
		| "Total: Ascending"
		| "Total: Descending"
		| "Status: Processing"
		| "Status: Shipped"
		| "Status: Delivered";
};

export type OrdersSearchType = {
	option: "OrderId" | "User";
	value: string;
};

export const trimOrders = (orders: OrdersType): TrimmedOrdersType[] => {
	return [...orders.data.orders];
};

export const reformateOrders = (
	orders: TrimmedOrdersType[]
): ReformatedOrdersType[] => {
	const orderIds = orders.map((order) => order.orderId);
	const removedDuplicateIds = [...new Set(orderIds)];

	const newOrders = removedDuplicateIds.map((id) => {
		const matchingOrders = orders.filter((order) => id === order.orderId);
		const reformatedOrder = {
			orderId: matchingOrders[0].orderId,
			userId: matchingOrders[0].userId,
			firstName: matchingOrders[0].user.firstName,
			lastName: matchingOrders[0].user.lastName,
			orderDate: matchingOrders[0].orderDate,
			orderStatus: matchingOrders[0].orderStatus,
			totalAmount: matchingOrders.reduce(
				(accumulator, order) => accumulator + order.orderAmount,
				0
			),
			totalQuantity: matchingOrders.reduce(
				(accumulator, order) => accumulator + order.quantity,
				0
			),
			orders: matchingOrders.map((order) => {
				return {
					bookId: order.bookId,
					bookTitle: order.book.bookTitle,
					isbn: order.book.isbn,
					orderAmount: order.orderAmount,
					quantity: order.quantity,
				};
			}),
		};
		return reformatedOrder;
	});
	// console.log("Orders: ", newOrders);
	return newOrders;
};
