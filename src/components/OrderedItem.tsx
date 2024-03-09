import React from "react";

type OrderedItemType = {
	imgageURL: string;
	bookTitle: string;
	quantity: string;
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
			<div className="flex items-center justify-center py-2">
				<div className="w-20">
					<img
						src={imgageURL}
						alt=""
					/>
				</div>
				<div className="px-8">
					<h2 className="block text-gray-400 font-semibold text-2xl">
						{bookTitle}
					</h2>
					<div className="">
						<p className="inline-block px-2 text-gray-500 text-lg">
							Quantity: {quantity}
						</p>
						<p className="inline-block px-2 text-gray-500 text-lg">
							Amount: $ {total}
						</p>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
