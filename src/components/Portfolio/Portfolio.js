import React, { Component } from "react";
import { NavLink } from "react-router-dom";
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
							<div className="project-links">
								<a
									className="project-link"
									href="https://github.com/vinc3nt55/React-Info-Form"
									target="_blank"
								>
									Code
								</a>
								<a
									className="project-link"
									href="https://vinc3nt55.github.io/React-Info-Form/"
									target="_blank"
								>
									Project
								</a>
							</div>
						</div>
						<div className="description">
							<h1>Info Form</h1>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipisicing elit. Quisquam, quidem dolorum
								voluptatem quis repudiandae. Vero numquam,
								rerum, ullam tempore tenetur qui ex ratione
								cupiditate iusto ea saepe eius veritatis animi.
							</p>
						</div>
						<div className="hvr-float-shadow box">
							<div className="project-links">
								<a
									className="project-link"
									href="https://codepen.io/vinc3nt55/pen/wNKmpE"
									target="_blank"
								>
									Code
								</a>
								<a
									className="project-link"
									href="https://codepen.io/vinc3nt55/full/wNKmpE"
									target="_blank"
								>
									Project
								</a>
							</div>
						</div>
						<div className="description">
							<h1>Numbers Facts</h1>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipisicing elit. Quisquam, quidem dolorum
								voluptatem quis repudiandae. Vero numquam,
								rerum, ullam tempore tenetur qui ex ratione
								cupiditate iusto ea saepe eius veritatis animi.
							</p>
						</div>
						<div className="hvr-float-shadow box">
							<div className="project-links">
								<a
									className="project-link"
									href="https://github.com/vinc3nt55/Reactjs-with-Material-Ui-and-Pixabay-API"
									target="_blank"
								>
									Code
								</a>
								<a
									className="project-link"
									href="https://vinc3nt55.github.io/Reactjs-with-Material-Ui-and-Pixabay-API/"
									target="_blank"
								>
									Project
								</a>
							</div>
						</div>
						<div className="description">
							<h1>Image Finder</h1>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipisicing elit. Quisquam, quidem dolorum
								voluptatem quis repudiandae. Vero numquam,
								rerum, ullam tempore tenetur qui ex ratione
								cupiditate iusto ea saepe eius veritatis animi.
							</p>
						</div>
						<div className="hvr-float-shadow box">
							<div className="project-links">
								<a
									className="project-link"
									href="https://codepen.io/vinc3nt55/pen/wYoybO"
									target="_blank"
								>
									Code
								</a>
								<a
									className="project-link"
									href="https://codepen.io/vinc3nt55/full/wYoybO"
									target="_blank"
								>
									Project
								</a>
							</div>
						</div>
						<div className="description">
							<h1>Matching Game</h1>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipisicing elit. Quisquam, quidem dolorum
								voluptatem quis repudiandae. Vero numquam,
								rerum, ullam tempore tenetur qui ex ratione
								cupiditate iusto ea saepe eius veritatis animi.
							</p>
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
