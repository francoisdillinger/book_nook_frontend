import React from "react";
import Select, { OptionProps, components } from "react-select";
const customStyles = {
	control: (provided) => ({
		...provided,
		backgroundColor: "rgb(243 244 246)",
		borderColor: "#fff",
		borderRadius: "25px",
		padding: "0.2em",
	}),
	option: (provided, state) => ({
		...provided,
		backgroundColor: "white",
		":active": { backgroundColor: "rgb(243 244 246)" },
		":hover": { backgroundColor: "rgb(243 244 246)" },
	}),
	singleValue: (provided) => ({
		...provided,
		color: "rgb(107 114 128)", // Set the color for the selected value
	}),
};

const Option = (props: OptionProps) => {
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

const AdminChartReactSelect = ({
	placeHolder,
	filterChart,
	setChartFilter,
}) => {
	// console.log("Options: ", options);
	const filterOptions = filterChart.map((option, index) => {
		return {
			name: option.name,
			label: option.name,
		};
	});

	const handleChange = (option) => {
		console.log(option);
		setChartFilter(option.name);
	};

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
	// console.log(selectOptions.find((option) => option.name === focusedUser));
	return (
		// <div onClick={(e) => onUsernameClick(e)}>
		<Select
			options={filterOptions}
			className="w-40"
			components={{ Option }}
			styles={customStyles}
			placeholder={placeHolder}
			onChange={handleChange}
			// value={
			// 	selectOptions.find((option) => option.name === focusedUser) || null
			// }
		/>
		// </div>
	);
};

export default AdminChartReactSelect;
