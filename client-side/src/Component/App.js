import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./../Component/Pages/Home";
import Search from "./../Component/Pages/Search";

function App() {
	return (
		<BrowserRouter>
			<div>
				<Route path="/" exact component={Home} />
				<Route path="/search" exact component={Search} />
			</div>
		</BrowserRouter>
		// <div>
		// 	<Header title="Grubhub" />
		// 	<Test />
		// </div>
	);
}

export default App;
