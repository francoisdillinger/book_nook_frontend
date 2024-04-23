export default function BookItemBadges() {
	return (
		<div className="bg-gray-100">
			<div className="flex flex-wrap w-10/12 m-auto p-8">
				<div className="md:w-1/2 lg:w-1/4 text-center p-2">
					<div className="md:p-2 inline-block rounded-lg ">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="w-10 h-10 text-logo"
						>
							<path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 116 0h3a.75.75 0 00.75-.75V15z" />
							<path d="M8.25 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM15.75 6.75a.75.75 0 00-.75.75v11.25c0 .087.015.17.042.248a3 3 0 015.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 00-3.732-10.104 1.837 1.837 0 00-1.47-.725H15.75z" />
							<path d="M19.5 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
						</svg>
					</div>
					<h2 className="text-gray-600 font-bold text-xl">ISBN</h2>
					{/* <p className="text-sm mx-2 mb-2 md:p-2 text-slate-400">
						Leverage our Quick Delivery service and receive your books with
						unparalleled speed, offering you a seamless and enjoyable BookNook
						experience.
					</p> */}
				</div>
				<div className="md:w-1/2 lg:w-1/4 text-center p-2">
					<div className="md:p-2 inline-block rounded-lg ">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="w-10 h-10 text-logo"
						>
							<path d="M4.5 3.75a3 3 0 00-3 3v.75h21v-.75a3 3 0 00-3-3h-15z" />
							<path
								fillRule="evenodd"
								d="M22.5 9.75h-21v7.5a3 3 0 003 3h15a3 3 0 003-3v-7.5zm-18 3.75a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z"
								clipRule="evenodd"
							/>
						</svg>
					</div>
					<h2 className="text-gray-600 font-bold text-xl">Pages</h2>
					{/* <p className="text-sm mx-2 mb-2 md:p-2 text-slate-400">
						Shop with confidence at BookNook, our secure gateway ensures a
						smooth and reliable experience, safeguarding your data at every
						step.
					</p> */}
				</div>
				<div className="md:w-1/2 lg:w-1/4 text-center p-2">
					<div className="md:p-2 inline-block rounded-lg ">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="w-10 h-10 text-logo"
						>
							<path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
						</svg>
					</div>
					<h2 className="text-gray-600 font-bold text-xl">Published</h2>
					{/* <p className="text-sm mx-2 mb-2 md:p-2 text-slate-400">
						Discover unparalleled excellence with BookNook, where every book is
						a guarantee of premium quality, enabling you to indulge in the
						finest literary experiences.
					</p> */}
				</div>
				<div className="md:w-1/2 lg:w-1/4 text-center p-2">
					<div className="md:p-2 inline-block rounded-lg ">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="w-10 h-10 text-logo"
						>
							<path
								fillRule="evenodd"
								d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
								clipRule="evenodd"
							/>
						</svg>
					</div>
					<h2 className="text-gray-600 font-bold text-xl">Inventory</h2>
					{/* <p className="text-sm mx-2 mb-2 md:p-2 text-slate-400">
						Shop with assurance at BookNook, as we offer a hassle-free return
						guarantee, ensuring your satisfaction and peace of mind with every
						purchase.
					</p> */}
				</div>
			</div>
		</div>
	);
}
