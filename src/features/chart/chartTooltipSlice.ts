import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TooltipStateType = {
	visible: boolean;
	content: JSX.Element | null;
	x: number;
	y: number;
};

const initialState: TooltipStateType = {
	visible: false,
	content: null,
	x: 0,
	y: 0,
};

const chartTooltipSlice = createSlice({
	name: "chartTooltip",
	initialState,
	reducers: {
		setTooltip: (state, action: PayloadAction<TooltipStateType>) => {
			state.visible = action.payload.visible;
			state.content = action.payload.content;
			state.x = action.payload.x;
			state.y = action.payload.y;
		},
	},
});

export const { setTooltip } = chartTooltipSlice.actions;

export default chartTooltipSlice.reducer;
