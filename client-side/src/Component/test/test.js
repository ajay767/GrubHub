import React from "react";

const renderDiv = () => {
	return (
		<>
			<div className="test-div one"></div>
			<div className="test-div two"></div>
			<div className="test-div three"></div>
			<div className="test-div four"></div>
			<div className="test-div five"></div>
			<div className="test-div six"></div>
			<div className="test-div seven"></div>
		</>
	);
};

function test() {
	return <div className="test">{renderDiv()}</div>;
}

export default test;
