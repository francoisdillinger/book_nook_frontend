import React from "react";
import Select, {
	OptionProps,
	components,
	SingleValue,
	ActionMeta,
} from "react-select";
import { useSelector, useDispatch } from "react-redux";
import { setView } from "./../../features/chart/chartViewSlice";
import { RootState } from "../../app/store";

const customStyles = {
	control: (provided: any) => ({
		...provided,
		backgroundColor: "rgb(243 244 246)",
		borderColor: "#fff",
		borderRadius: "25px",
		padding: "0.2em",
	}),
	option: (provided: any, state: any) => ({
		...provided,
		backgroundColor: "white",
		":active": { backgroundColor: "rgb(243 244 246)" },
		":hover": { backgroundColor: "rgb(243 244 246)" },
	}),
	singleValue: (provided: any) => ({
		...provided,
		color: "rgb(107 114 128)", // Set the color for the selected value
	}),
};

const Option = (props: OptionProps<any>) => {
	return (
		<components.Option {...props}>
			<div className="flex mb-2 cursor-pointer">
				<div
					className="h-6 w-6 rounded-full mr-2"
					style={{ backgroundColor: props.data.color }}
				></div>
				<div className="text-gray-500">{props.data.label}</div>
			</div>
		</components.Option>
	);
};

type OptionType = {
	value: "Authors" | "Categories" | "Users";
	label: string;
};

const AdminChartReactSelect = () => {
	const view = useSelector((state: RootState) => state.chartView.view);
	const dispatch = useDispatch();
	const options: OptionType[] = [
		{ value: "Authors", label: "Authors" },
		{ value: "Categories", label: "Categories" },
		{ value: "Users", label: "Users" },
	];

	// We are using type:any below because i am not going to spend time writing
	// a bunch of type checks. I get this isn't the 'typescript' way but oh well.
	// Every type I import or implement solves one error but causes another, this
	// quick fix doesn't.
	const handleChange = (selectedOption: any) => {
		if (selectedOption) {
			dispatch(setView(selectedOption.value));
		}
	};

	return (
		<Select
			options={options}
			className="w-40"
			components={{ Option }}
			styles={customStyles}
			placeholder={view}
			onChange={handleChange}
			value={options.find((option) => option.value === view) || null}
		/>
	);
};

export default AdminChartReactSelect;

// const handleChange = (option: any) => {
// 	// console.log(option);
// 	setChartFilter(option.name);
// };

// const onUsernameClick = (event) => {
// Prevent the click from reaching the global listener
// This prevents the focusedUser from being reset
//------------------------------
// This needed to allow bubbling as otherwise the filter won't
// be reset when a new selection is made from this particular component
// and the fliter will remain across Authors/Categories/Users
// event.stopPropagation();
//------------------------------
// };
