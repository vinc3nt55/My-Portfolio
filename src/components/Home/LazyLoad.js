import React, { Component, lazy, Suspense } from "react";
import AboutVideo from "./assets/about.mp4";

class LazyLoad extends Component {
	render() {
		return (
			<React.Fragment>
				<video
					ref="about"
					loop
					muted
					src={AboutVideo}
					type="video/mp4"
					content="video"
				/>
			</React.Fragment>
		);
	}
}

export default LazyLoad;
