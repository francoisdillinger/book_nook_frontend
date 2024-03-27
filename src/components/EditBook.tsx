export default function EditBook() {
	return (
		<form
			action=""
			className="w-3/4 m-auto font-medium text-gray-500 text-sm"
		>
			<div className="">
				<label
					htmlFor="image"
					className="block"
				>
					Book Image
				</label>
				<input
					className=""
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
					className="block p-2.5 w-1/2 z-20 text-sm text-gray-900 rounded-md bg-gray-50 border border-gray-300 focus:ring-blue-300 focus:border-blue-300 focus-visible:outline-none"
					type="text"
					name="title"
					id="title"
				/>
			</div>
			<div className="">
				<label
					htmlFor="firstname"
					className="block"
				>
					Author First Name
				</label>
				<input
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
					type="text"
					name="lastname"
					id="lastname"
				/>
			</div>
		</form>
	);
}
