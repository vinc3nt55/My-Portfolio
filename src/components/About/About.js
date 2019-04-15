import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import Avatar from "./about-assets/avatar.jpg";

class About extends Component {
	backHome = () => {
		this.props.backHome();
	};
	render() {
		return (
			<ReactCSSTransitionGroup
				component="div"
				className="about-container"
				transitionName="route"
				transitionEnterTimeout={600}
				transitionLeaveTimeout={400}
				transitionAppearTimeout={600}
				transitionAppear={true}
			>
				<div>
					<h1>ABOUT ME</h1>
					<p>
						lorem ipsom Notice the use of %PUBLIC_URL% in the tags
						above. It will be replaced with the URL of the `public`
						folder during the build. Only files inside the `public`
						folder can be referenced from the HTML. Unlike
						"/favicon.ico" or "favicon.ico",
						"%PUBLIC_URL%/favicon.ico" will work correctly both with
						client-side routing and a non-root public URL. Learn how
						to configure a non-root public URL by running `npm run
						build`.
					</p>
					<NavLink to="/" className="hvr-icon-back">
						<i class="fa fa-chevron-circle-left hvr-icon" />
						Back
					</NavLink>
				</div>
			</ReactCSSTransitionGroup>
		);
	}
}

export default About;

// <div className="img">
// 	<img src={Avatar} alt="Avatar" />
// </div>
