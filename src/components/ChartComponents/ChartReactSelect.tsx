import { ScaleOrdinal } from "d3";
import React from "react";
import Select, { components } from "react-select";
import { CombinedChartDataOrdersType } from "./LineChart";
import { colorScale } from "../../utils/junk";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import { setDataPoint } from "../../features/chart/chartHighlightDataSlice";
const customStyles = {
	control: (provided: any) => ({
		...provided,
		backgroundColor: "rgb(243 244 246)",
		borderColor: "#fff",
		borderRadius: "25px",
		padding: "0.2em",
	}),
	option: (provided: any) => ({
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

const Option = (props: any) => {
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

// type ChartSelectType = {
// 	options: CombinedChartDataOrdersType[] | [];
// 	// colorScale: ScaleOrdinal<string, string, never>|;
// 	// setFocusedUser: Function;
// 	focusedAuthor: string;
// };

const ChartReactSelect = () => {
	// console.log("Options: ", options);
	// console.log("colorCalse: ", colorScale);
	const { options, focusedDataPoint } = useSelector(
		(state: RootState) => state.highlightData
	);
	const dispatch = useDispatch();
	const selectOptions = options
		.map(
			(
				option: { name: any; orders: string | any[] },
				index: { toString: () => any }
			) => {
				return {
					name: option.name,
					label: option.name,
					color: colorScale(index.toString()),
					orders: option.orders.length,
				};
			}
		)
		.filter((option: { orders: number }) => option.orders > 0);

	const handleChange = (option: any) => {
		// console.log(option);
		dispatch(setDataPoint(option.name));
	};

	const onUsernameClick = (
		event: React.MouseEvent<HTMLDivElement, MouseEvent>
	) => {
		// Prevent the click from reaching the global listener
		// This prevents the focusedAuthor from being reset
		event.stopPropagation();
	};
	// console.log(selectOptions.find((option) => option.name === focusedAuthor));
	return (
		<div onClick={(e) => onUsernameClick(e)}>
			<Select
				options={selectOptions}
				className="w-60"
				components={{ Option }}
				styles={customStyles}
				placeholder="Highlight..."
				onChange={handleChange}
				value={
					selectOptions.find(
						(option: { name: any }) => option.name === focusedDataPoint
					) || null
				}
			/>
		</div>
	);
};

export default ChartReactSelect;
