import React from "react";
import Select, { OptionProps, components } from "react-select";
const customStyles = {
	control: (provided) => ({
		...provided,
		borderColor: "#fff",
		borderRadius: "25px",
	}),
	option: (provided, state) => ({
		...provided,
		backgroundColor: "white",
		":active": { backgroundColor: "#f1f5f9" },
		":hover": { backgroundColor: "#f1f5f9" },
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
				<div className="text-neutral-600">{props.data.label}</div>
			</div>
		</components.Option>
	);
};

const CategoriesChartReactSelect = ({
	options,
	colorScale,
	setFocusedUser,
	focusedCategory,
}) => {
	console.log("Options: ", options);
	const selectOptions = options
		.map((option, index) => {
			return {
				name: option.categoryName,
				label: option.categoryName,
				color: colorScale(index.toString()),
				orders: option.orders.length,
			};
		})
		.filter((option) => option.orders > 0);

	const handleChange = (option) => {
		console.log(option);
		setFocusedUser(option.name);
	};

	const onUsernameClick = (event) => {
		// Prevent the click from reaching the global listener
		// This prevents the focusedCategory from being reset
		event.stopPropagation();
	};
	// console.log(selectOptions.find((option) => option.name === focusedCategory));
	return (
		<div onClick={(e) => onUsernameClick(e)}>
			<Select
				options={selectOptions}
				className="w-60"
				components={{ Option }}
				styles={customStyles}
				placeholder="Highlight Category..."
				onChange={handleChange}
				value={
					selectOptions.find((option) => option.name === focusedCategory) ||
					null
				}
			/>
		</div>
	);
};

export default CategoriesChartReactSelect;
