import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
// import HTML5 from "./assets/html5-brands.svg";
// import CSS3 from "./assets/css3-alt-brands.svg";
// import Bootstrap from "./assets/bootstrap-brands.svg";
// import JS from "./assets/js-brands.svg";
// import ReactJS from "./assets/react-brands.svg";
// import Wordpress from "./assets/wordpress-brands.svg";
import MaterialUI from "./assets/material-ui.png";
// import Sass from "./assets/sass-brands.svg";

class Skills extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="skills-container">
					<div>
						<h1>SKILLS</h1>
						<div className="skills-wrapper">
							<ReactCSSTransitionGroup
								component="div"
								className="skill"
								transitionName="route"
								transitionEnterTimeout={600}
								transitionLeaveTimeout={400}
								transitionAppearTimeout={600}
								transitionAppear={true}
							>
								<label>HTML5</label>

								<span
									style={{
										fontSize: "7rem",
										color: "#ff6600"
									}}
								>
									<i class="fab fa-html5" />
								</span>
							</ReactCSSTransitionGroup>

							<ReactCSSTransitionGroup
								component="div"
								className="skill"
								transitionName="route"
								transitionEnterTimeout={600}
								transitionLeaveTimeout={400}
								transitionAppearTimeout={600}
								transitionAppear={true}
							>
								<label>CSS3</label>
								<span
									style={{
										fontSize: "7rem",
										color: "#0099ff"
									}}
								>
									<i class="fab fa-css3-alt" />
								</span>
							</ReactCSSTransitionGroup>
							<ReactCSSTransitionGroup
								component="div"
								className="skill"
								transitionName="route"
								transitionEnterTimeout={600}
								transitionLeaveTimeout={400}
								transitionAppearTimeout={600}
								transitionAppear={true}
							>
								<label>JavaScript</label>

								<span
									style={{
										fontSize: "7rem",
										color: "#ff9900"
									}}
								>
									<i class="fab fa-js" />
								</span>
							</ReactCSSTransitionGroup>
							<ReactCSSTransitionGroup
								component="div"
								className="skill"
								transitionName="route"
								transitionEnterTimeout={600}
								transitionLeaveTimeout={400}
								transitionAppearTimeout={600}
								transitionAppear={true}
							>
								<label>Flex Box</label>
							</ReactCSSTransitionGroup>
							<ReactCSSTransitionGroup
								component="div"
								className="skill"
								transitionName="route"
								transitionEnterTimeout={600}
								transitionLeaveTimeout={400}
								transitionAppearTimeout={600}
								transitionAppear={true}
							>
								<label>Grid</label>
							</ReactCSSTransitionGroup>
							<ReactCSSTransitionGroup
								component="div"
								className="skill"
								transitionName="route"
								transitionEnterTimeout={600}
								transitionLeaveTimeout={400}
								transitionAppearTimeout={600}
								transitionAppear={true}
							>
								<label>Bootstrap 4</label>

								<span
									style={{
										fontSize: "7rem",
										color: "#0033cc"
									}}
								>
									<i class="fab fa-bootstrap" />
								</span>
							</ReactCSSTransitionGroup>
							<ReactCSSTransitionGroup
								component="div"
								className="skill"
								transitionName="route"
								transitionEnterTimeout={600}
								transitionLeaveTimeout={400}
								transitionAppearTimeout={600}
								transitionAppear={true}
							>
								<label>Material-Ui</label>
								<img src={MaterialUI} alt="material-ui icon" />
							</ReactCSSTransitionGroup>
							<ReactCSSTransitionGroup
								component="div"
								className="skill"
								transitionName="route"
								transitionEnterTimeout={600}
								transitionLeaveTimeout={400}
								transitionAppearTimeout={600}
								transitionAppear={true}
							>
								<label>Sass</label>

								<span
									style={{
										fontSize: "7rem",
										color: "#ff0066"
									}}
								>
									<i class="fab fa-sass" />
								</span>
							</ReactCSSTransitionGroup>
							<ReactCSSTransitionGroup
								component="div"
								className="skill"
								transitionName="route"
								transitionEnterTimeout={600}
								transitionLeaveTimeout={400}
								transitionAppearTimeout={600}
								transitionAppear={true}
							>
								<label>React.js</label>

								<span
									style={{
										fontSize: "7rem",
										color: "#3399ff"
									}}
								>
									<i class="fab fa-react" />
								</span>
							</ReactCSSTransitionGroup>
							<ReactCSSTransitionGroup
								component="div"
								className="skill"
								transitionName="route"
								transitionEnterTimeout={600}
								transitionLeaveTimeout={400}
								transitionAppearTimeout={600}
								transitionAppear={true}
							>
								<label>WordPress</label>

								<span
									style={{
										fontSize: "7rem",
										color: "#3333cc"
									}}
								>
									<i class="fab fa-wordpress" />
								</span>
							</ReactCSSTransitionGroup>
						</div>
						<ReactCSSTransitionGroup
							transitionName="route"
							transitionEnterTimeout={600}
							transitionLeaveTimeout={400}
							transitionAppearTimeout={600}
							transitionAppear={true}
						>
							<NavLink to="/" className="hvr-icon-back">
								<i class="fa fa-chevron-circle-left hvr-icon" />
								Back
							</NavLink>
						</ReactCSSTransitionGroup>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Skills;
