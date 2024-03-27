export default function EditBook() {
	return (
		<form
			action=""
			className=""
		>
			<div className="">
				<label
					htmlFor="image"
					className="block"
				>
					Book Image
				</label>
				<input
					type="file"
					name="image"
					id="image"
				/>
			</div>
			<div className="">
				<label htmlFor="title">Title</label>
				<input
					type="text"
					name="title"
					id="title"
				/>
			</div>
			<div className="">
				<label htmlFor="firstname">Author First Name</label>
				<input
					type="text"
					name="firstname"
					id="firstname"
				/>
			</div>
			<div className="">
				<label htmlFor="lastname">Author Last Name</label>
				<input
					type="text"
					name="lastname"
					id="lastname"
				/>
			</div>
		</form>
	);
}
