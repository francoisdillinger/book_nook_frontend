// store.ts
import { configureStore } from "@reduxjs/toolkit";
import chartViewReducer from "./../features/chart/chartViewSlice"; // Adjust the path as necessary
import highlightDataReducer from "../features/chart/chartHighlightDataSlice";
import chartSortOptionsReducer from "../features/chart/chartSortOptionsSlice";
import chartTimeFilterReducer from "../features/chart/chartTimeFilterSlice";

const rootReducer = {
	chartView: chartViewReducer,
	highlightData: highlightDataReducer,
	chartSortOptions: chartSortOptionsReducer,
	chartTimeFilter: chartTimeFilterReducer,
	// Add other reducers here
};

const store = configureStore({
	reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
