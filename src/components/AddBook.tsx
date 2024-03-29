import React, { useState } from "react";

export default function AddBook() {
	const [image, setImage] = useState<string>("");

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		console.log(event.target.files);
		if (event.target.files && event.target.files.length > 0) {
			setImage(URL.createObjectURL(event.target.files[0]));
		}
	};
	return <></>;
}
