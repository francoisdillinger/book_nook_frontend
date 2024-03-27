export default function EditBook() {
	return (
		<form
			action=""
			className="w-11/12 md:w-1/2 m-auto font-medium text-gray-500 text-sm"
		>
			<div className="">
				<label
					htmlFor="image"
					className="block"
				>
					Book Image
				</label>
				<input
					className="block file:p-3 file:bg-logo file:border-none file:text-gray-50 file:opacity-90 file:hover:opacity-100 file:cursor-pointer file:font-medium w-full lg:w-full text-sm font-normal text-gray-500 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-300 focus:border-blue-300 focus-visible:outline-none"
					type="file"
					name="image"
					id="image"
				/>
			</div>
			<div className="">
				<label
					htmlFor="title"
					className="block"
				>
					Title
				</label>
				<input
					className="block p-2.5 w-full lg:w-full z-20 text-sm font-normal text-gray-700 rounded-md bg-gray-50 border border-gray-300 focus:ring-blue-300 focus:border-blue-300 focus-visible:outline-none"
					type="text"
					name="title"
					id="title"
				/>
			</div>
			{/* <div className="">
				<label
					htmlFor="firstname"
					className="block"
				>
					Author First Name
				</label>
				<input
					className="block p-2.5 w-full lg:w-full z-20 text-sm font-normal text-gray-700 rounded-md bg-gray-50 border border-gray-300 focus:ring-blue-300 focus:border-blue-300 focus-visible:outline-none"
					type="text"
					name="firstname"
					id="firstname"
				/>
			</div>
			<div className="">
				<label
					htmlFor="lastname"
					className="block"
				>
					Author Last Name
				</label>
				<input
					className="block p-2.5 w-full lg:w-full z-20 text-sm font-normal text-gray-700 rounded-md bg-gray-50 border border-gray-300 focus:ring-blue-300 focus:border-blue-300 focus-visible:outline-none"
					type="text"
					name="lastname"
					id="lastname"
				/>
			</div> */}
		</form>
	);
}
