// Used in the following components:
// ChartReactSelect
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CombinedChartDataOrdersType } from "../../components/ChartComponents/LineChart";

type HighlightType = {
	options: CombinedChartDataOrdersType[] | [];
	focusedDataPoint: string;
};

const initialState: HighlightType = {
	options: [],
	focusedDataPoint: "",
};

const chartHighlightDataSlice = createSlice({
	name: "highlightOptions",
	initialState,
	reducers: {
		setOptions: (state, action: PayloadAction<HighlightType["options"]>) => {
			console.log("options: ", action.payload);
			state.options = action.payload;
		},
		setDataPoint: (
			state,
			action: PayloadAction<HighlightType["focusedDataPoint"]>
		) => {
			state.focusedDataPoint = action.payload;
		},
	},
});

export const { setOptions, setDataPoint } = chartHighlightDataSlice.actions;

export default chartHighlightDataSlice.reducer;
