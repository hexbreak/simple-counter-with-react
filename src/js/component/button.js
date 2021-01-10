import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

export function Button() {
	return (
		<div className="row">
			<button className="btn btn-dark">Alert Timer</button>
			<button className="btn btn-dark">Stop / Resume</button>
			<button className="btn btn-dark">Reset Timer</button>
		</div>
	);
}

/*
export function ResetButton() {
    function Reset()
    window.location.reload(false);

    return (
        <div>
            <button onClick={Reset}>Reset Timer</button>
        </div>
    );
}
*/
