import React from "react";

export default function SignUpPage() {
	return (
		<React.Fragment>
			<div className="p-6 space-y-4 md:space-y-6 sm:p-8 md:w-3/4 lg:w-1/2 m-auto bg-gray-100 rounded-lg mt-12 mb-12">
				<h1 className="text-xl px-2 font-bold leading-tight tracking-tight text-gray-600 md:text-2xl dark:text-white">
					Register for your account
				</h1>
				<form
					className="space-y-4 md:space-y-6"
					action="#"
				>
					<div className="flex justify-evenly">
						<div className="px-2 w-full">
							<div>
								<label
									htmlFor="firstName"
									className="block mb-2 text-sm font-medium text-gray-600 dark:text-white"
								>
									Your First Name
								</label>
								<input
									type="text"
									name="firstName"
									id="firstName"
									className="bg-gray-50 border border-gray-300 text-gray-600 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									placeholder="name@company.com"
									required
								/>
							</div>
							<div>
								<label
									htmlFor="lastName"
									className="block mb-2 text-sm font-medium text-gray-600 dark:text-white"
								>
									Your Last Name
								</label>
								<input
									type="text"
									name="lastName"
									id="lastName"
									className="bg-gray-50 border border-gray-300 text-gray-600 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									placeholder="name@company.com"
									required
								/>
							</div>
							<div>
								<label
									htmlFor="email"
									className="block mb-2 text-sm font-medium text-gray-600 dark:text-white"
								>
									Your email
								</label>
								<input
									type="email"
									name="email"
									id="email"
									className="bg-gray-50 border border-gray-300 text-gray-600 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									placeholder="name@company.com"
									required
								/>
							</div>
						</div>
						<div className="px-2 w-full">
							<div>
								<label
									htmlFor="password1"
									className="block mb-2 text-sm font-medium text-gray-600 dark:text-white"
								>
									Password
								</label>
								<input
									type="password"
									name="password1"
									id="password1"
									placeholder="••••••••"
									className="bg-gray-50 border border-gray-300 text-gray-600 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									required
								/>
							</div>
							<div>
								<label
									htmlFor="password2"
									className="block mb-2 text-sm font-medium text-gray-600 dark:text-white"
								>
									Password
								</label>
								<input
									type="password"
									name="password2"
									id="password2"
									placeholder="••••••••"
									className="bg-gray-50 border border-gray-300 text-gray-600 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									required
								/>
							</div>
						</div>
					</div>
					<div className="flex items-center justify-between">
						<div className="flex items-start">
							<div className="flex items-center h-5">
								<input
									id="remember"
									aria-describedby="remember"
									type="checkbox"
									className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
									required
								/>
							</div>
							<div className="ml-3 text-sm">
								<label
									htmlFor="terms"
									className="text-gray-500 dark:text-gray-300"
								>
									I agree to the Terms and Conditions.
								</label>
							</div>
						</div>
					</div>
					<button
						type="submit"
						className="w-full text-white bg-logo hover:scale-105 transition focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
					>
						Sign up
					</button>
					<p className="text-sm font-light text-gray-500 dark:text-gray-400">
						Already have an account?
						<a
							href="#"
							className="font-medium text-primary-600 hover:underline dark:text-primary-500 ml-2"
						>
							Sign in
						</a>
					</p>
				</form>
			</div>
		</React.Fragment>
	);
}
