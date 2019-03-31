import React, { Component, lazy, Suspense } from "react";
import { NavLink } from "react-router-dom";
// Videos
// import AboutVideo from "./assets/about.mp4";
import SkillsVideo from "./assets/skills.mp4";
import PortfolioVideo from "./assets/portfolio.mp4";
import ContactVideo from "./assets/contact.mp4";

const LazyLoad = lazy(() => import("./LazyLoad"));

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
		// console.log(AboutVideo);
		return (
			<React.Fragment>
				<div className="home-container page">
					<div
						className="card"
						onMouseOver={this.playVideo}
						onMouseOut={this.stopVideo}
					>
						<div className="video-container">
							<Suspense fallback={<h1>Loading....</h1>}>
								<LazyLoad />
							</Suspense>
						</div>
						<NavLink to="/about">About</NavLink>
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
						<NavLink to="/portfolio">Portfolio</NavLink>
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
						<NavLink to="/contactinfo">Contact Info</NavLink>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Home;
