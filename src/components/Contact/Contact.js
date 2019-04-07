import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class Contact extends Component {
	render() {
		return (
			<React.Fragment>
				<ReactCSSTransitionGroup
					component="div"
					className="container-contact"
					transitionName="route"
					transitionEnterTimeout={600}
					transitionLeaveTimeout={400}
					transitionAppearTimeout={600}
					transitionAppear={true}
				>
					<h1>CONTACT INFO</h1>
					<div className="contact-info">
						<div className="contact">
							<label>
								Email:{" "}
								<a href="mailto:dummy@gmail.com">
									dummy@gmail.com
								</a>
							</label>
							<label>
								Skype ID: <Link href="about">vinc3nt55</Link>
							</label>
							<label className="resume">
								Resume: <Link to="/resume">Resume</Link>
							</label>
						</div>
						<div className="icons">
							<h1>Check Me Out At</h1>
							<div>
								<div>Github Icon</div>
								<div>Codepen Icon</div>
								<div>FCC Icon</div>
							</div>
						</div>
					</div>
					<NavLink to="/" className="hvr-icon-back">
						<i class="fa fa-chevron-circle-left hvr-icon" />
						Back
					</NavLink>
				</ReactCSSTransitionGroup>
			</React.Fragment>
		);
	}
}

export default Contact;
