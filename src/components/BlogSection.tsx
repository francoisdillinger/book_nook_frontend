import bookstoreimageclip from "../assets/bookstoreimageclip.png";
import memers from "../assets/memers.jpg";
import marms from "../assets/marms.jpg";
import purpur from "../assets/purpur.jpg";

export default function BlogSection() {
	return (
		<div className="my-16">
			<div className="flex flex-col text-center">
				<h1 className="text-2xl md:text-5xl font-semibold text-slate-900 mt-2 md:mt-10">
					Latest Blogs
				</h1>
				<p className="w-2/3 my-6 md:my-10 m-auto text-slate-500">
					Stay current with the literary world through our latest blogs, where
					we discuss everything from the newest bestsellers to timeless
					classics. Get insights, inspiration, and in-depth book analysis right
					at your fingertips, crafted for book lovers, by book lovers.
				</p>
			</div>
			<div className="flex flex-wrap w-5/6 m-auto mt-16">
				<div className="w-full md:w-1/2 lg:w-1/4 p-6">
					<div className="rounded-md">
						<img
							className="rounded-md"
							src={bookstoreimageclip}
							alt=""
						/>
					</div>
					<h2 className="font-bold text-xl text-slate-800 my-4">
						Turning the Page: Top 10 Must-Read Novels of the Year
					</h2>
					<p className="text-slate-400 text-base my-6">
						As the year unfolds, it brings with it a fresh stack of stories
						waiting to be devoured. In 'Turning the Page,' we've rounded up...{" "}
						<span>
							<a
								className="font-semibold text-logo"
								href=""
							>
								Continue reading
							</a>
						</span>
					</p>
					<div className="flex items-center">
						<div className="">
							<img
								className="w-12 h-12 rounded-full"
								src={memers}
								alt=""
							/>
						</div>
						<div className="ml-4">
							<h2 className="text-sm font-semibold text-slate-700">
								Memow Jester
							</h2>
							<p className="text-xs text-slate-400">5 October 2023</p>
						</div>
					</div>
				</div>
				<div className="w-full md:w-1/2 lg:w-1/4 p-6">
					<div className="rounded-md">
						<img
							className="rounded-md"
							src={bookstoreimageclip}
							alt=""
						/>
					</div>
					<h2 className="font-bold text-xl text-slate-800 my-4">
						Behind the Bookshelf: Uncovering the Hidden Gems in Our Collection
					</h2>
					<p className="text-slate-400 text-base my-6">
						Every bookshelf has its stars and its secret wonders. 'Behind the
						Bookshelf' is your guide to uncovering those hidden gems in...{" "}
						<span>
							<a
								className="font-semibold text-logo"
								href=""
							>
								Continue reading
							</a>
						</span>
					</p>
					<div className="flex items-center">
						<div className="">
							<img
								className="w-12 h-12 rounded-full"
								src={purpur}
								alt=""
							/>
						</div>
						<div className="ml-4">
							<h2 className="text-sm font-semibold text-slate-700">
								Pupur Jester
							</h2>
							<p className="text-xs text-slate-400">5 October 2023</p>
						</div>
					</div>
				</div>
				<div className="w-full md:w-1/2 lg:w-1/4 p-6">
					<div className="rounded-md">
						<img
							className="rounded-md"
							src={bookstoreimageclip}
							alt=""
						/>
					</div>
					<h2 className="font-bold text-xl text-slate-800 my-4">
						From Papyrus to Print: The Evolving World of Reading
					</h2>
					<p className="text-slate-400 text-base my-6">
						The act of reading has transformed dramatically through the ages,
						from ancient scrolls to the digital screens of today....{" "}
						<span>
							<a
								className="font-semibold text-logo"
								href=""
							>
								Continue reading
							</a>
						</span>
					</p>
					<div className="flex items-center">
						<div className="">
							<img
								className="w-12 h-12 rounded-full"
								src={memers}
								alt=""
							/>
						</div>
						<div className="ml-4">
							<h2 className="text-sm font-semibold text-slate-700">
								Memow Jester
							</h2>
							<p className="text-xs text-slate-400">5 October 2023</p>
						</div>
					</div>
				</div>
				<div className="w-full md:w-1/2 lg:w-1/4 p-6">
					<div className="rounded-md">
						<img
							className="rounded-md"
							src={bookstoreimageclip}
							alt=""
						/>
					</div>
					<h2 className="font-bold text-xl text-slate-800 my-4">
						Bookmark These: The BookNook Guide to Upcoming Literary Trends
					</h2>
					<p className="text-slate-400 text-base my-6">
						With the literary world constantly in flux, it can be hard to keep
						up with what's next. 'Bookmark These' is your insider's guide...{" "}
						<span>
							<a
								className="font-semibold text-logo"
								href=""
							>
								Continue reading
							</a>
						</span>
					</p>
					<div className="flex items-center">
						<div className="">
							<img
								className="w-12 h-12 rounded-full"
								src={marms}
								alt=""
							/>
						</div>
						<div className="ml-4">
							<h2 className="text-sm font-semibold text-slate-700">
								Marmalade Sipe
							</h2>
							<p className="text-xs text-slate-400">5 October 2023</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
