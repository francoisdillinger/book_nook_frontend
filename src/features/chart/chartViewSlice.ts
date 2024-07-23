import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ChartViewState {
	view: "Authors" | "Categories" | "Users";
}

const initialState: ChartViewState = {
	view: "Authors",
};

const chartViewSlice = createSlice({
	name: "chartViewOptions",
	initialState,
	reducers: {
		setView: (state, action: PayloadAction<ChartViewState["view"]>) => {
			state.view = action.payload;
			console.log("Setting View: ", action.payload);
		},
	},
});

export const { setView } = chartViewSlice.actions;

export default chartViewSlice.reducer;
