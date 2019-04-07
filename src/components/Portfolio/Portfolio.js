import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class Portfolio extends Component {
	render() {
		return (
			<React.Fragment>
				<ReactCSSTransitionGroup
					component="div"
					className="portfolio-container"
					transitionName="route"
					transitionEnterTimeout={600}
					transitionLeaveTimeout={400}
					transitionAppearTimeout={600}
					transitionAppear={true}
				>
					<h1>PROJECTS</h1>
					<div className="wrapper">
						<div className="hvr-float-shadow box">
							<span>Project 1</span>
							<div className="project-links">
								<Link className="project-link" to="/">
									Code
								</Link>
								<Link className="project-link" to="/">
									Project
								</Link>
							</div>
						</div>
						<div className="hvr-float-shadow box">
							<span>Project 2</span>
							<div className="project-links">
								<Link className="project-link" to="/">
									Code
								</Link>
								<Link className="project-link" to="/">
									Project
								</Link>
							</div>
						</div>
						<div className="hvr-float-shadow box">
							<span>Project 3</span>
							<div className="project-links">
								<Link className="project-link" to="/">
									Code
								</Link>
								<Link className="project-link" to="/">
									Project
								</Link>
							</div>
						</div>
						<div className="hvr-float-shadow box">
							<span>Project 4</span>
							<div className="project-links">
								<Link className="project-link" to="/">
									Code
								</Link>
								<Link className="project-link" to="/">
									Project
								</Link>
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

export default Portfolio;
