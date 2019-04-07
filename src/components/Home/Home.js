import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
// Videos
import AboutVideo from "./assets/about.mp4";
import SkillsVideo from "./assets/skills.mp4";
import ProjectsVideo from "./assets/portfolio.mp4";
import ContactVideo from "./assets/contact.mp4";

// If nav is hovered play the bg video
class Home extends Component {
	playVideo = e => {
		// console.log(e.target);
		if (e.target.childNodes[1].childNodes[0]) {
			e.target.childNodes[1].childNodes[0].play();
		}
	};

	stopVideo = e => {
		if (e.target.childNodes[1].childNodes[0]) {
			e.target.childNodes[1].childNodes[0].load();
		}
	};

	render() {
		// console.log(AboutVideo);
		return (
			<React.Fragment>
				<div className="home-container">
					<NavLink
						className="links about-animate"
						to="/about"
						onMouseOver={this.playVideo}
						onMouseOut={this.stopVideo}
					>
						About Me
						<div className="video-container">
							<video
								ref="about"
								loop
								muted
								src={AboutVideo}
								type="video/mp4"
								content="video"
							/>
						</div>
					</NavLink>

					<NavLink
						className="links"
						to="/skills"
						onMouseOver={this.playVideo}
						onMouseOut={this.stopVideo}
					>
						Skills
						<div className="video-container">
							<video
								ref="about"
								loop
								muted
								src={SkillsVideo}
								type="video/mp4"
								content="video"
							/>
						</div>
					</NavLink>
					<NavLink
						className="links"
						to="/portfolio"
						onMouseOver={this.playVideo}
						onMouseOut={this.stopVideo}
					>
						Projects
						<div className="video-container">
							<video
								ref="about"
								loop
								muted
								src={ProjectsVideo}
								type="video/mp4"
								content="video"
							/>
						</div>
					</NavLink>
					<NavLink
						className="links"
						to="/contactinfo"
						onMouseOver={this.playVideo}
						onMouseOut={this.stopVideo}
					>
						Contact Me
						<div className="video-container">
							<video
								ref="about"
								loop
								muted
								src={ContactVideo}
								type="video/mp4"
								content="video"
							/>
						</div>
					</NavLink>
				</div>
			</React.Fragment>
		);
	}
}

export default Home;
