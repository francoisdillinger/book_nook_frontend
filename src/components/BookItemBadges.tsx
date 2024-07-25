import { TrimmedBookType } from "./AdminBooksPage";

type BookItemBadgesType = {
	bookItem: TrimmedBookType | null | undefined;
};

export default function BookItemBadges({ bookItem }: BookItemBadgesType) {
	return (
		<div className="bg-gray-100">
			<div className="flex flex-wrap w-10/12 m-auto p-8">
				<div className="w-full pb-8 md:pb-0 md:w-1/2 lg:w-1/4 text-center p-2">
					<div className="md:p-2 inline-block rounded-lg ">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="w-10 h-10 fill-gray-500"
						>
							<path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 116 0h3a.75.75 0 00.75-.75V15z" />
							<path d="M8.25 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM15.75 6.75a.75.75 0 00-.75.75v11.25c0 .087.015.17.042.248a3 3 0 015.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 00-3.732-10.104 1.837 1.837 0 00-1.47-.725H15.75z" />
							<path d="M19.5 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
						</svg>
					</div>
					<h2 className="text-gray-500 font-bold text-xl">ISBN</h2>
					<p className="text-xl mx-2 md:p-2 text-logo">
						{bookItem ? bookItem.isbn : "None"}
					</p>
				</div>
				<div className="w-full pb-8 md:pb-0 md:w-1/2 lg:w-1/4 text-center p-2">
					<div className="md:p-2 inline-block rounded-lg ">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="w-10 h-10 fill-gray-500"
						>
							<path d="M4.5 3.75a3 3 0 00-3 3v.75h21v-.75a3 3 0 00-3-3h-15z" />
							<path
								fillRule="evenodd"
								d="M22.5 9.75h-21v7.5a3 3 0 003 3h15a3 3 0 003-3v-7.5zm-18 3.75a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z"
								clipRule="evenodd"
							/>
						</svg>
					</div>
					<h2 className="text-gray-500 font-bold text-xl">Pages</h2>
					<p className="text-xl mx-2 md:p-2 text-logo">
						{bookItem ? bookItem.pageCount : "None"}
					</p>
				</div>
				<div className="w-full pb-8 md:pb-0 md:w-1/2 lg:w-1/4 text-center p-2">
					<div className="md:p-2 inline-block rounded-lg ">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="w-10 h-10 fill-gray-500"
						>
							<path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
							<path
								fillRule="evenodd"
								d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
								clipRule="evenodd"
							/>
						</svg>
					</div>
					<h2 className="text-gray-500 font-bold text-xl">Published</h2>
					<p className="text-xl mx-2 md:p-2 text-logo">
						{bookItem ? bookItem.publishDate : "None"}
					</p>
				</div>
				<div className="w-full pb-8 md:pb-0 md:w-1/2 lg:w-1/4 text-center p-2">
					<div className="md:p-2 inline-block rounded-lg ">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="w-10 h-10 fill-gray-500"
						>
							<path
								fillRule="evenodd"
								d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
								clipRule="evenodd"
							/>
						</svg>
					</div>
					<h2 className="text-gray-500 font-bold text-xl">Inventory</h2>
					<p className="text-xl mx-2 md:p-2 text-logo">
						{bookItem ? bookItem.inventoryCount : "None"}
					</p>
				</div>
			</div>
		</div>
	);
}
