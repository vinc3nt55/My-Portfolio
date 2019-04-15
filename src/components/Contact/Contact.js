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
								Email:
								<a href="mailto:dummy@gmail.com">
									{" "}
									dummy@gmail.com
								</a>
							</label>
							<label>
								Skype ID: <a href="/">vinc3nt55</a>
							</label>
							<label className="resume">
								Resume: <Link to="/resume">PDF</Link>
							</label>
						</div>
						<div className="icons">
							<h1>Check Me Out At</h1>
							<div>
								<a className="icon" href="/about">
									<i class="fab fa-github" />
								</a>
								<a className="icon" href="/about">
									<i class="fab fa-codepen" />
								</a>
								<a className="icon" href="/about">
									<i class="fab fa-free-code-camp" />
								</a>
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
