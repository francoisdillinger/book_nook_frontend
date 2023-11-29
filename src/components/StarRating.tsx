import React, { useState } from "react";

interface StarRatingProps {
	initialRating?: number;
	isStatic?: boolean;
	onRatingChange?: (value: number) => void;
}

export default function StarRating({
	initialRating = 0,
	isStatic = false,
	onRatingChange,
}: StarRatingProps) {
	const [rating, setRating] = useState<number>(initialRating);
	const [hover, setHover] = useState<number | null>(null);

	const handleRatingChange = (ratingVal: number) => {
		if (!isStatic) {
			setRating(ratingVal);
			if (onRatingChange) {
				onRatingChange(ratingVal);
			}
		}
	};

	return (
		<div className="flex">
			{[...Array(5)].map((_, index) => {
				const ratingVal = index + 1;
				return (
					<label
						key={index}
						aria-label={`Rate ${ratingVal} out of 5`}
					>
						<input
							type="radio"
							name="rating"
							value={ratingVal}
							onChange={() => handleRatingChange(ratingVal)}
							className="sr-only"
						/>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							className={`${
								ratingVal <= (hover || rating)
									? "fill-yellow-400"
									: "fill-gray-200"
							} ${
								isStatic ? "" : "cursor-pointer hover:fill-yellow-400"
							} w-12 h-12`}
							onMouseEnter={() => !isStatic && setHover(ratingVal)}
							onMouseLeave={() => !isStatic && setHover(null)}
						>
							<path
								fillRule="evenodd"
								d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
								clipRule="evenodd"
							/>
						</svg>
					</label>
				);
			})}
		</div>
	);
}
