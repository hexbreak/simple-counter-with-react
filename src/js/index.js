//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";
import { ResetButton } from "./component/home.js";

var i = 0;
setInterval(function() {
	const six = Math.floor(i / 100000);
	const five = Math.floor(i / 10000);
	const four = Math.floor(i / 1000);
	const three = Math.floor(i / 100);
	const two = Math.floor(i / 10);
	const one = Math.floor(i / 1);
	// test logic
	console.log(six, five, four, three, two, one);
	i++;
	ReactDOM.render(
		<Home
			counterSix={six}
			counterFive={five}
			counterFour={four}
			counterThree={three}
			counterTwo={two}
			counterOne={one}
		/>,
		document.querySelector("#app")
	);
}, 1000);
