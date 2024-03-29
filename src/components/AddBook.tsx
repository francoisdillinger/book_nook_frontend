import React, { useState } from "react";

export default function AddBook() {
	const [image, setImage] = useState<string>("");

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		console.log(event.target.files);
		if (event.target.files && event.target.files.length > 0) {
			setImage(URL.createObjectURL(event.target.files[0]));
		}
	};
	return (
		<React.Fragment>
			{" "}
			<div className="mt-10 mb-5">
				{image ? (
					<div className="flex justify-center">
						<img
							className="h-80"
							src={image}
							alt=""
						/>
					</div>
				) : (
					<div className="h-80 flex justify-center items-center font-semibold text-3xl text-gray-400">
						Image Preview
					</div>
				)}
			</div>
		</React.Fragment>
	);
}
