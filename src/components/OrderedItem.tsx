import React from "react";

type OrderedItemType = {
	firstName: string;
	lastName: string;
	total: number;
};
export default function OrderedItem({
	firstName,
	lastName,
	total,
}: OrderedItemType) {
	return <React.Fragment>hi</React.Fragment>;
}
