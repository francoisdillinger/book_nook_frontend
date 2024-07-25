import React, { useState } from "react";

export default function ProfilePage() {
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
			<div className="w-11/12 md:w-1/2 bg-white md:bg-gray-100 md:rounded-lg md:mt-16 p-8  m-auto mb-20">
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
				<form
					action=""
					className=" font-medium text-gray-500 text-sm"
				>
					<div className="">
						<label
							htmlFor="image"
							className="block"
						>
							Profile Image
						</label>
						<input
							onChange={handleFileChange}
							className="block file:p-3 file:bg-logo file:border-none file:text-gray-50 file:opacity-90 file:hover:opacity-100 file:cursor-pointer file:font-medium w-full lg:w-full text-sm font-normal text-gray-500 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-300 focus:border-blue-300 focus-visible:outline-none"
							type="file"
							name="image"
							id="image"
						/>
					</div>
					<div className="">
						<label
							htmlFor="firstName"
							className="block"
						>
							First Name
						</label>
						<input
							className="block p-2.5 w-full lg:w-full z-20 text-sm font-normal text-gray-700 rounded-md bg-gray-50 border border-gray-300 focus:ring-blue-300 focus:border-blue-300 focus-visible:outline-none"
							type="text"
							name="firstName"
							id="firstName"
						/>
					</div>
					<div className="">
						<label
							htmlFor="lastName"
							className="block"
						>
							Last Name
						</label>
						<input
							className="block p-2.5 w-full lg:w-full z-20 text-sm font-normal text-gray-700 rounded-md bg-gray-50 border border-gray-300 focus:ring-blue-300 focus:border-blue-300 focus-visible:outline-none"
							type="text"
							name="lastName"
							id="lastName"
						/>
					</div>
					<div className="flex justify-center pt-4">
						<button
							type="submit"
							className="bg-logo p-3 rounded-md w-full md:w-1/2 text-gray-50 opacity-90 hover:opacity-100 cursor-pointer font-medium"
						>
							Update Profile
						</button>
					</div>
				</form>
			</div>
		</React.Fragment>
	);
}
