import { Link } from "react-router-dom";
import SvgLogo from "./SvgLogo";

export default function Footer() {
	return (
		<div className="">
			<div className="flex flex-col sm:m-auto md:flex-row justify-around md:p-8 pt-4 md:pt-16 bg-gray-100">
				<div className="m-auto md:m-0 w-2/3 md:w-1/3 lg:w-1/4 sm:mb-8 md:mb-0">
					<Link
						to={"/"}
						className="flex items-center"
					>
						{/* <img className="w-16" src="booknook_logo2.svg" alt="" /> */}
						<div className="rounded-lg overflow-hidden">
							<SvgLogo
								width="4em"
								color="#D86464"
							/>
						</div>
						<div className="mx-3">
							<h2 className="font-bold text-2xl text-slate-900">
								Book<span className="text-logo">Nook</span>
							</h2>
							<p className="text-slate-500 text-sm">Where Stories Live</p>
						</div>
					</Link>
					<div className="w-fit md:w-4/5 lg:w-fit ">
						<p className="text-slate-600 font-medium my-4 text-sm">
							BookNook is your cozy online retreat for book lovers everywhere.
							From the latest bestsellers to timeless classics, we offer a
							sanctuary where your reading adventure awaits.
						</p>
					</div>
					<div>
						<h2 className="text-slate-900 font-bold text-lg mb-4">Follow Us</h2>
						<div className="flex gap-3">
							<div className="cursor-pointer w-11 h-11 border rounded-lg flex justify-center items-center shadow-sm transition ease-in-out delay-100 hover:bg-blue-100 ">
								{/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
								<svg
									className="h-6 fill-blue-700"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 320 512"
								>
									<path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
								</svg>
							</div>
							<div className="cursor-pointer w-11 h-11 border rounded-lg flex justify-center items-center shadow-sm transition ease-in-out delay-100 hover:bg-rose-200">
								{/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
								<svg
									className="h-6 fill-rose-600"
									xmlns="http://www.w3.org/2000/svg"
									height="1em"
									viewBox="0 0 576 512"
								>
									<path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
								</svg>
							</div>
							<div className="cursor-pointer w-11 h-11 border rounded-lg flex justify-center items-center shadow-sm transition ease-in-out delay-100 hover:bg-gray-200">
								{/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
								<svg
									className="h-6 fill-black"
									xmlns="http://www.w3.org/2000/svg"
									height="1em"
									viewBox="0 0 512 512"
								>
									<path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
								</svg>
							</div>
							<div className="cursor-pointer w-11 h-11 border rounded-lg flex justify-center items-center shadow-sm transition ease-in-out delay-100 hover:bg-sky-100">
								{/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
								<svg
									className="h-6 fill-sky-600"
									xmlns="http://www.w3.org/2000/svg"
									height="1em"
									viewBox="0 0 448 512"
								>
									<path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
								</svg>
							</div>
							<div className="cursor-pointer w-11 h-11 border rounded-lg flex justify-center items-center shadow-sm transition ease-in-out delay-100 hover:bg-rose-100">
								{/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
								<svg
									className="h-6 fill-rose-400"
									xmlns="http://www.w3.org/2000/svg"
									height="1em"
									viewBox="0 0 448 512"
								>
									<path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
								</svg>
							</div>
						</div>
					</div>
				</div>
				<div className="flex justify-center md:justify-start lg:justify-around md:gap-5 lg:gap-20 w-full md:w-1/3 lg:w-1/4 sm:mb-8 md:mb-0">
					<div className="">
						<h2 className="font-bold mb-6 text-slate-900">Quick Links</h2>
						<Link
							to={"/about"}
							className="block mb-2 text-slate-500 text-sm font-medium"
						>
							About Us
						</Link>
						<Link
							to={"/contact"}
							className="block mb-2 text-slate-500 text-sm font-medium"
						>
							Contact Us
						</Link>
						<Link
							to={"/search"}
							className="block mb-2 text-slate-500 text-sm font-medium"
						>
							Products
						</Link>
						<Link
							to={"/login"}
							className="block mb-2 text-slate-500 text-sm font-medium"
						>
							Login
						</Link>
						<Link
							to={"/signup"}
							className="block mb-2 text-slate-500 text-sm font-medium"
						>
							Sign Up
						</Link>
					</div>
					<div className="">
						<h2 className="font-bold mb-6 text-slate-900">Customer Area</h2>
						<a
							className="block mb-2 text-slate-500 text-sm font-medium"
							href=""
						>
							My Account
						</a>
						<a
							className="block mb-2 text-slate-500 text-sm font-medium"
							href=""
						>
							Orders
						</a>
						<a
							className="block mb-2 text-slate-500 text-sm font-medium"
							href=""
						>
							Terms
						</a>
						<a
							className="block mb-2 text-slate-500 text-sm font-medium"
							href=""
						>
							Privacy Policy
						</a>
					</div>
				</div>
				<div className="flex flex-col m-auto md:m-0 w-2/3 md:w-1/3 lg:w-1/4 sm:mb-8 md:mb-0">
					<div>
						<h2 className="font-bold mb-6 text-slate-900">Our Location</h2>
					</div>
					<div className="rounded-xl overflow-hidden mb-2">
						<img
							src="location.jpg"
							alt=""
						/>
					</div>
					<div className="flex mb-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="stroke-logo w-6 h-6 fill-none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
							/>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
							/>
						</svg>
						<p className="mb-2 text-slate-500 text-sm font-medium mx-3">
							1234 Paper Pages Drive<br></br>Birmingham, AL 35203
						</p>
					</div>
					<div className="flex mb-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="stroke-logo w-6 h-6 fill-none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
							/>
						</svg>
						<p className="mb-2 text-slate-500 text-sm font-medium mx-3">
							123 456 7890
						</p>
					</div>
					<div className="flex mb-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="stroke-logo w-6 h-6 fill-none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
							/>
						</svg>
						<p className="mb-2 text-slate-500 text-sm font-medium mx-3">
							notarealemail@booknook.com
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
