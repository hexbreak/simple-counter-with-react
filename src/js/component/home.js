import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home(props) {
	return (
		<div className="container">
			<div className="clock-img">
				<i className="far fa-clock" />
			</div>
			<div className="clock-six">{props.counterSix % 10}</div>
			<div className="clock-five">{props.counterFive % 10}</div>
			<div className="clock-four">{props.counterFour % 10}</div>
			<div className="clock-three">{props.counterThree % 10}</div>
			<div className="clock-two">{props.counterTwo % 10}</div>
			<div className="clock-one">{props.counterOne % 10}</div>
		</div>
	);
}

Home.propTypes = {
	counterSix: PropTypes.number,
	counterFive: PropTypes.number,
	counterFour: PropTypes.number,
	counterThree: PropTypes.number,
	counterTwo: PropTypes.number,
	counterOne: PropTypes.number
};
