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
