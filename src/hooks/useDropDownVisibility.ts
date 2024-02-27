import { useEffect, useReducer, useRef } from "react";

type State = {
	show: boolean;
};

type Action = {
	type: "dropDownOutOfFocus" | "toggleDropDown" | "hasSelectedItem";
};

function reducer(state: State, action: Action) {
	const { type } = action;

	switch (type) {
		case "dropDownOutOfFocus": {
			return { show: false };
		}
		case "toggleDropDown": {
			return { show: !state.show };
		}
		case "hasSelectedItem": {
			return { show: false };
		}
		default:
			return state;
	}
}

function useDropDownVisibility() {
	const [state, dispatch] = useReducer(reducer, { show: false });
	const profileRef = useRef<HTMLDivElement>(null);
	const dropDownRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const dropDownFocusListener = (event: MouseEvent) => {
			let profileRefClicked =
				profileRef.current && profileRef.current.contains(event.target as Node);
			if (profileRefClicked) {
				dispatch({ type: "toggleDropDown" });
				return;
			}

			let dropDownInFocus =
				dropDownRef.current &&
				dropDownRef.current.contains(event.target as Node);
			if (!dropDownInFocus) dispatch({ type: "dropDownOutOfFocus" });
		};

		document.addEventListener("mousedown", dropDownFocusListener);

		return () => {
			document.removeEventListener("mousedown", dropDownFocusListener);
		};
	}, []);

	return {
		state,
		dispatch,
		profileRef,
		dropDownRef,
	};
}

export default useDropDownVisibility;
