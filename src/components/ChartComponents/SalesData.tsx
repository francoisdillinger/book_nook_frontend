type SalesType = {
	title: string;
	isDollarAmount: boolean;
	current: string;
	change: number;
	previousPeriod: string;
};

export default function SalesData({
	title,
	isDollarAmount,
	current,
	change,
	previousPeriod,
}: SalesType) {
	console.log("Change: ", change);
	return (
		<div className="bg-gray-100 rounded-lg flex justify-center p-8 w-full sm:half-width-minus-gap md:w-1/4">
			<div className="flex flex-col items-start">
				<h1 className="text-slate-600 font-bold text-lg">{title}</h1>
				<div className="flex items-center my-2">
					<p className="text-slate-500 font-normal text-3xl">
						{isDollarAmount ? "$" : ""}
						{current}
					</p>
					<div className="ml-10">
						{change >= 0 ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								className="w-8 h-8 stroke-green-600 bg-green-200 rounded-full p-1"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
								/>
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								className="w-8 h-8 stroke-red-600 bg-red-200 rounded-full p-1"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181"
								/>
							</svg>
						)}
					</div>
				</div>
				<p className="text-slate-400 font-normal text-sm">
					<span
						className={`${change >= 0 ? "text-green-400" : "text-red-400"}`}
					>
						{change >= 0 ? "+" + change.toFixed(2) : "-" + change.toFixed(2)}%
					</span>{" "}
					vs {previousPeriod}
				</p>
			</div>
		</div>
	);
}
