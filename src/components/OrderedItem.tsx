import React from "react";

type OrderedItemType = {
	imgageURL: string;
	bookTitle: string;
	quantity: number;
	total: number;
};
export default function OrderedItem({
	imgageURL,
	bookTitle,
	quantity,
	total,
}: OrderedItemType) {
	return (
		<React.Fragment>
			{" "}
			<div className="flex items-center justify-between py-2 px-6">
				<div className="w-24">
					<img
						src={imgageURL}
						alt=""
					/>
				</div>
				<div className="px-8 w-full">
					<h2 className="block text-gray-400 font-semibold text-2xl">
						{bookTitle}
					</h2>
					<div className="">
						<p className="inline-block px-2 text-gray-500 text-lg">
							Quantity: {quantity}
						</p>
						<p className="inline-block px-2 text-gray-500 text-lg">
							Amount: $ {total.toFixed(2)}
						</p>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
