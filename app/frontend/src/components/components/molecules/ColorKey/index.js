import React, { Fragment } from "react";
import PropTypes from "prop-types";
import "./style.css";

var compare = null;

console.table(compare);
let final = JSON.stringify(compare);
console.log(final);

const ColorKey = ({ groupA, groupB, groupC, groupD }) => {
	const keySorted =
		groupA || groupB || groupC || groupD ? (
			<div className="ColorKey__Item">
				<div className="ColorKey__Box ColorKey__Sorted"></div>
				<span>Sorted</span>
			</div>
		) : (
			<div className="ColorKey__Item">
				<div className="ColorKey__Box ColorKey__Unsorted"></div>
				<span>Unsorted</span>
			</div>
		);

	const keyA = groupA ? (
		<div className="ColorKey__Item">
			<div className="ColorKey__Box ColorKey__GroupA"></div>
			<span>{groupA}</span>
		</div>
	) : null;

	const keyB = groupB ? (
		<div className="ColorKey__Item">
			<div className="ColorKey__Box ColorKey__GroupB"></div>
			<span>{groupB}</span>
		</div>
	) : null;

	const keyC = groupC ? (
		<div className="ColorKey__Item">
			<div className="ColorKey__Box ColorKey__GroupC"></div>
			<span>{groupC}</span>
		</div>
	) : null;

	const keyD = groupD ? (
		<div className="ColorKey__Item">
			<div className="ColorKey__Box ColorKey__GroupD"></div>
			<span>{groupD}</span>
		</div>
	) : null;

	return (
		<Fragment>
			<div className="ColorKey">
				{keySorted}
				{keyA}
				{keyB}
				{keyC}
				{keyD}
			</div>

			{/* <Speech
				stop={true}
				pause={true}
				resume={true}
				text="Hello World,I'm loving this"
			/> */}
		</Fragment>
	);
};

ColorKey.propTypes = {
	groupA: PropTypes.string,
	groupB: PropTypes.string,
	groupC: PropTypes.string,
	groupD: PropTypes.string,
};

export default ColorKey;
