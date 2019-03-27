import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Contact extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="container-contact">
					<h1>CONTACT INFO</h1>
					<div className="contact-info">
						<div className="email">
							<label>Email: </label>
							<label>
								<a href="mailto:dummy@gmail.com">
									dummy@gmail.com
								</a>
							</label>
						</div>
						<div className="phone">
							<label>Phone: </label>
							<label>
								<a href="about">0906-XXX-XXXX</a>
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
					<div className="contact-to-home">
						<NavLink to="/" className="home">
							Home
						</NavLink>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Contact;
