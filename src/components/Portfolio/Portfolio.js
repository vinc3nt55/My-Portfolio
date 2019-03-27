import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

class Portfolio extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="portfolio-container">
					<h1>PORTFOLIO</h1>
					<div className="wrapper">
						<div className="hvr-float-shadow box">
							Project 1{" "}
							<div className="project-links">
								<Link to="/">Source Code</Link>
								<Link to="/">Project</Link>
							</div>
						</div>
						<div className="hvr-float-shadow box">
							Project 2{" "}
							<div className="project-links">
								<Link to="/">Source Code</Link>
								<Link to="/">Project</Link>
							</div>
						</div>
						<div className="hvr-float-shadow box">
							Project 3{" "}
							<div className="project-links">
								<Link to="/">Source Code</Link>
								<Link to="/">Project</Link>
							</div>
						</div>
						<div className="hvr-float-shadow box">
							Project 4
							<div className="project-links">
								<Link to="/">Source Code</Link>
								<Link to="/">Project</Link>
							</div>
						</div>
					</div>
					<div className="porfolio-to-home">
						<NavLink to="/" className="home">
							Home
						</NavLink>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Portfolio;
