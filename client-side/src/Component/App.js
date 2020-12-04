import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./../Component/Pages/Home";
import Search from "./../Component/Pages/Search";
import Map from "./../Component/map";

function App() {
	return (
		<BrowserRouter>
			<div>
				<Route path="/" exact component={Home} />
				<Route path="/search" exact component={Search} />
				<Route path="/search/restaurant/:lng/:lat" exact component={Map} />
			</div>
		</BrowserRouter>
	);
}

export default App;
