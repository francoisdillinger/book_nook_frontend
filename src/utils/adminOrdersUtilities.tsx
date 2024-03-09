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
