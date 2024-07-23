import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ChartSortType =
	| "Sort: A-Z"
	| "Sort: Z-A"
	| "Total Items: Ascending"
	| "Total Items: Descending"
	| "Total $ Amount: Ascending"
	| "Total $ Amount: Descending";

const options: ChartSortType[] = [
	"Sort: A-Z",
	"Sort: Z-A",
	"Total Items: Ascending",
	"Total Items: Descending",
	"Total $ Amount: Ascending",
	"Total $ Amount: Descending",
];

const initialState = {
	sortOption: "Sort: A-Z",
	sortOptions: options,
};

const chartSortOptionsSlice = createSlice({
	name: "chartSortOptions",
	initialState,
	reducers: {
		setSortOption: (state, action: PayloadAction<ChartSortType>) => {
			// console.log("We sorting: ", action.payload);
			state.sortOption = action.payload;
		},
	},
});

export const { setSortOption } = chartSortOptionsSlice.actions;

export default chartSortOptionsSlice.reducer;
