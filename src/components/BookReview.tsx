import React from "react";
import StaticStarRating from "./StaticStarRating";

type BookReviewType = {
	rating: number;
	review: string;
	shortReview: string;
	user: {
		userName: string;
	};
};

export default function BookReview({
	rating,
	review,
	shortReview,
	user,
}: BookReviewType) {
	return (
		<React.Fragment>
			<div
				key={index}
				className="p-8"
			>
				<div className="flex items-center p-2">
					<img
						className="w-16 rounded-full shadow-lg"
						src={memers}
						alt=""
					/>
					<div className="pl-4">
						<h1 className="text-gray-500 font-medium pl-1">{user.userName}</h1>
						<span className="">
							<StaticStarRating
								rating={rating}
								width={6}
								height={6}
							/>
						</span>
						<p className="text-sm text-gray-400 pl-1">
							Reviewed on {formattedDate}
						</p>
					</div>
				</div>
				<div className="text-center">
					<h2 className="text-2xl text-gray-500 pb-4">{shortReview}</h2>
					<p className="text-lg text-gray-600 font-light">{review}</p>
				</div>
			</div>
		</React.Fragment>
	);
}
