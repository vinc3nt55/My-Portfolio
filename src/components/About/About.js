import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Avatar from "./about-assets/avatar.png";

class About extends Component {
	backHome = () => {
		this.props.backHome();
	};
	render() {
		return (
			<React.Fragment>
				<div className="about-container">
					<div>
						<div className="img">
							<img src={Avatar} alt="Avatar"/>
						</div>
						<h1>ABOUT ME</h1>
						<p>
							lorem ipsom Notice the use of %PUBLIC_URL% in the
							tags above. It will be replaced with the URL of the
							`public` folder during the build. Only files inside
							the `public` folder can be referenced from the HTML.
							Unlike "/favicon.ico" or "favicon.ico",
							"%PUBLIC_URL%/favicon.ico" will work correctly both
							with client-side routing and a non-root public URL.
							Learn how to configure a non-root public URL by
							running `npm run build`.
						</p>
						<div className="about-to-home">
							<NavLink to="/" className="home">
								Home
							</NavLink>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default About;
