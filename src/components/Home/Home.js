import React, { Component } from "react";
import { NavLink } from "react-router-dom";
// Videos
import AboutVideo from "./assets/about.mp4";
import SkillsVideo from "./assets/skills.mp4";
import PortfolioVideo from "./assets/portfolio.mp4";
import ContactVideo from "./assets/contact.mp4";

// If nav is hovered play the bg video
class Home extends Component {
	playVideo = e => {
		if (e.target.childNodes[0].firstChild || e.target.childNodes[1]) {
			e.target.childNodes[0].firstChild.play();
		}
	};

	stopVideo = e => {
		if (e.target.childNodes[0].firstChild || e.target.childNodes[1]) {
			e.target.childNodes[0].firstChild.pause();
		}
	};

	render() {
		return (
			<React.Fragment>
				<div className="home-container">
					<div
						className="card"
						onMouseOver={this.playVideo}
						onMouseOut={this.stopVideo}
					>
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
						<NavLink to="/https://vinc3nt55.github.io/My-Portfolio/about">About</NavLink>
					</div>
					<div
						className="card"
						onMouseOver={this.playVideo}
						onMouseOut={this.stopVideo}
					>
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
						<NavLink to="/skills">Skills</NavLink>
					</div>
					<div
						className="card"
						onMouseOver={this.playVideo}
						onMouseOut={this.stopVideo}
					>
						<div className="video-container">
							<video
								ref="about"
								loop
								muted
								src={PortfolioVideo}
								type="video/mp4"
								content="video"
							/>
						</div>
						<NavLink to="/https://vinc3nt55.github.io/My-Portfolio/portfolio">Portfolio</NavLink>
					</div>
					<div
						className="card"
						onMouseOver={this.playVideo}
						onMouseOut={this.stopVideo}
					>
						<div className="video-container">
							<video
								ref="vidRef"
								loop
								src={ContactVideo}
								type="video/mp4"
							/>
						</div>
						<NavLink to="/https://vinc3nt55.github.io/My-Portfolio/contactinfo">Contact Info</NavLink>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Home;
