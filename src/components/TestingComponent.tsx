import React from "react";

const TestComponent = ({ width, height, number }) => {
	// console.log("Wrapper Height: ", height);
	console.log(`Wrapper ${number} Width: ${width}`);
	return <div>hi</div>;
};

export default TestComponent;
