import React, { Component } from "react";

import File from "./Resume - Rick Vincent Saberon.pdf";

class Resume extends Component {
	render() {
		return (
			<React.Fragment>
				<div>
					<embed style={styles} src={File} />
				</div>
			</React.Fragment>
		);
	}
}
const styles = {
	height: "100vh",
	width: "100vw"
};
export default Resume;
