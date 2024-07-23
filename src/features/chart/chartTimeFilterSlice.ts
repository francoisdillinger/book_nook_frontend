import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ChartTimePeriodType =
	| "day"
	| "week"
	| "month"
	| "half-year"
	| "year"
	| "max";

const initialState = {
	timeFilter: "max",
};

const chartTimeFilterSlice = createSlice({
	name: "chartTimeFilter",
	initialState,
	reducers: {
		setTimeFilter: (state, action: PayloadAction<ChartTimePeriodType>) => {
			console.log("We filtering time: ", action.payload);
			state.timeFilter = action.payload;
		},
	},
});

export const { setTimeFilter } = chartTimeFilterSlice.actions;

export default chartTimeFilterSlice.reducer;
